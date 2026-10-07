import { CustomError } from "../../domain/errors/custom.error";
import { Request,Response } from "express";
import { ReportServices } from "../services/reports.service";

export class ReportsController{
constructor(public readonly reportService:ReportServices){}

    private handleError = (error:unknown,res:Response) =>{
              
               if(error instanceof CustomError){
                 return res.status(error.statusCode).json({error:error.message})
               }
               console.log(`${error}`);
               return res.status(500).json({error:'Internal Server Error'});
    }

    getCompletionCourseList = (req:Request,res:Response) =>{
        const {id} = req.params;

       this.reportService.getCompletionCourseList(+id)
      .then((list)=> res.json(list))
     .catch((error) => this.handleError(error,res))
    }


}