import { Router } from 'express';
import {
  ApiAuthControllerRepoImp,
  ApiAuthRepoImp,
  AuthMongoDBRepoImpl,
} from './infrastructure/';
export class AuthRoutes {
  static get routes(): Router {
    const route = Router();
    const authDatasorce = new AuthMongoDBRepoImpl();
    const authRepository = new ApiAuthRepoImp(authDatasorce);
    const authController = new ApiAuthControllerRepoImp(authRepository);

    route.post('/register', authController.register);
    return route;
  }
}
