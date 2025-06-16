import { Router } from "express";
import { EventController } from "./controllers";
import { EventService } from "../services/event.service";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { check } from "express-validator";
import { FieldValidatorMiddleware } from "../middlewares/fieldValidator.middleware";
import { EnrollmentController } from "../enrollments/controller";
import { EnrollmentService } from "../services/enrollment.service";

export class EventRoutes{
  static get routes():Router{
   const router = Router();
   const eventService = new EventService();
   const enrollmentService = new EnrollmentService();
   const controller = new EventController(eventService);
   const enrollmentController = new EnrollmentController(enrollmentService);

   router.post('/create',
    [
     check('name').notEmpty().withMessage("Name of the event is required."),
     check('course_id').notEmpty().withMessage('Course ID is required.'),
     check('price').notEmpty().withMessage('Price is required.'),
     check('start_date').notEmpty().withMessage('Please provide the day the event start.'),
     check('end_date').notEmpty().withMessage('Please provide the day the event ends.'),
     check('location').notEmpty().withMessage('Location cannot be empty.'),
     check('status').notEmpty().withMessage('Status of the event cannot be empty.'),
     check('status').isIn(['upcoming','ongoing','completed','cancelled']).withMessage('status is invalid.')
    ],
    FieldValidatorMiddleware.fieldValidator,
    [AuthMiddleware.validateJWT],
    controller.createEvent
)

   router.get('/list',
    [AuthMiddleware.validateJWT],
    controller.getEvents
   )

   router.get('/:id',
    [AuthMiddleware.validateJWT],
    controller.getEvent
   )

   router.put('/:id',
    [
     check('name').notEmpty().withMessage("Name of the event is required."),
     check('course_id').notEmpty().withMessage('Course ID is required.'),
     check('price').notEmpty().withMessage('Price is required.'),
     check('start_date').notEmpty().withMessage('Please provide the day the event start.'),
     check('end_date').notEmpty().withMessage('Please provide the day the event ends.'),
     check('location').notEmpty().withMessage('Location cannot be empty.'),
     check('status').notEmpty().withMessage('Status of the event cannot be empty.'),
     check('status').isIn(['upcoming','ongoing','completed','cancelled']).withMessage('status is invalid.')
    ],
    [AuthMiddleware.validateJWT],
    controller.updateEvent
   )

   router.get('/:eventId/enrollments',[AuthMiddleware.validateJWT],enrollmentController.getEnrollmentsForEvent)
   
  
   
   return router;
  }
}