import { EventStatus } from "@prisma/client";

export interface Event{
  name:string,
  course_id:number,
  price:number,
  start_date: Date,
  end_date:Date,
  location:string,
  status:EventStatus
}
export interface EventQueryParams{
    query:string,
    page:number
}
