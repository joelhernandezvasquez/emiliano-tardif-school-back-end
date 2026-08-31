import { CourseLevel } from "@prisma/client";

export interface Course{
   name:string,
   description:string,
   level:CourseLevel,
   image_url?:string | null
}