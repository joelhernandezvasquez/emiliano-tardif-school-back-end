import { Router } from "express";
import { EnrollmentController } from "./controller";
import { EnrollmentService } from "../services/enrollment.service";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { check } from "express-validator";
import { FieldValidatorMiddleware } from "../middlewares/fieldValidator.middleware";

export class EnrollmentRoutes{
    static get routes():Router{
       const router = Router();
       const enrollmentService = new EnrollmentService();
       const controller = new EnrollmentController(enrollmentService);
       const enrollStatuses = ['registered','enrolled','noShow','completed','cancelled'];
       const validEnrollmentId = check('enrollmentId').isUUID().withMessage('Invalid enrollment id');
      
       router.get('/search/:eventId',
        [AuthMiddleware.validateJWT],
        check('eventId').isInt({min:1}).withMessage('Invalid event id'),
        FieldValidatorMiddleware.fieldValidator,
        controller.searchStudent
       );
       
       router.post('/enroll',
       [AuthMiddleware.validateJWT],
        [
             check('student_id').isInt({min:1}).withMessage("Student ID is required."),
             check('event_id').isInt({min:1}).withMessage('Event ID is required.'),
             check('status').optional().isIn(enrollStatuses).withMessage('status is invalid.')
        ],
       FieldValidatorMiddleware.fieldValidator,
       controller.createEnrollment
    );

    router.delete('/:enrollmentId',[AuthMiddleware.validateJWT],validEnrollmentId,FieldValidatorMiddleware.fieldValidator,controller.deleteEnrollment)
    router.put('/:enrollmentId',
      [AuthMiddleware.validateJWT],
      validEnrollmentId,
      check('status').isIn(enrollStatuses).withMessage('status is invalid.'),
      FieldValidatorMiddleware.fieldValidator,
      controller.updateEnrollment
    )
    

   return router;
    }
}