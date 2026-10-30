import { Router } from "express";
import { ReportsController } from "./controller";
import { ReportServices } from "../services/reports.service";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { check } from "express-validator";
import { FieldValidatorMiddleware } from "../middlewares/fieldValidator.middleware";

export class ReportRoutes{
     static get routes(): Router{

        const router = Router();
        const reportService = new ReportServices();
        const controller = new ReportsController(reportService);


        const validId = check('id').isInt({min:1}).withMessage('Invalid course id');

        router.get('/:id/course-completion',[AuthMiddleware.validateJWT],validId,FieldValidatorMiddleware.fieldValidator,controller.getPaginatedCompletionCourseList)
        router.get('/:id/course-completion/search',[AuthMiddleware.validateJWT],validId,FieldValidatorMiddleware.fieldValidator,controller.searchCompletionCourseList)
        router.get('/course-completion',
          [AuthMiddleware.validateJWT],
          check('query').isInt({min:1}).withMessage('Invalid course id'),
          FieldValidatorMiddleware.fieldValidator,
          controller.getCompletionCourseList
        )
        
        return router;
     }
}