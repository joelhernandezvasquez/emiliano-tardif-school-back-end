import { prisma } from "../../data/postgres";
import { CustomError } from "../../domain/errors/custom.error";
import { Enrollment } from "../interfaces/enrollment.interface";
import { EventService } from "./event.service";
import { StudentServices } from "./student.service";

export class EnrollmentService{
    studentService = new StudentServices();
    eventService = new EventService();

    constructor(){
    }

    private checkForDuplicatedEnrollment = async(studentId:number,eventId:number) =>{
       try{
           const checkDuplication = await prisma.enrollments.findFirst({
            where:{
              student_id:studentId,
              event_id:eventId
            }
           })
           return checkDuplication;
       }
        
       catch(error){
       if(error instanceof Error){
             throw CustomError.internalServerError(error.message)
            }
             throw CustomError.internalServerError('Internal server error');
     }
    }
     

    public createEnrollment = async(enrollment:Enrollment) =>{
     try{
       const [studentExist,eventExist]
       = await Promise.all(
         [ this.studentService.checkStudentById(enrollment.student_id),
           this.eventService.getEventById(enrollment.event_id)
         ]
        );

       if(!studentExist){
         throw CustomError.notFound("Student not found");
       }

       if(!eventExist){
          throw CustomError.notFound("Event not found");
       }
       
       const isStudentEnrolled = await this.checkForDuplicatedEnrollment(enrollment.student_id,enrollment.event_id);

       if(isStudentEnrolled){
         throw CustomError.badRequest('Student is already enroll for this event');
       }

       const enroll = await prisma.enrollments.create({
        data:enrollment
       })
       
       return {
        success:true,
        message:'Student has been enroll succesfully',
        enroll
       }
       
     }
     catch(error){
       if(error instanceof Error){
             throw CustomError.internalServerError(error.message)
            }
             throw CustomError.internalServerError('Internal server error');
     }

    }
}