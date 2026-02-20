import { Event } from "./event.interface"

export interface DashboardSummary{
    totalStudents:number,
    totalEnrollments:number,
    totalEvents:number
}

export interface DashboardEventSummary{
      upcomingEvents:{
           events:Event[],
           amount:number,
           nextEventInDays:number
         },
         activeEvents:{
          events:Event[],
          amount:number
         },
         pendingCompletionEvents:{
          events:Event[],
          amount:number
         }
       }
