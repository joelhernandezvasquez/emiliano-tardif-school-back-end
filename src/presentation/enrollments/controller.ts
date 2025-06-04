import { CustomError } from "../../domain/errors/custom.error";
import { EnrollmentService } from "../services/enrollment.service";
import {Request,Response} from 'express';

export class EnrollmentController{
    constructor(public readonly enrollmentService:EnrollmentService){}

    private handleError = (error:unknown,res:Response) =>{
               
                if(error instanceof CustomError){
                  return res.status(error.statusCode).json({error:error.message})
                }
                console.log(`${error}`);
                return res.status(500).json({error:'Internal Server Error'});
    }

  public createEnrollment = (req:Request,res:Response) => {
   const enrollmentData = {
    student_id:req.body.student_id,
    event_id:req.body.event_id,
    notes:req.body.notes.trim(),
    attendance: req.body.attendance.trim()
   }
   
   this.enrollmentService.createEnrollment(enrollmentData)
   .then((enrollment)=> res.json(enrollment))
   .catch((error)=> this.handleError(error,res))

   
  }

}