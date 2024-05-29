import { Router } from 'express';
import {
  ApiAuthControllerRepoImp,
  ApiAuthRepoImp,
  AuthMongoDBRepoImpl,
} from './infrastructure/';
import { UserStatusListMongoDBRepoImpl } from './infrastructure/datasources';
export class AuthRoutes {
  static get routes(): Router {
    const route = Router();
    const userStatus = new UserStatusListMongoDBRepoImpl();
    const authDatasorce = new AuthMongoDBRepoImpl(userStatus);
    const authRepository = new ApiAuthRepoImp(authDatasorce);
    const authController = new ApiAuthControllerRepoImp(authRepository);

    route.post('/register', authController.register);
    return route;
  }
}
