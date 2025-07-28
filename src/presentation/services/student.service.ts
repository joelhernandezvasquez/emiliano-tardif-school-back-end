
import { prisma } from "../../data/postgres";
import { Prisma } from "@prisma/client";
import { CustomError } from "../../domain/errors/custom.error";
import { Student, StudentQueryParams, StudentsSummary } from "../interfaces/student.interface";

enum filterConditionValues{
    Active = 'Active',
    Inactive = 'Inactive',
    Recent = 'Recent',
    Oldest = 'Oldest',
    AZ = 'Name (A-Z)',
    ZA = 'Name (Z-A)',
    MostCourses='Most Courses',
    LeastCourses = 'Least Courses'
}
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

    public checkStudentById = async(id:number) =>{
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
       const students = await prisma.students.findMany({
        select:{
          id:true,
          first_name:true,
          last_name:true,
          email:true,
          phone:true,
          gender:true,
          direccion:true,
          parroquia:true,
          asuntos_medicos:true,
          active:true,
          created_at:true,
          _count:{
            select:{Enrollments:true}
          }
        }
       })
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

    public deleteStudent = async (studentId:number) =>{
      try{
        const student = await this.checkStudentById(studentId);

        if(!student){
         throw CustomError.notFound('Student does not exist');
        }
       
        await prisma.students.delete({
         where:{id:studentId}
        })

        return {
         success:true,
         message:'Student has been deleted'
        }

      }
      catch(error){
         throw CustomError.notFound('Student does not exist');
      }
    }

    public updateStudent = async (studentId:number,studentData:Student) =>{
      try{
        const student = await this.checkStudentById(studentId);

        if(!student){
         throw CustomError.notFound('Student does not exist');
        }
       
        const updatedStudent = await prisma.students.update({
         data:studentData,
         where:{id:studentId}
        })
      

        return {
         success:true,
         message:'Student has been updated',
         student:updatedStudent
        }

      }
      catch(error){
         throw CustomError.notFound('Student does not exist');
      }
    }

    private getFilterStudentCondition = (query:string) =>{
       const conditions:any[] = [
              { first_name: { contains: query, mode: 'insensitive' } },
              { last_name: { contains: query, mode: 'insensitive' } },
              { phone: { contains: query, mode: 'insensitive' } },
              { email: { contains: query, mode: 'insensitive' } },
        ];
    
        const conditionsFilter:any = [
          query === filterConditionValues.Active ? {active:true} : {},
          query === filterConditionValues.Inactive ? {active:false}:{},
        ]

      return [...conditions,...conditionsFilter];
    }
        private getSortedStudent= (sortBy:string) =>{

          if(!sortBy){
            return undefined;
          }
         const sortMapping: Record<string, Record<string, Prisma.SortOrder>> = {
            [filterConditionValues.Recent]: { created_at: Prisma.SortOrder.desc },
            [filterConditionValues.Oldest]: {created_at: Prisma.SortOrder.asc },
            [filterConditionValues.AZ]: {first_name: Prisma.SortOrder.asc },
            [filterConditionValues.ZA]: {first_name: Prisma.SortOrder.desc },
        };
    
        const normalizedSortBy = sortBy=== 'A to Z' ? filterConditionValues.MostCourses : 
                                 sortBy === 'Z to A' ? filterConditionValues.MostCourses: 
                                 sortBy;
    
        return sortMapping[normalizedSortBy] || undefined;
    }

    private getOrderClause = (sortBy:string) =>{

         if (sortBy === filterConditionValues.MostCourses) {
             return [{ Enrollments: { _count: 'desc' } }];
            } 
            
         if(sortBy === filterConditionValues.LeastCourses) {
            return [{ Enrollments: { _count: 'asc' } }];

          } 
        return this.getSortedStudent(sortBy);
    }

    public searchStudent = async (studentQueryParams: StudentQueryParams) => {
      const {query,page,sortBy} = studentQueryParams;
      
      try {
        const ITEMS_PER_PAGE = 7;
        const skip = (page -1) * ITEMS_PER_PAGE;
        const filterCondition = this.getFilterStudentCondition(query);
        let orderByClause:any = this.getOrderClause(sortBy!);;
            
        const students = await prisma.students.findMany({
           select:{
          id:true,
          first_name:true,
          last_name:true,
          email:true,
          phone:true,
          gender:true,
          direccion:true,
          parroquia:true,
          asuntos_medicos:true,
          active:true,
          created_at:true,
          _count:{
            select:{Enrollments:true}
          }
        },
         where: {
            OR:query!="All" ? filterCondition : undefined
          },
          orderBy: orderByClause,
           take:ITEMS_PER_PAGE,
           skip:skip
         })
         
         return students;
      } catch (error) {
        throw CustomError.internalServerError('Internal Server Error');
      }
    }

    public getStudentsSummary = async ():Promise<StudentsSummary> =>{
      try{
        const [total,active,inactive] = await Promise.all([
          prisma.students.count(),
          prisma.students.count({ where: { active: true } }),
          prisma.students.count({where:{active:false}})
        ])

       return{
        total,
        active,
        inactive
       }
      }
      catch(error){
        console.log(error);
         throw CustomError.internalServerError('Internal Server Error');
      }
    }
}