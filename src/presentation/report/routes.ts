import { Router } from "express";
import { ReportsController } from "./controller";
import { ReportServices } from "../services/reports.service";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class ReportRoutes{
     static get routes(): Router{

        const router = Router();
        const reportService = new ReportServices();
        const controller = new ReportsController(reportService);


        router.get('/:id/course-completion',[AuthMiddleware.validateJWT],controller.getCompletionCourseList)
        
        return router;
     }
}