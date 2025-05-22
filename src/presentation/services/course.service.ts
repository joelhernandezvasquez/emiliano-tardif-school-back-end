import { prisma } from "../../data/postgres";
import { CustomError } from "../../domain/errors/custom.error";
import { Course } from "../interfaces/course.interface";

export class CourseServices{
    constructor(){}

    private checkCourse = async (courseName:string) =>{
        try{
          const course = await prisma.courses.findUnique({
            where:{name:courseName}
          })
          return course;
        }
        catch(error){
            throw CustomError.internalServerError('Internal Server Error');
        }
    }


    private checkCourseById = async (courseId:number) =>{
        try{
          const course = await prisma.courses.findUnique({
            where:{id:courseId}
          })
          return course;
        }
        catch(error){
            throw CustomError.internalServerError('Internal Server Error');
        }
    }

    public createCourse = async(course:Course) =>{
     try{
       const isCourseCreated = await this.checkCourse(course.name);

       if(isCourseCreated){
        throw CustomError.badRequest('Course already exist');
       }

       const newCourse = await prisma.courses.create({
        data:course
       })

       return{
        success:true,
        message:'Course has been created',
        course:newCourse
       }
     }
     catch(error){
        throw CustomError.badRequest('Course already exist');
     }
    }

    public getCourses = async() =>{
     try{
       const courses = await prisma.courses.findMany();
       return courses;
     }
     catch(error){
        throw CustomError.internalServerError('Internal Server Error');
     }
    }

    public getACourse = async (courseId:number) =>{
      try{
        const course = await this.checkCourseById(courseId);

        if(!course){
          throw CustomError.badRequest('Course does not exist');
        }
        return course;
      }
      catch(error){
         throw CustomError.badRequest('Course does not exist');
      }
    }

    public updateCourse = async(courseId:number,courseData:Course) =>{
      try{
         const course = await this.checkCourseById(courseId);
         
         if(!course){
           throw CustomError.badRequest('Course does not exist');
         }

         const updatedCourse = await prisma.courses.update({
          data:courseData,
          where:{id:courseId}
         })

         return{
          success:true,
          message:'Course has been updated',
          course:updatedCourse
         }

      }
      catch(error){
      throw CustomError.badRequest('Course does not exist');
      }
    }

    public deleteCourse = async(courseId:number) =>{
      try{
        const course = await this.checkCourseById(courseId);
        
        if(!course){
          throw CustomError.notFound('Course not found');
        }
         await prisma.courses.delete({
          where:{id:courseId}
         })

         return{
          success:true,
          message:'Course/Retire has been deleted'
         }
      }
      catch(error){
        throw CustomError.notFound('Course not found')
      }
    }

}