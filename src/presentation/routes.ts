import { Router } from 'express';
import { AuthRoutes } from './auth/routes';
import { StudentsRoutes } from './student/route';
import { CourseRoutes } from './courses/routes';
export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use('/api/auth',AuthRoutes.routes);
    router.use('/api/student',StudentsRoutes.routes);
    router.use('/api/courses',CourseRoutes.routes);


    return router;
  }


}

