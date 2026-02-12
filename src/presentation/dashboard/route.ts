import { Router } from "express";
import { check } from "express-validator";
import { FieldValidatorMiddleware } from "../middlewares/fieldValidator.middleware";
import { StudentServices } from "../services/student.service";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { EnrollmentService } from "../services/enrollment.service";
import { EnrollmentController } from "../enrollments/controller";
import { DashboardController } from "./controller";
import { DashboardServices } from "../services/dashboard.service";
import { EventService } from "../services/event.service";
export class DashboardRoutes {
    
    static get routes(): Router{
       const router = Router();
       const studentService = new StudentServices();
       const eventService = new EventService();
       const enrollmentService = new EnrollmentService();
       const dashboardService = new DashboardServices(studentService,eventService,enrollmentService);
       const controller = new DashboardController(dashboardService);
    
      router.get('/summary',[AuthMiddleware.validateJWT],controller.getSummary);
      router.get('/events/summary',[AuthMiddleware.validateJWT],controller.getEventsSummary)

      return router;
    }
}