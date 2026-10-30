import { EnrollStatus, EventStatus, Prisma } from "@prisma/client";
import { prisma } from "../../data/postgres";
import { CustomError } from "../../domain/errors/custom.error";
import { Event, EventQueryParams } from "../interfaces/event.interface";
import { CourseServices } from "./course.service";

const ITEMS_PER_PAGE = 9;

export class EventService{
    constructor(){}

    private checkEventByCourseAndDate = async(event:Event) =>{
      try{
        const eventExist = await prisma.events.findFirst({
          where:{
            course_id:event.course_id ,
            start_date:new Date(event.start_date)
          }
        })
        return eventExist;
      }
      catch(error){
       throw CustomError.wrap(error);
      }
    }


    public getEventById = async(id:number) =>{
       try{
         const event = await prisma.events.findUnique(({
          select:{
           id:true,
           name:true,
           course_id:true,
           price:true,
           start_date:true,
           end_date:true,
           status:true,
           location:true,
           created_at:true,

            course:{
              select:{
               name:true
              }
            }
          },
          where:{id}
         }))

         return event;
       }
       catch(error){
         throw CustomError.wrap(error);
       }
    }

    public createEvent = async(event:Event) =>{
      try{
        const course = await CourseServices.checkCourseById(event.course_id);
        if(!course){
          throw CustomError.notFound('Course does not exist!');
        }

       const start_date = new Date(event.start_date);
       const end_date = new Date(event.end_date);
      
       if(start_date > end_date){
        throw CustomError.badRequest('Start date must be before end date!');
       }

       const eventExist = await this.checkEventByCourseAndDate(event);

       if(eventExist){
        throw CustomError.badRequest('This Event already exist');
       }
       const formattedEvent = {
        ...event,
        start_date,
        end_date
       }

       const newEvent = await prisma.events.create({
        data:formattedEvent
       })
       
       return{
        success:true,
        message:'Event has been created successfully',
        event:newEvent
       }
      }
      catch(error){
        throw CustomError.wrap(error);
      }

    }

    public getTotalEvents = async() =>{
      try{
         return await prisma.events.count();
      }
      catch(error){
        throw CustomError.wrap(error);
      }
    }

    public getAllEvents = async() =>{
      try{
         const eventsList = await prisma.events.findMany();
         return eventsList;
      }
      catch(error){
        throw CustomError.wrap(error);
      }
    }

    public getEvent = async(eventId:number) =>{
      try{
         const event = await this.getEventById(eventId);

         if(!event){
          throw CustomError.notFound("Event is not found");
         }

         return event; 
      }
      catch(error){
        throw CustomError.wrap(error);
      }
    }

    public updateEvent = async(eventData:Event,eventId:number) =>{
      try{
         const event = await this.getEventById(eventId);
         
         if(!event){
          throw CustomError.notFound("Event not found!");
         }

        const course = await CourseServices.checkCourseById(eventData.course_id);
        if(!course){
          throw CustomError.notFound('Course does not exist!');
        }
         
       const start_date = new Date(eventData.start_date);
       const end_date = new Date(eventData.end_date);
      
       if(start_date > end_date){
        throw CustomError.badRequest('Start date must be before end date!');
       }

         const formattedEvent = {
        ...eventData,
        start_date,
        end_date
       }


       const updatedEvent = await prisma.events.update(({
        where:{id:eventId},
        data:formattedEvent
       }))

       return{
        success:true,
        message:'Event has been updated',
        event:updatedEvent
       }

      }
      catch(error){
        throw CustomError.wrap(error);
      }
    }

    public getEventSummary = async() =>{
      
    try{

     const [total,upcoming,completed] = await Promise.all([
          prisma.events.count(),
          prisma.events.count({ where: { status: 'upcoming' } }),
          prisma.events.count({where:{status:'completed'}})
        ])
          return {total,upcoming,completed};
      }
      catch(error){
        throw CustomError.wrap(error);
      }
    }

    private normalizeEventQuery = (query:string) =>{
        const queryLower = query.toLocaleLowerCase();
        return queryLower === 'active' ? 'ongoing' : queryLower;
    }

    private getEventFilterCondition = (query:string):Prisma.EventsWhereInput | undefined =>{
          const allowedStatuses = Object.values(EventStatus) as string[];

        if (!query || query === 'all') {
          return undefined;
        }

        if (allowedStatuses.includes(query)) {
          return { status: query as EventStatus };
        }

        const orConditions:Prisma.EventsWhereInput[] = [
          { name: { contains: query, mode: 'insensitive' } },
        ];

        if (/^\d+$/.test(query)) {
          orConditions.push({ price: Number(query) });
        }

        return { OR: orConditions };
    }

    public searchEvents = async(eventQueryParams:EventQueryParams) =>{
      const {query,page} =eventQueryParams;

      try{
        const skip = (page -1) * ITEMS_PER_PAGE;
        const filterCondition = this.getEventFilterCondition(this.normalizeEventQuery(query));
  
        const events = await prisma.events.findMany({
          select:{
           id:true,
           name:true,
           price:true,
           start_date:true,
           end_date:true,
           status:true,

           course:{
            select:{
              level:true
            }
           }
          },
          where: filterCondition,
          skip,
          take: ITEMS_PER_PAGE,
          orderBy: { start_date: 'desc' }
        })

        const eventIds = events.map((e) => e.id);
        const enrollmentCounts = await prisma.enrollments.groupBy({
          by: ['event_id'],
          where: { event_id: { in: eventIds } },
          _count: { event_id: true }
        });

          // Map counts to events
        const eventsWithCounts = events.map((event) => {
          const countObj = enrollmentCounts.find((e) => e.event_id === event.id);
          return {
            ...event,
            enrollmentCount: countObj ? countObj._count.event_id : 0
          };
        });
        
         return eventsWithCounts;
      }
      catch(error){
        throw CustomError.wrap(error);
      }
     
    }

    getEventPagination = async (eventQueryParams:EventQueryParams) =>{
     try{
        const {query} =eventQueryParams;
        const filterCondition = this.getEventFilterCondition(this.normalizeEventQuery(query));

        const totalCount = await prisma.events.count({
          where: filterCondition,
        })

        const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

      return{
        totalPages,
        totalCount
      }
     }
     catch(error){
      throw CustomError.wrap(error);
     }
    }

    completeEvent = async(eventId:number) =>{
      try{
          const event = await this.getEventById(eventId);
         
         if(!event){
          throw CustomError.notFound("Event not found!");
         }

        const course = await CourseServices.checkCourseById(event.course_id);
          if(!course){
            throw CustomError.notFound('Course does not exist!');
          }

          // the three writes succeed or fail together so an event is never left completed without its student courses
          await prisma.$transaction(async (tx)=>{
            await tx.events.update({
              where:{id:eventId},
              data:{status:EventStatus.completed}
            })

            await tx.enrollments.updateMany({
              where:{event_id:eventId,status:EnrollStatus.enrolled},
              data:{status:EnrollStatus.completed}
            })

            const studentsEnrolled = await tx.enrollments.findMany({
              where:{event_id:eventId,status:EnrollStatus.completed},
              select:{student_id:true}
            })

            const completeDate = new Date();

            await tx.studentCourse.createMany({
              data: studentsEnrolled.map((student) => ({
                student_id: student.student_id,
                course_id: event.course_id,
                completedAt:completeDate
              })),
              skipDuplicates:true
            })
          })

           return {
             success:true,
             message:'Event has been completed'
           }
      }
       catch(error){
        throw CustomError.wrap(error);
     }
    }

    public getUpcomingEvents = async() =>{
      try{
         const upcomingEvents = await prisma.events.findMany(({
          where:{status:'upcoming'},
          orderBy:{end_date:'asc'}
         }))

         return upcomingEvents;
      }

       catch(error){
        throw CustomError.wrap(error);
     }

    }

}