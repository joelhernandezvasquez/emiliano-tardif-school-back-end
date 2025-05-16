import { Router } from "express";
import { StudentController } from "./controllers";
import { check } from "express-validator";
import { FieldValidatorMiddleware } from "../middlewares/fieldValidator.middleware";
import { StudentServices } from "../services/student.service";
import { AuthMiddleware } from "../middlewares/auth.middleware";
export class StudentsRoutes {
    
    static get routes(): Router{
       const router = Router();
       const studentService = new StudentServices();
       const controller = new StudentController(studentService);

       router.post('/students',
        [
        check('first_name').notEmpty().isLength({min:2}).withMessage("First Name cannot be empty"),
        check('last_name').notEmpty().isLength({min:2}).withMessage("Last Name cannot be empty"),
        check('phone').notEmpty(),
        check('gender').notEmpty(),
        check('asuntos_medicos').notEmpty(),
        ],
        FieldValidatorMiddleware.fieldValidator,
        [AuthMiddleware.validateJWT],
        controller.createStudent
      );

      router.get('/students',[AuthMiddleware.validateJWT],controller.getAllStudents);
      
      router.get('/search',[AuthMiddleware.validateJWT],controller.searchStudent);
      
      router.get('/:id',[AuthMiddleware.validateJWT],controller.getStudent);
      
      router.delete('/:id',[AuthMiddleware.validateJWT],controller.deleteStudent);

      router.put('/:id',[AuthMiddleware.validateJWT],controller.updateStudent);
   

       return router;
    }
}