import {
  UserAuthRepo,
  RegisterUserDto,
  UserEntity,
  LoginUserDto,
  ForDatasourceAuthRepo
} from '@c18-04-m-node-react/api-modules';

export class ApiAuthRepoImp implements UserAuthRepo {
  constructor(private readonly authDatasource: ForDatasourceAuthRepo) {}
  async registerUser(user: RegisterUserDto): Promise<UserEntity> {
   
    return await this.authDatasource.register(user);

  }

  loginUser(user: LoginUserDto): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
}
