import {
  CustomError,
  ForApiAuthRepo,
  LoginUserDto,
  RegisterUserDto,
  UserAuthRepo,
} from '@c18-04-m-node-react/api-modules';
import { Response, Request } from 'express';

export class ApiAuthControllerRepoImp implements ForApiAuthRepo {
  constructor(private readonly userAuthRepo: UserAuthRepo) { }

  handleError = (error: unknown, res: any) => {
    if (error instanceof CustomError) {
      return res
        .status(error.statusCode)
        .json({ error: 'Internal server error' });
    }

    return res.status(500).json({ error: 'Internal server error' });
  };

  login = (req: Request, res: Response) => {
    const [error, userData] = LoginUserDto.login(req.body);
  };

  register = (req: Request, res: Response) => {
    const [error, createUser] = RegisterUserDto.register(req.body);

    if (error) {
      return res.status(400).json(error);
    }
    this.userAuthRepo
      .registerUser(createUser)
      .then((user) => {
        return res.status(201).json(user);
      })
      .catch((error) => {
        this.handleError(error, res);
      });
  };
}
