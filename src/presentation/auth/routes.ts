import { Router } from 'express';
import { AuthController } from './controller';
import { AuthService } from '../services/auth.service';
import { check } from 'express-validator';
import rateLimit from 'express-rate-limit';
import { FieldValidatorMiddleware } from '../middlewares/fieldValidator.middleware';
import { AuthMiddleware } from '../middlewares/auth.middleware';

export class AuthRoutes {

  static get routes(): Router {

    const router = Router();

    const authLimiter = rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 10,
      standardHeaders: true,
      legacyHeaders: false,
      message: { error: 'Too many attempts, try again later' },
    });

    const authService = new AuthService();
    const controller = new AuthController(authService);
  
    router.post('/login',
      authLimiter,
      [
        check('email').isEmail().withMessage('Must be a valid email'),
        check('password').notEmpty().withMessage('Password is required')
      ],
      FieldValidatorMiddleware.fieldValidator,
    
      controller.login
    );

    router.post('/register',
      authLimiter,
      AuthMiddleware.validateJWT,
      [
        check('name').notEmpty().withMessage('Name cannot be empty'),
        check('email').isEmail().withMessage('Must be a valid email'),
        check('password').isLength({min:12}).withMessage("Password must be at least 12 characters")
      ],
      FieldValidatorMiddleware.fieldValidator,
    
      controller.register
    );

    router.get('/refresh-token/:id',
      AuthMiddleware.validateJWT,
      controller.refreshToken
    )



    return router;
  }

  


}

