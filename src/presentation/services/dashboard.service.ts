
import { prisma } from "../../data/postgres";
import { CustomError } from "../../domain/errors/custom.error";
import { Student, StudentQueryParams, StudentsSummary } from "../interfaces/student.interface";
import { CourseServices } from "./course.service";
import { Util } from "../../config/util";
import { StudentCourse } from "../interfaces/studentCourse.interface";
import { StudentServices } from "./student.service";
import { EventService } from "./event.service";
import { EnrollmentService } from "./enrollment.service";
import { DashboardEventSummary, DashboardSummary } from "../interfaces/dashboard.interface";

export class DashboardServices{

   constructor(
         private studentServices: StudentServices,
         private eventServices:EventService,
         private enrollmentServices:EnrollmentService
         ) 
    {}


    public getDashboardSummary = async ():Promise<DashboardSummary> =>{
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

    getDashboardEventsSummary = async ():Promise<DashboardEventSummary> =>{
      try{
        const today = new Date();
        const events =  await this.eventServices.getAllEvents();
        const upcomingEvents = await this.eventServices.getUpcomingEvents();
        
        const activeEvents = events.filter((event)=> event.status==='ongoing');
        const pastActiveEvents = activeEvents.filter((event)=> event.end_date < today);
     
        const closestEvent = upcomingEvents.at(0);
        const diffTime = closestEvent?.start_date ? Math.abs(new Date(closestEvent.start_date).getTime() - today.getTime()):0
        const diffDays = Math.ceil(diffTime/(1000 * 60 * 60 * 24));

       return{
         upcomingEvents:{
           events:upcomingEvents,
           amount:upcomingEvents.length,
           nextEventInDays:diffDays
         },
         activeEvents:{
          events:activeEvents,
          amount:activeEvents.length
         },
         pendingCompletionEvents:{
          events:pastActiveEvents,
          amount:pastActiveEvents.length
         }
       }
      }

       catch(error){
        console.log(error);
         throw CustomError.internalServerError('Internal Server Error');
      }
    }
}
