import { Router } from 'express';
import { CarRoutes } from './car/car.routes';
import { AuthRoutes } from './user';
export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    //AUTH
    router.use('/api', AuthRoutes.routes);
    
    //EXAMPLE
    router.use('/api/car', CarRoutes.routes);

    return router;
  }
}
