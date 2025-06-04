import { Router } from 'express';
import { AuthRoutes } from './auth/routes';
import { StudentsRoutes } from './student/route';
import { CourseRoutes } from './courses/routes';
import { EventRoutes } from './events/routes';
import { EnrollmentRoutes } from './enrollments/routes';
export class AppRoutes {

  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use('/api/auth',AuthRoutes.routes);
    router.use('/api/student',StudentsRoutes.routes);
    router.use('/api/course',CourseRoutes.routes);
    router.use('/api/events',EventRoutes.routes);
    router.use('/api/enrollments',EnrollmentRoutes.routes);

    return router;
  }


}

