
import { prisma } from "../../data/postgres";
import { CustomError } from "../../domain/errors/custom.error";
import { Student, StudentQueryParams, StudentsSummary } from "../interfaces/student.interface";
import { CourseServices } from "./course.service";
import { Util } from "../../config/util";
import { StudentCourse } from "../interfaces/studentCourse.interface";
import { StudentServices } from "./student.service";
import { EventService } from "./event.service";
import { EnrollmentService } from "./enrollment.service";

export class DashboardServices{

   constructor(
         private studentServices: StudentServices,
         private eventServices:EventService,
         private enrollmentServices:EnrollmentService
         ) 
    {}


    public getDashboardSummary = async ():Promise<StudentsSummary | any> =>{
      try{
        const [totalStudents,totalEnrollments,totalEvents] = await Promise.all([
          (await this.studentServices.getAllStudents()).length,
          (await this.enrollmentServices.getAllEnrollments()),
          (await this.eventServices.getAllEvents()).length,
        ])

       return{
         totalStudents,
         totalEnrollments,
         totalEvents
       }
      }
      catch(error){
        console.log(error);
         throw CustomError.internalServerError('Internal Server Error');
      }
    }
}
