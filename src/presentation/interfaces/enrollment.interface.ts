import {EnrollStatus} from "@prisma/client";

export interface Enrollment{
  student_id:number,
  event_id:number,
  status? : EnrollStatus
}

export interface EnrollmentUpdate{
  status : EnrollStatus
}