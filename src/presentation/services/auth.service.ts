import { bcryptAdapter } from "../../config/bcrypt.adapter";
import { JwtAdapter } from "../../config/jwt.adapter";
import { prisma } from "../../data/postgres";
import { CustomError } from "../../domain/errors/custom.error";
import { Util } from "../../config/util";

interface User{
    name?:string,
    email:string,
    password:string
}

export class AuthService{
    constructor(
    ){}

    public async registerUser(registerUser:User){
        const {name,email,password} = registerUser;
        const existUser  = await prisma.users.findUnique({
            where:{email}
        })
        if(existUser) throw CustomError.badRequest('Email already exist');
   
        try{
            const user = await prisma.users.create({
                data: {
                 email,
                 name:name!,
                 role:'admin',
                 password_hash:await bcryptAdapter.hash(password)
                },
              })
   
           const {password_hash,...userEntity} = user;

           return {user:userEntity};
        } 
   
        catch(error){
          if(Util.isPrismaError(error,'P2002')){
            throw CustomError.badRequest('Email already exist');
          }
          throw CustomError.wrap(error,'Error while creating user');
        }
       }


    public async loginUser(loginUser:User){
     const {email, password} = loginUser;
     const user = await prisma.users.findUnique({
        where:{email}
     });

    if(!user) throw CustomError.badRequest('Invalid credentials');

    const isMatching = await bcryptAdapter.compare(password,user.password_hash);

     if(!isMatching) throw CustomError.badRequest('Invalid credentials');

     const{password_hash,...userEntity} = user;

    const token = await JwtAdapter.generateToken({id:user.id});

    if(!token)
    throw CustomError.internalServerError('Error while creating JWT')

    const expiresAt = JwtAdapter.decodeTokenExpiration(token as string);

      return{
        user:userEntity,
        token,
        expiresAt
      }
    }

    public refreshToken = async (userId:number) =>{
      try{
         const userIsValid = await prisma.users.findUnique({
        where:{id:userId}
      })
      
      if(!userIsValid){
       throw CustomError.unauthorized('Invalid user');
      }
      const token = await JwtAdapter.generateToken({id:userId});
      return token;
      }

      catch(error){
        throw CustomError.wrap(error,'Error while generating JWT');
      }
      
     
    }

   
}