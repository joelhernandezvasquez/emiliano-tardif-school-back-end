import { Util } from "../../config/util";
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

    public static checkCourseById = async (courseId:number) =>{
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
        const course = await CourseServices.checkCourseById(courseId);

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
         const course = await CourseServices.checkCourseById(courseId);
         
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
        const course = await CourseServices.checkCourseById(courseId);
        
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

    public static getTotalCourse = async() =>{
      try{
       const totalCourses = await prisma.courses.count();
       return totalCourses - 2; // we make it minus 2 since either Man or Women will not take renacer de hombres o mujeres
      }
      catch(error){
        throw CustomError.internalServerError(error as string);
      }
    }

     public static getCoursesByLevel = async() =>{
      try{
       const coursesByLevel = await prisma.courses.groupBy({
          by:['level'],
          _count:{
            level:true
          },
          orderBy: { level: 'asc' }
       })
       
       const coursesFormatted = coursesByLevel.map((item)=>{
        return{
          level:Util.formatCourseLevel(item.level.toString()),
          courseLevelQuantity:item._count.level
        }
       
       })
       
       return coursesFormatted;
      
      }
      catch(error){
        throw CustomError.internalServerError(error as string);
      }
    }

    public static getCourseIds = async() =>{
        const courseIds = await prisma.courses.findMany(({
            select:{ id:true}
          }))

          return courseIds;
    }

}


