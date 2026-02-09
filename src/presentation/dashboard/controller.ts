import { Request,Response } from "express";
import { DashboardServices } from "../services/dashboard.service";
import { StudentServices } from "../services/student.service";
import { CustomError } from "../../domain/errors/custom.error";
import { Student } from "../interfaces/student.interface";
import { StudentCourse } from "../interfaces/studentCourse.interface";

export class DashboardController{

    constructor(public readonly dashboardService:DashboardServices){}

        private handleError = (error:unknown,res:Response) =>{
          
           if(error instanceof CustomError){
             return res.status(error.statusCode).json({error:error.message})
           }
           console.log(`${error}`);
           return res.status(500).json({error:'Internal Server Error'});
        }

    getSummary = (req:Request,res:Response) => {
      this.dashboardService.getDashboardSummary()
      .then((summary)=> res.json(summary))
      .catch((error)=> this.handleError(error,res))
    }

    
}