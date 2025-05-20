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

}