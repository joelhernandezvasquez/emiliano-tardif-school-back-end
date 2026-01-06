import { CustomError } from "../../domain/errors/custom.error";
import { EnrollmentUpdate } from "../interfaces/enrollment.interface";
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
    event_id:req.body.event_id
   }
   
   this.enrollmentService.createEnrollment(enrollmentData)
   .then((enrollment)=> res.json(enrollment))
   .catch((error)=> this.handleError(error,res))
  }

  public getEnrollmentsForEvent = (req:Request,res:Response) =>{
   const {eventId} = req.params;
   
   this.enrollmentService.getAllEnrollmentsPerEvent(parseInt(eventId))
   .then((enrollments)=> res.json(enrollments))
   .catch((error)=> this.handleError(error,res))
  }

  public deleteEnrollment = (req:Request,res:Response) =>{
    const{enrollmentId} = req.params;

    if(!enrollmentId){
      return res.status(400).send("Enrollment ID is missing");
    }
  
    this.enrollmentService.deleteEnrollment(enrollmentId)
    .then((result)=> res.json(result))
    .catch((error)=> this.handleError(error,res))
  }

  public updateEnrollment = (req:Request,res:Response) =>{
   const enrollmentData:EnrollmentUpdate = {
    status: req.body.status.trim()
   }
   const {enrollmentId} = req.params;

    if(!enrollmentId){
      return res.status(400).send("Enrollment ID is missing");
    }
  
    this.enrollmentService.updateEnrollment(enrollmentId,enrollmentData)
    .then((result)=> res.json(result))
    .catch((error)=> this.handleError(error,res))
  }

  public getStudentEnrollmentHistory = (req:Request,res:Response) =>{
   const {id} = req.params;
   
   this.enrollmentService.getStudentEnrollmentHistory(parseInt(id))
   .then((result)=> res.json(result))
   .catch((error)=> this.handleError(error,res))
  }

  public searchStudent = (req:Request,res:Response) =>{
       const {query} = req.query;
       const {eventId} = req.params;
       const studentQuery = query?.toString() as string;

       this.enrollmentService.searchStudent(studentQuery,+eventId)
       .then((students)=> res.json(students))
       .catch((error)=> this.handleError(error,res))
   }

}