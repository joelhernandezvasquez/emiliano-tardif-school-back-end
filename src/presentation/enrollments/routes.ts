import { Router } from "express";
import { EnrollmentController } from "./controller";
import { EnrollmentService } from "../services/enrollment.service";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { check } from "express-validator";

export class EnrollmentRoutes{
    static get routes():Router{
       const router = Router();
       const enrollmentService = new EnrollmentService();
       const controller = new EnrollmentController(enrollmentService);
      
       router.get('/search',[AuthMiddleware.validateJWT],controller.searchStudent);
       
       router.post('/enroll',
        [
             check('student_id').notEmpty().withMessage("Student ID is required."),
             check('event_id').notEmpty().withMessage('Event ID is required.'),
             check('status').isIn(['registered','enrolled','noShow','completed','cancelled']).withMessage('status is invalid.')
        ],
       [AuthMiddleware.validateJWT],
       controller.createEnrollment
    );

    router.delete('/:enrollmentId',[AuthMiddleware.validateJWT],controller.deleteEnrollment)
    router.put('/:enrollmentId',[AuthMiddleware.validateJWT],controller.updateEnrollment)
    

   return router;
    }
}