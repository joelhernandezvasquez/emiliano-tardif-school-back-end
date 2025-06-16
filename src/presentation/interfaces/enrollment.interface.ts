import { Attendance } from "@prisma/client";

export interface Enrollment{
  student_id:number,
  event_id:number,
  notes?:string,
  attendance : Attendance
}

export interface EnrollmentUpdate{
   notes?:string,
  attendance : Attendance
}