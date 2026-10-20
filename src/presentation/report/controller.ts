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
        const {query} = req.query;
       this.reportService.getCompletionCourseList(+query!)
      .then((list)=> res.json(list))
     .catch((error) => this.handleError(error,res))
    }

    getPaginatedCompletionCourseList = (req:Request,res:Response) =>{
        const courseId = Number(req.params.id);
        const status = req.query.status === 'not-completed' ? 'not-completed' : 'completed';
        const page = Math.max(1, Number(req.query.page) || 1);
        const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 10));

        if(!Number.isInteger(courseId) || courseId <= 0){
            return res.status(400).json({error:'Invalid course id'});
        }

        this.reportService.getPaginatedCompletionCourseList(courseId,status,page,limit)
        .then((list)=> res.json(list))
        .catch((error) => this.handleError(error,res))
    }

    searchCompletionCourseList = (req:Request,res:Response) =>{
        const courseId = Number(req.params.id);
        const status = req.query.status === 'not-completed' ? 'not-completed' : 'completed';
        const page = Math.max(1, Number(req.query.page) || 1);
        const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 10));
        const rawSearch = req.query.search ?? req.query.query ?? req.query.q;
        const search = typeof rawSearch === 'string' ? rawSearch.trim() : '';

        if(!Number.isInteger(courseId) || courseId <= 0){
            return res.status(400).json({error:'Invalid course id'});
        }

        this.reportService.searchCompletionCourseList(courseId,status,page,limit,search)
        .then((list)=> res.json(list))
        .catch((error) => this.handleError(error,res))
    }

}