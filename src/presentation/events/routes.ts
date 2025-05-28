import { Router } from "express";
import { EventController } from "./controllers";
import { EventService } from "../services/event.service";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { check } from "express-validator";
import { FieldValidatorMiddleware } from "../middlewares/fieldValidator.middleware";

export class EventRoutes{
  static get routes():Router{
   const router = Router();
   const eventService = new EventService();
   const controller = new EventController(eventService);

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
   return router;
  }
}