
import { prisma } from "../../data/postgres";
import { CustomError } from "../../domain/errors/custom.error";
import { Student } from "../interfaces/student.interface";


export class StudentServices{
    constructor(){}

    private checkIfStudentExist = async (student:Student):Promise<Boolean>=>{
      const studentExist = await prisma.students.findFirst({
        where: {
            phone: student.phone,
            first_name: { equals: student.first_name, mode: 'insensitive' },
            last_name: { equals: student.last_name, mode: 'insensitive' }
          }});
      
          return studentExist ? true : false;
    }

    public createStudent = async (student:Student) =>{
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
}