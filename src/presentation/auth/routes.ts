import { Router } from 'express';
import { AuthController } from './controller';
import { AuthService } from '../services/auth.service';
import { check } from 'express-validator';
import { FieldValidatorMiddleware } from '../middlewares/fieldValidator.middleware';

export class AuthRoutes {

  static get routes(): Router {

    const router = Router();
    const authService = new AuthService();
    const controller = new AuthController(authService);
  
    router.post('/login',
      [
        check('email').isEmail().withMessage('Must be a valid email'),
        check('password').isLength({min:6}).withMessage("Password must be at least 6 characters")
      ],
      FieldValidatorMiddleware.fieldValidator,
    
      controller.login
    );

    router.post('/register',
      [
        check('email').isEmail().withMessage('Must be a valid email'),
        check('password').isLength({min:6}).withMessage("Password must be at least 6 characters")
      ],
      FieldValidatorMiddleware.fieldValidator,
    
      controller.register
    );

    router.get('/refresh-token/:id',
      controller.refreshToken
    )



    return router;
  }

  


}

