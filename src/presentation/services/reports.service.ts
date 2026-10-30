import { Prisma } from "@prisma/client";
import { prisma } from "../../data/postgres";

import { CustomError } from "../../domain/errors/custom.error";
import { CourseServices } from "./course.service";


export type CompletionStatus = 'completed' | 'not-completed';

const studentContactSelect = {
    id: true,
    first_name: true,
    last_name: true,
    email: true,
    phone: true,
} satisfies Prisma.StudentsSelect;

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
                select: studentContactSelect,
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
                  throw CustomError.wrap(err);
        }
     }

     public getPaginatedCompletionCourseList = async(courseId:number,status:CompletionStatus,page:number,limit:number) =>{
         try{

           const course = await this.courseService.getACourse(courseId);

           if(!course){
               throw CustomError.badRequest('Course does not exist');
           }

           const skip = (page - 1) * limit;

           const [students,total] = status === 'completed'
             ? await Promise.all([
                 prisma.studentCourse.findMany({
                   where: { course_id: courseId },
                   include: {
                     student: {
                       select: studentContactSelect,
                     },
                   },
                   orderBy: { completedAt: { sort: 'desc', nulls: 'last' } },
                   skip,
                   take: limit,
                 }),
                 prisma.studentCourse.count({ where: { course_id: courseId } }),
               ])
             : await Promise.all([
                 prisma.students.findMany({
                   where: { NOT: { StudentCourses: { some: { course_id: courseId } } } },
                   select: studentContactSelect,
                   orderBy: { id: 'asc' },
                   skip,
                   take: limit,
                 }),
                 prisma.students.count({ where: { NOT: { StudentCourses: { some: { course_id: courseId } } } } }),
               ]);

           return {
             students,
             pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
           };
         }
          catch(err){
                throw CustomError.wrap(err);
        }
     }

     public searchCompletionCourseList = async(courseId:number,status:CompletionStatus,page:number,limit:number,search:string) =>{
         try{
           
           const course = await this.courseService.getACourse(courseId);

           if(!course){
               throw CustomError.badRequest('Course does not exist');
           }

           const skip = (page - 1) * limit;

           const studentSearch: Prisma.StudentsWhereInput = search
             ? {
                 AND: search.split(/\s+/).map(term => ({
                   OR: [
                     { first_name: { contains: term, mode: 'insensitive' } },
                     { last_name: { contains: term, mode: 'insensitive' } },
                     { email: { contains: term, mode: 'insensitive' } },
                     { phone: { contains: term } },
                   ],
                 })),
               }
             : {};

           const notCompletedWhere: Prisma.StudentsWhereInput = {
             AND: [studentSearch, { NOT: { StudentCourses: { some: { course_id: courseId } } } }],
           };

           const [students,total] = status === 'completed'
             ? await Promise.all([
                 prisma.studentCourse.findMany({
                   where: { course_id: courseId, student: studentSearch },
                   include: {
                     student: {
                       select: studentContactSelect,
                     },
                   },
                   orderBy: { completedAt: { sort: 'desc', nulls: 'last' } },
                   skip,
                   take: limit,
                 }),
                 prisma.studentCourse.count({ where: { course_id: courseId, student: studentSearch } }),
               ])
             : await Promise.all([
                 prisma.students.findMany({
                   where: notCompletedWhere,
                   select: studentContactSelect,
                   orderBy: { id: 'asc' },
                   skip,
                   take: limit,
                 }),
                 prisma.students.count({ where: notCompletedWhere }),
               ]);

           return {
             students,
             pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
           };
         }
          catch(err){
                throw CustomError.wrap(err);
        }
     }
}
