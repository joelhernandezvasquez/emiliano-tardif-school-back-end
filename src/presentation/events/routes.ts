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

  const eventFields = [
     check('name').isString().notEmpty().withMessage("Name of the event is required."),
     check('course_id').isInt({min:1}).withMessage('Course ID is required.'),
     check('price').isInt({min:0}).withMessage('Price is required.'),
     check('start_date').isString().isISO8601().withMessage('Please provide the day the event start.'),
     check('end_date').isString().isISO8601().withMessage('Please provide the day the event ends.'),
     check('location').isString().notEmpty().withMessage('Location cannot be empty.'),
     check('status').isIn(['upcoming','ongoing','completed','cancelled']).withMessage('status is invalid.')
  ];
  const validId = check('id').isInt({min:1}).withMessage('Invalid id');
  const validPage = check('page').optional().isInt({min:1}).withMessage('Invalid page');

  router.get('/pagination',[AuthMiddleware.validateJWT],validPage,FieldValidatorMiddleware.fieldValidator,controller.getEventPagination);

  router.get('/summary',[AuthMiddleware.validateJWT],controller.getEventSummary)

  router.get('/search',[AuthMiddleware.validateJWT],validPage,FieldValidatorMiddleware.fieldValidator,controller.searchEvents);

   router.post('/create',
    [AuthMiddleware.validateJWT],
    eventFields,
    FieldValidatorMiddleware.fieldValidator,
    controller.createEvent
)

  router.post('/:id/complete',[AuthMiddleware.validateJWT],validId,FieldValidatorMiddleware.fieldValidator,controller.completeEvent)

   router.get('/list',
    [AuthMiddleware.validateJWT],
    controller.getEvents
   )

   router.get('/:id',
    [AuthMiddleware.validateJWT],
    validId,
    FieldValidatorMiddleware.fieldValidator,
    controller.getEvent
   )


   router.put('/:id',
    [AuthMiddleware.validateJWT],
    validId,
    eventFields,
    FieldValidatorMiddleware.fieldValidator,
    controller.updateEvent
   )

   router.get('/:eventId/enrollments',
    [AuthMiddleware.validateJWT],
    check('eventId').isInt({min:1}).withMessage('Invalid event id'),
    FieldValidatorMiddleware.fieldValidator,
    enrollmentController.getEnrollmentsForEvent
   )
   
   
   return router;
  }
}