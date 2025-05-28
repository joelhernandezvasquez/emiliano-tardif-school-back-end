import { Request, Response } from "express";
import { EventService } from "../services/event.service";
import { Event } from "../interfaces/event.interface";
import { CustomError } from "../../domain/errors/custom.error";

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
}