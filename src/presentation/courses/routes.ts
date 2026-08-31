import { Router } from "express";
import { CourseController } from "./controllers";
import { CourseServices } from "../services/course.service";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { check } from "express-validator";
import { FieldValidatorMiddleware } from "../middlewares/fieldValidator.middleware";
import { multerAdapter } from "../../config/multer.adapter";

export class CourseRoutes{

    static get routes():Router {
     const router = Router();
     const courseService = new CourseServices();
     const courseController = new CourseController(courseService);
     
     router.post('/create',
        multerAdapter.upload().single('image_file'),
        [
         check('name').notEmpty().withMessage('Course name cannot be empty.'),
         check('description').notEmpty().withMessage("Course description cannot be empty"),
         check('level').notEmpty().withMessage('Course Level cannot be empty'),
         check('level').isIn(['NIVEL_1_JESUS_ESTA_VIVO','NIVEL_2_JESUS_NOS_CAPACITA','NIVEL_3_JESUS_NOS_ENVIA','RENACER_MUJERES','RENACER_HOMBRE','RENACER_PAREJAS']).withMessage('Course/Retreat Level does not match.')
        ],
        FieldValidatorMiddleware.fieldValidator,
        [AuthMiddleware.validateJWT],
        courseController.createCourse
    );

     router.get('/search',
           [AuthMiddleware.validateJWT],
           courseController.searchCourses
          );

     router.get('/total-courses-level',
        [AuthMiddleware.validateJWT],
        courseController.getTotalCoursesByLevel
    )

    router.get('/courses',
        [AuthMiddleware.validateJWT],
        courseController.getCourses
    )
    router.get('/:id',
        [AuthMiddleware.validateJWT],
        courseController.getACourse
    )

    router.put('/:id',
        multerAdapter.upload().single('image_file'),
        [
         check('name').notEmpty().withMessage('Course name cannot be empty.'),
         check('description').notEmpty().withMessage("Course description cannot be empty"),
         check('level').notEmpty().withMessage('Course Level cannot be empty'),
         check('level').isIn(['NIVEL_1_JESUS_ESTA_VIVO','NIVEL_2_JESUS_NOS_CAPACITA','NIVEL_3_JESUS_NOS_ENVIA','RENACER_MUJERES','RENACER_HOMBRE','RENACER_PAREJAS']).withMessage('Course/Retreat Level does not match.')
        ],
        FieldValidatorMiddleware.fieldValidator,
        [AuthMiddleware.validateJWT],
        courseController.updateCourse
    )
    router.delete('/:id',
    [AuthMiddleware.validateJWT],
    courseController.deleteCourse
    )

     return router;
    }
}