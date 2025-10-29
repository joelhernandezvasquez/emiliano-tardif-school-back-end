import { Response } from "express";
import { prisma } from "../../data/postgres";
import { CustomError } from "../../domain/errors/custom.error";
import { Event } from "../interfaces/event.interface";
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
}