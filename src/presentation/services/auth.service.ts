import { bcryptAdapter } from "../../config/bcrypt.adapter";
import { JwtAdapter } from "../../config/jwt.adapter";
import { prisma } from "../../data/postgres";
import { CustomError } from "../../domain/errors/custom.error";


interface User{
    email:string,
    password:string
}

export class AuthService{
    constructor(
    ){}

    public async registerUser(registerUser:User){
        const {email, password} = registerUser;
        const existUser  = await prisma.users.findUnique({
            where:{email}
        })
        if(existUser) throw CustomError.badRequest('Email already exist');
   
        try{
            const user = await prisma.users.create({
                data: {
                 email,
                 name: "Default Name",
                 role:'admin',
                 password_hash:bcryptAdapter.hash(password)
                },
              })
   
           return {user};
        } 
   
        catch(error){
          throw CustomError.internalServerError(`${error}`)
        }
       }


    public async loginUser(loginUser:User){
     const {email, password} = loginUser;
     const user = await prisma.users.findUnique({
        where:{email}
     });

    if(!user) throw CustomError.badRequest('Email not exist in our records.');

    const isMatching = bcryptAdapter.compare(password,user.password_hash);

     if(!isMatching) throw CustomError.badRequest('Password is invalid.');

     const{password_hash,...userEntity} = user;

    const token = await JwtAdapter.generateToken({id:user.id});
   
    const expiresAt = JwtAdapter.decodeTokenExpiration(token as string);

    if(!token)
    throw CustomError.internalServerError('Error while creating JWT')

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
       throw CustomError.internalServerError('invalid user');
      }
      const token = await JwtAdapter.generateToken({id:userId});
      return token;
      }

      catch(error){
        throw CustomError.internalServerError('Error while generating JWT')
      }
      
     
    }

   
}