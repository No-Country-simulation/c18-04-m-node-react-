import { Router } from "express";
import { AuthController } from "../user/infracstructure/controllers/auth.controller"; 

export class CarRoutes {
  static get routes(): Router {
    const route = Router();
    const lawFirmAuthController = new AuthController
    route.post('/create', lawFirmAuthController.create)
    return route
  }
}
