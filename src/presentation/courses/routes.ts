import { Router } from "express";
import { CourseController } from "./controllers";
import { CourseServices } from "../services/course.service";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { check } from "express-validator";
import { FieldValidatorMiddleware } from "../middlewares/fieldValidator.middleware";

export class CourseRoutes{

    static get routes():Router {
     const router = Router();
     const courseService = new CourseServices();
     const courseController = new CourseController(courseService);
     
     router.post('/create',
        [
         check('name').notEmpty().withMessage('Course name cannot be empty.'),
         check('description').notEmpty().withMessage("Course description cannot be empty"),
         check('level').notEmpty().withMessage('Course Level cannot be empty'),
         check('level').isIn(['NIVEL_1_JESUS_ESTA_VIVO','NIVEL_2_JESUS_NOS_CAPACITA','NIVEL_3_JESUS_NOS_ENVIA']).withMessage('Course Level does not match.')
        ],
        FieldValidatorMiddleware.fieldValidator,
        [AuthMiddleware.validateJWT],
        courseController.createCourse
    );

    router.get('/courses',
        [AuthMiddleware.validateJWT],
        courseController.getCourses
    )

     return router;
    }
}