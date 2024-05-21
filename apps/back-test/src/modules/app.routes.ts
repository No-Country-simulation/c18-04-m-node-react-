import { Router } from 'express'
import { CarRoutes } from './car/car.routes'
export class AppRoutes {
  static get routes(): Router {
    const router = Router()

    router.use('/api/car', CarRoutes.routes)
    
    return router
  }
}
