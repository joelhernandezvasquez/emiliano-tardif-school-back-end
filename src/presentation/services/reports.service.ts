import { prisma } from "../../data/postgres";

import { CustomError } from "../../domain/errors/custom.error";
import { CourseServices } from "./course.service";


export class ReportServices{
     courseService = new CourseServices();
     
     public getCompletionCourseList = async(courseId:number) =>{
         try{
            
           const course = await this.courseService.getACourse(courseId);

           if(!course){
               throw CustomError.badRequest('Course does not exist');
           }

           const hasCompleted = await prisma.studentCourse.findMany({
             where: {
                course_id: courseId,
            },
            include: {
                student: {
                select: {
                    id: true,
                    first_name: true,
                    last_name: true,
                    email: true,
                    phone: true,
                },
                },
            },
             orderBy: { completedAt: 'desc' },
           })

           const notCompleted = await prisma.students.findMany({
                where: {
                    NOT: { StudentCourses: { some: { course_id: courseId } } },
                },
                select: {first_name: true, last_name: true, email: true, phone: true },
                });

           return {hasCompleted,notCompleted};
         }  
          catch(err){
                  throw CustomError.internalServerError('internal server error');
        }
     }
}