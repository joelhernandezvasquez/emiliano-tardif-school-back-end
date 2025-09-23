import { prisma } from "../../data/postgres";
import { CustomError } from "../../domain/errors/custom.error";
import { Enrollment, EnrollmentUpdate } from "../interfaces/enrollment.interface";
import { CourseServices } from "./course.service";
import { EventService } from "./event.service";
import { StudentServices } from "./student.service";

export class EnrollmentService{
    courseService = new CourseServices();
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
     
    public checkEnrollmentById = async(id:string) =>{
      try{
        const enrollment = await prisma.enrollments.findUnique({
          where:{
            id:id
          }
        })
        return enrollment;
      }
  
      catch(error){
       if(error instanceof Error){
             throw CustomError.internalServerError(error.message);
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
             throw CustomError.internalServerError(error.message);
            }
             throw CustomError.internalServerError('Internal server error');
     }

    }

    public getAllEnrollmentsPerEvent = async(eventId:number) =>{
      try{
       const eventExist = await this.eventService.getEventById(eventId);
       
       if(!eventExist){
        throw CustomError.notFound("Event not found");
       }
       const enrollments = await prisma.enrollments.findMany({
          where: {
            event_id: eventId,
          },
          include: {
            student: true,
            event: {
              include: {
                course: true,
              },
            },
          },
        });

        const result = enrollments.map((enroll) => ({
          enrollmentId:enroll.id,
          studentId: (enroll.student.id),
          fullName: `${enroll.student.first_name} ${enroll.student.last_name}`,
          phone: enroll.student.phone,
          email: enroll.student.email,
          enrollmentDate: enroll.enrolled_at.toISOString(),
          courseTitle: enroll.event.course.name,
          notes:enroll.notes
        }));

        return result;
      }

      catch(error){
       if(error instanceof Error){
             throw CustomError.internalServerError(error.message);
            }
             throw CustomError.internalServerError('Internal server error');
     }
    }

    public deleteEnrollment = async(enrollmentId:string) =>{
     try{
         const enrollmentExist = await this.checkEnrollmentById(enrollmentId);

         if(!enrollmentExist){
          throw CustomError.notFound('Enrollment does not exist');
         }

         await prisma.enrollments.delete({
          where:{id:enrollmentId}
         })

         return{
          success:true,
          message:"Enrollment successfully removed."
         }
     }
      catch(error){
       if(error instanceof Error){
             throw CustomError.internalServerError(error.message);
            }
             throw CustomError.internalServerError('Internal server error');
     }
     
    }

    public updateEnrollment = async(enrollmentId:string,enrollmentData:EnrollmentUpdate) =>{
     try{
         const enrollmentExist = await this.checkEnrollmentById(enrollmentId);

         if(!enrollmentExist){
          throw CustomError.notFound('Enrollment does not exist');
         }

        const updatedEnrollment  = await prisma.enrollments.update({
          data:enrollmentData,
          where:{id:enrollmentId}
        })

         return{
          success:true,
          message:"Enrollment successfully updated.",
          enrollment:updatedEnrollment
         }
     }
      catch(error){
       if(error instanceof Error){
             throw CustomError.internalServerError(error.message);
            }
             throw CustomError.internalServerError('Internal server error');
     }
     
    }

    public getStudentEnrollmentHistory = async(studentId:number) =>{
      try{
        const student = await this.studentService.checkStudentById(studentId);

        if(!student){
          throw CustomError.notFound('Student not found.');
        }
        const studentEnrollments = await prisma.enrollments.findMany(({
           where: {
            student_id: studentId,
          },
          include: {
            student: true,
            event: {
              include: {
                course: true,
              },
            },
          },
        }))
        
        const result = studentEnrollments.map((enrollment)=>(
          {
            eventId:enrollment.event.id,
            eventName:(enrollment.event.name),
            eventDate:enrollment.event.start_date,
            courseName:enrollment.event.course,
            status:enrollment.event.status,
            enroll:enrollment.enrolled_at


          }));
        return result;

      }
      catch(error){
       if(error instanceof Error){
             throw CustomError.internalServerError(error.message);
            }
             throw CustomError.internalServerError('Internal server error');
     }
    }
}