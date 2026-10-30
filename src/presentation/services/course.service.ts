import { CourseLevel } from "@prisma/client";
import fs from "fs";
import path from "path";
import { Util } from "../../config/util";
import { prisma } from "../../data/postgres";
import { CustomError } from "../../domain/errors/custom.error";
import { Course } from "../interfaces/course.interface";

type CourseLevelGroup = {
  level: string | number;
  _count: { level: number };
};

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
            throw CustomError.wrap(error);
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
            throw CustomError.wrap(error);
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
        if(Util.isPrismaError(error,'P2002')){
          throw CustomError.badRequest('Course already exist');
        }
        throw CustomError.wrap(error);
     }
    }

    public getCourses = async() =>{
     try{
       const courses = await prisma.courses.findMany();
       return courses;
     }
     catch(error){
        throw CustomError.wrap(error);
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
         throw CustomError.wrap(error);
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

         if (courseData.image_url && course.image_url && course.image_url !== courseData.image_url) {
             this.removeImage(course.image_url);
         }

         return{
          success:true,
          message:'Course has been updated',
          course:updatedCourse
         }

      }
      catch(error){
        if(Util.isPrismaError(error,'P2002')){
          throw CustomError.badRequest('Course already exist');
        }
        throw CustomError.wrap(error);
      }
    }

    public deleteCourse = async(courseId:number) =>{
      try{
        const course = await CourseServices.checkCourseById(courseId);

        if(!course){
          throw CustomError.notFound('Course not found');
        }

        // events (and their enrollments) are history, so they block the delete instead of being removed with the course
        const eventsCount = await prisma.events.count({where:{course_id:courseId}});

        if(eventsCount > 0){
          throw CustomError.badRequest('Course has events and cannot be deleted');
        }

        await prisma.$transaction([
          prisma.studentCourse.deleteMany({where:{course_id:courseId}}),
          prisma.courses.delete({where:{id:courseId}})
        ])

        if(course.image_url){
          this.removeImage(course.image_url);
        }

         return{
          success:true,
          message:'Course/Retire has been deleted'
         }
      }
      catch(error){
        throw CustomError.wrap(error,'Could not delete course');
      }
    }

    private removeImage = (imageUrl:string) =>{
      const imagePath = path.join(process.cwd(), 'public', imageUrl);
      fs.unlink(imagePath, () => {});
    }

    public static getTotalCourse = async() =>{
      try{
       const totalCourses = await prisma.courses.count();
       return totalCourses - 2; // we make it minus 2 since either Man or Women will not take renacer de hombres o mujeres
      }
      catch(error){
        throw CustomError.wrap(error);
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

       const coursesFormatted = coursesByLevel.map((item: CourseLevelGroup)=>{
        return{
          level:Util.formatCourseLevel(item.level.toString()),
          courseLevelQuantity:item._count.level
        }

       })

       return coursesFormatted;

      }
      catch(error){
        throw CustomError.wrap(error);
      }
    }

    public static getCourseIds = async() =>{
        const courseIds = await prisma.courses.findMany(({
            select:{ id:true}
          }))

          return courseIds;
    }


    private formatCourseLevel = (level:string):CourseLevel =>{
        const normalizedLevel = level.trim().toUpperCase();

        if ((Object.values(CourseLevel) as string[]).includes(normalizedLevel)) {
          return normalizedLevel as CourseLevel;
        }

        throw CustomError.badRequest('Invalid course level');
    }

      public searchCourses = async (courseQueryParam:string) => {

          try {
            let whereClause;

            if (courseQueryParam.toUpperCase().includes('RENACER')) {
              whereClause = {
                level: {
                  in: [
                    CourseLevel.RENACER_MUJERES,
                    CourseLevel.RENACER_HOMBRE,
                    CourseLevel.RENACER_PAREJAS
                  ]
                }
              };
            }
            else if(courseQueryParam === 'all' || courseQueryParam===""){
              whereClause = {}
            }

            else {
              const courseLevel = this.formatCourseLevel(courseQueryParam);
              whereClause = { level: courseLevel };
            }

            const courses = await prisma.courses.findMany({
              where: whereClause
            });

            return courses;

          } catch (error) {
            throw CustomError.wrap(error);
          }
        }


}
