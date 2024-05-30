import { Router } from "express";
import { CarApiControllerRepoImpl, CarRepoImpl, CarMongoDBRepoImpl } from './infrastructure/'
export class CarRoutes {
  static get routes(): Router {
    const route = Router();
    const carDatasorce = new CarMongoDBRepoImpl()
    const carRepository = new CarRepoImpl(carDatasorce)
    const carController = new CarApiControllerRepoImpl(carRepository)

    route.post('/create', carController.create)
    return route
  }
}
