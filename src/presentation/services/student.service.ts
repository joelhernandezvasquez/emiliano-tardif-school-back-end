
import { prisma } from "../../data/postgres";
import { CustomError } from "../../domain/errors/custom.error";
import { Student } from "../interfaces/student.interface";


export class StudentServices{
    constructor(){}

    private checkIfStudentExist = async (student:Student):Promise<Boolean>=>{
      try{
         const studentExist = await prisma.students.findFirst({
            where: {
                phone: student.phone,
                first_name: { equals: student.first_name, mode: 'insensitive' },
                last_name: { equals: student.last_name, mode: 'insensitive' }
              }});
          
              return studentExist ? true : false;
      }
      catch(err){
         throw CustomError.internalServerError('internal server error');
      }
   
    }

    private checkStudentById = async(id:number) =>{
      try{
         const student = await prisma.students.findUnique(({
            where:{id:id}
         }))
         return student;
      }
      catch(err){
         throw CustomError.internalServerError('Internal Server Error');
      }
    }

    public createStudent = async (student:Student) =>{

      try{
         const existedStudent = await this.checkIfStudentExist(student);

         if(existedStudent){
            throw CustomError.badRequest('Student already exist');
         }
    
         const newStudent = await prisma.students.create({
            data:{
               first_name:student.first_name,
               last_name:student.last_name,
               email:student.email,
               phone:student.phone!,
               gender:student.gender,
               direccion:student.direccion,
               parroquia:student.parroquia,
               asuntos_medicos:student.asuntos_medicos
            }
         })
         const {active,created_at,...studentEntity} = newStudent;
          return {...studentEntity};
      }
      catch(err){
         throw CustomError.internalServerError('internal server error');
      }
    
    }

    public getAllStudents = async () =>{
      try{
       const students = await prisma.students.findMany();
       return students;
      }
      catch(err){
         throw CustomError.internalServerError('internal server error');
      }
    }

    public getAStudent = async (studentId:number) =>{
     try{
       const student = await this.checkStudentById(studentId);
      
       if(!student){
         throw CustomError.notFound('Student does not exist');
       }

       return student;

    }
     catch(error){
      throw CustomError.notFound('Student does not exist');
     }
    }
}