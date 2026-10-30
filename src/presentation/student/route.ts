import { Router } from "express";
import { StudentController } from "./controllers";
import { check } from "express-validator";
import { FieldValidatorMiddleware } from "../middlewares/fieldValidator.middleware";
import { StudentServices } from "../services/student.service";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { EnrollmentService } from "../services/enrollment.service";
import { EnrollmentController } from "../enrollments/controller";
export class StudentsRoutes {
    
    static get routes(): Router{
       const router = Router();
       const studentService = new StudentServices();
       const controller = new StudentController(studentService);
       const enrollmentService = new EnrollmentService();
       const enrollmentController = new EnrollmentController(enrollmentService);
       const validId = check('id').isInt({min:1}).withMessage('Invalid id');

       const studentFields = [
        check('first_name').isString().notEmpty().isLength({min:2}).withMessage("First Name cannot be empty"),
        check('last_name').isString().notEmpty().isLength({min:2}).withMessage("Last Name cannot be empty"),
        check('phone').isString().notEmpty().withMessage("Phone cannot be empty"),
        check('email').optional({values:'falsy'}).isString(),
        check('direccion').optional().isString(),
        check('parroquia').optional().isString(),
        check('asuntos_medicos').optional().isString(),
       ];

       router.post('/students',
        [AuthMiddleware.validateJWT],
        studentFields,
        FieldValidatorMiddleware.fieldValidator,
        controller.createStudent
      );

       router.post('/:id/courses/manual-add',
        [AuthMiddleware.validateJWT],
        [
         check('id').isInt({min:1}).withMessage('Invalid id'),
         check('courses').isArray({min:1}).withMessage("Courses cannot be empty"),
         check('courses.*.course_id').isInt({min:1}).withMessage('Invalid course id'),
         check('courses.*.completedAt').optional({values:'null'}).isISO8601().withMessage('Invalid completed date')
        ],
        FieldValidatorMiddleware.fieldValidator,
        controller.addManualStudentCourses)
      
       router.get('/summary',[AuthMiddleware.validateJWT],controller.getSummary);
      
      router.get('/students',[AuthMiddleware.validateJWT],controller.getAllStudents);
      
      router.get('/search',
        [AuthMiddleware.validateJWT],
        [check('page').optional().isInt({min:1}).withMessage('Invalid page')],
        FieldValidatorMiddleware.fieldValidator,
        controller.searchStudent
      );

      router.get('/pagination',[AuthMiddleware.validateJWT],controller.getStudentPagination);
      
      router.get('/:id',[AuthMiddleware.validateJWT],validId,FieldValidatorMiddleware.fieldValidator,controller.getStudent);
      
      router.delete('/:id',[AuthMiddleware.validateJWT],validId,FieldValidatorMiddleware.fieldValidator,controller.deleteStudent);

      router.put('/:id',
        [AuthMiddleware.validateJWT],
        validId,
        studentFields,
        check('active').optional().isBoolean(),
        FieldValidatorMiddleware.fieldValidator,
        controller.updateStudent
      );
   
      router.get('/:id/enrollments',[AuthMiddleware.validateJWT],validId,FieldValidatorMiddleware.fieldValidator,enrollmentController.getStudentEnrollmentHistory);

      router.get('/:id/progress',[AuthMiddleware.validateJWT],validId,FieldValidatorMiddleware.fieldValidator,controller.getStudentProgress);
     
      router.get('/:id/pending-courses',[AuthMiddleware.validateJWT],validId,FieldValidatorMiddleware.fieldValidator,controller.getPendingCoursesList);
    
      router.get('/:id/complete-courses',[AuthMiddleware.validateJWT],validId,FieldValidatorMiddleware.fieldValidator,controller.getEnrollCourseList);
      
      router.put('/:id/update-student-course-date',
        [AuthMiddleware.validateJWT],
        validId,
        [
         check('course_id').isInt({min:1}).withMessage('Invalid course id'),
         check('completedAt').isISO8601().withMessage('Invalid completed date')
        ],
        FieldValidatorMiddleware.fieldValidator,
        controller.updateStudentCourseDate
      )
     

      return router;
    }
}