import { CustomError } from "../../domain/errors/custom.error";
import { Request,Response } from "express";
import { CourseServices } from "../services/course.service";

export class CourseController{
  
    constructor(public readonly courseService:CourseServices){}

  private handleError = (error:unknown,res:Response) =>{
            
             if(error instanceof CustomError){
               return res.status(error.statusCode).json({error:error.message})
             }
             console.log(`${error}`);
             return res.status(500).json({error:'Internal Server Error'});
          }

   public createCourse = (req:Request,res:Response) =>{
     const courseData = {
      name:req.body.name.trim(),
      description:req.body.description.trim(),
      level:req.body.level.trim()
     }

     this.courseService.createCourse(courseData)
     .then((course)=> res.json(course))
     .catch((error)=> this.handleError(error,res))
   }

   public getCourses = (req:Request,res:Response) =>{
     this.courseService.getCourses()
     .then((courses)=> res.json(courses))
     .catch((error)=> this.handleError(error,res))
   }

   public getACourse = (req:Request,res:Response) => {
    const {id} = req.params;
     
    this.courseService.getACourse(parseInt(id))
     .then((courses)=> res.json(courses))
     .catch((error)=> this.handleError(error,res))
   }

   public updateCourse = (req:Request,res:Response) =>{
     const {id} = req.params;

     const courseData = {
       name:req.body.name.trim(),
       description:req.body.description.trim(),
       level:req.body.level.trim()
     }

     this.courseService.updateCourse(parseInt(id),courseData)
     .then((course)=> res.json(course))
     .catch((error)=> this.handleError(error,res))
   }

   public deleteCourse = (req:Request,res:Response) =>{
     const {id} = req.params;
     if(!id){
      return res.status(400).send("Course ID was not provided");
     }
    
     this.courseService.deleteCourse(parseInt(id))
     .then((course)=> res.json(course))
     .catch((error)=> this.handleError(error,res))


   }
}