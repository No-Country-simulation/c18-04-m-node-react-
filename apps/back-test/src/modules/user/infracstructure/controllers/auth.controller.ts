import {
  CustomError,
  ForApiAuthRepo,
  LoginUserDto,
  RegisterUserDto,
  UserAuthRepo,
} from '@c18-04-m-node-react/api-modules';

export class AuthController implements ForApiAuthRepo {
  constructor(private readonly userAuthRepo: UserAuthRepo) {}

  handleError = (error: unknown, res: any) => {
    if (error instanceof CustomError) {
      return res
        .status(error.statusCode)
        .json({ error: 'Internal server error' });
    }

    return res.status(500).json({ error: 'Internal server error' });
  };

  login = (req: any, res: any) => {
    const [error, createCar] = LoginUserDto.login(req.body);
  };

  register = (req: any, res: any) => {
    const [error, createCar] = RegisterUserDto.register(req.body);
  };
}
