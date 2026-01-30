import { Request, Response } from "express";
import { EventService } from "../services/event.service";
import { Event } from "../interfaces/event.interface";
import { CustomError } from "../../domain/errors/custom.error";
import { error } from "console";

export class EventController {
    constructor(public readonly eventService:EventService){}

      private handleError = (error:unknown,res:Response) =>{
                
                 if(error instanceof CustomError){
                   return res.status(error.statusCode).json({error:error.message})
                 }
                 console.log(`${error}`);
                 return res.status(500).json({error:'Internal Server Error'});
              }
    

  public createEvent = (req:Request,res:Response) =>{
    const eventData:Event = {
        name:req.body.name.trim(),
        course_id:req.body.course_id,
        price:req.body.price,
        start_date: req.body.start_date.trim(),
        end_date:req.body.end_date.trim(),
        location:req.body.location.trim(),
        status:req.body.status.trim()
    }
    this.eventService.createEvent(eventData)
    .then((event)=> res.json(event))
    .catch((error)=> this.handleError(error,res))
  }

  public getEvents = (req:Request,res:Response) =>{
   this.eventService.getAllEvents()
   .then((eventList)=> res.json(eventList))
   .catch((error)=> this.handleError(error,res))
  }

  public getEvent = (req:Request,res:Response) =>{
     const {id} = req.params;
     this.eventService.getEvent(parseInt(id))
     .then((event)=> res.json(event))
     .catch((error)=> this.handleError(error,res))
  }

  public updateEvent = (req:Request,res:Response) =>{
     const {id} = req.params;
    const eventData:Event = {
        name:req.body.name.trim(),
        course_id:req.body.course_id,
        price:req.body.price,
        start_date: req.body.start_date.trim(),
        end_date:req.body.end_date.trim(),
        location:req.body.location.trim(),
        status:req.body.status.trim()
    }
    
    this.eventService.updateEvent(eventData,parseInt(id))
    .then((event)=> res.json(event))
    .catch((error)=> this.handleError(error,res))
  }

  public getEventSummary = async(req:Request,res:Response) =>{
    this.eventService.getEventSummary()
    .then((event)=> res.json(event))
    .catch((error)=> this.handleError(error,res))
  }

  public searchEvents = async(req:Request,res:Response) =>{
    const {query, page} = req.query;
     //TODO: fix this logic that is duplicated in search events and also in get event pagination function
    const queryParam = query === 'Active' ? 'ongoing':query;
      
      const eventQueryParams = {
        query: typeof queryParam=== 'string' ? queryParam : '',
        page: +(page ?? 1),
       }
   
    this.eventService.searchEvents(eventQueryParams)
    .then((event)=> res.json(event))
    .catch((error) => this.handleError(error,res))
  }
  getEventPagination = (req:Request,res:Response) =>{
      const {query, page} = req.query;
      //TODO: fix this logic that is duplicated in search events and also in get event pagination function
      const queryParam = query === 'Active' ? 'ongoing':query;

      const eventQueryParams = {
        query: typeof queryParam=== 'string' ? queryParam : '',
        page: +(page ?? 1),
       }

      this.eventService.getEventPagination(eventQueryParams)
      .then((events)=> res.json(events))
      .catch((error)=> this.handleError(error,res))
    }

    completeEvent = (req:Request,res:Response) =>{
      const {id} = req.params;
      this.eventService.completeEvent(+id)
      .then((event)=> res.json(event))
      .catch((error)=> this.handleError(error,res))
    }
}