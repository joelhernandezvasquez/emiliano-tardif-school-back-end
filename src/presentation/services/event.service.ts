import { EventStatus } from "@prisma/client";
import { prisma } from "../../data/postgres";
import { CustomError } from "../../domain/errors/custom.error";
import { Event, EventQueryParams } from "../interfaces/event.interface";
import { CourseServices } from "./course.service";

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
       throw CustomError.internalServerError('internal server error')
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
         throw new Error('Internal Serve Error');
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
        if(error instanceof Error){
       throw CustomError.internalServerError(error.message)
      }
       throw CustomError.internalServerError('Internal server error');
    }

    }

    public getAllEvents = async() =>{
      try{
         const eventsList = await prisma.events.findMany();
         return eventsList;
      }
     catch(error){
        if(error instanceof Error){
       throw CustomError.internalServerError(error.message)
      }
       throw CustomError.internalServerError('Internal server error');
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
        if(error instanceof Error){
       throw CustomError.internalServerError(error.message)
      }
       throw CustomError.internalServerError('Internal server error');
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
      if(error instanceof Error){
       throw CustomError.internalServerError(error.message)
      }
       throw CustomError.internalServerError('Internal server error');
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
      if(error instanceof Error){
       throw CustomError.internalServerError(error.message)
      }
       throw CustomError.internalServerError('Internal server error');
      }  
    }

    private getEventFilterCondition = (query:string) =>{
          const allowedStatuses = ['upcoming', 'completed', 'cancelled', 'ongoing'] as const;
          let filterCondition: any;

        if (query && query !== 'all') {
          if (allowedStatuses.includes(query as any)) {
            filterCondition = { status: query };
          } 
          else {
            filterCondition = {
              OR: [
                { name: { contains: query, mode: 'insensitive' } },
                { price: { contains: query, mode: 'insensitive' } },
                 { status: { contains: query, mode: 'insensitive' } },
              ]
            };
          }
        }
        return filterCondition;
    }

    public searchEvents = async(eventQueryParams:EventQueryParams) =>{
      const {query,page} =eventQueryParams;
      const queryLower = query.toLocaleLowerCase();

      try{
        //TODO:CODE DUPLICATED HERE AND ALSO IN GET EVENT PAGINATION PLAEASE AVOID DUPLICATION
        const ITEMS_PER_PAGE = 9;
        const skip = (page -1) * ITEMS_PER_PAGE;
        const filterCondition = this.getEventFilterCondition(queryLower);
  
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
          where: queryLower && queryLower !== 'all' ? filterCondition : undefined,
          skip,
          take: ITEMS_PER_PAGE,
          orderBy: { start_date: 'desc' }
        })

        const eventIds = events.map(e => e.id);
        const enrollmentCounts = await prisma.enrollments.groupBy({
          by: ['event_id'],
          where: { event_id: { in: eventIds } },
          _count: { event_id: true }
        });

          // Map counts to events
        const eventsWithCounts = events.map(event => {
          const countObj = enrollmentCounts.find(e => e.event_id === event.id);
          return {
            ...event,
            enrollmentCount: countObj ? countObj._count.event_id : 0
          };
        });
        
         return eventsWithCounts;
      }
      catch(error){
        if(error instanceof Error){
          throw CustomError.internalServerError(error.message)
        }
        throw CustomError.internalServerError('Internal server error');
      }
     
    }

    getEventPagination = async (eventQueryParams:EventQueryParams) =>{
     try{
        const {query,page} =eventQueryParams;
        const queryLower = query.toLocaleLowerCase();
        const filterCondition = this.getEventFilterCondition(queryLower);
        const ITEMS_PER_PAGE = 9;

        const events = await prisma.events.findMany({
          where: queryLower && queryLower !== 'all' ? filterCondition : undefined,
        })

        const totalPages = Math.ceil(Number(events.length) / ITEMS_PER_PAGE);

      return{
        totalPages,
        totalCount:events.length
      }
     }
     catch(error){
      console.log(error);
      throw CustomError.internalServerError('Internal Server Error');
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

          // First Action update the event to complete
          const completedEvent = {
            id: event.id,
            name: event.name,
            course_id: event.course_id,
            price: event.price,
            start_date: event.start_date,
            end_date: event.end_date,
            location: event.location,
            status:EventStatus.completed
          }


       const updatedEvent = await prisma.events.update(({
        where:{id:eventId},
        data:completedEvent
       }))


       // Second Action will be to update the table enrollment based on the students

       const enrollmentUpdate = await prisma.enrollments.updateMany(({
        where:{event_id:eventId,status:'enrolled'},
        data:{status:EventStatus.completed}
       }))

       // Third Action will be to add to student course

       const studentsEnrolled = await prisma.enrollments.findMany(({
         where:{event_id:eventId,status:'completed'},
         select:{
          student_id:true
         }
       }))
       
       const completeDate = new Date();

       const studentsCourseAdded = await prisma.studentCourse.createMany({
        data: studentsEnrolled.map(student => ({
            student_id: student.student_id,
            course_id: event.course_id,
            completedAt:completeDate.toISOString()
          })),
           skipDuplicates:true
       })
           if(!studentsCourseAdded){
             throw CustomError.notFound('Students Enrollment Failed');
           }
           return {
             success:true,
             message:'Event has been completed'
           }
      }
       catch(error){
        console.log(error);
        throw CustomError.internalServerError('Internal Server Error');
     }
    }

}