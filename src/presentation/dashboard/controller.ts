import { Request,Response } from "express";
import { DashboardServices } from "../services/dashboard.service";
import { CustomError } from "../../domain/errors/custom.error";

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

    getEventsSummary = (req:Request,res:Response) =>{
      this.dashboardService.getDashboardEventsSummary()
      .then((summary)=> res.json(summary))
      .catch((error)=> this.handleError(error,res))
    }

    getStudentsAtRisk = (req:Request,res:Response) =>{
       this.dashboardService.getDashboardStudentRisk()
      .then((students)=> res.json(students))
      .catch((error)=> this.handleError(error,res))
    }

    
}