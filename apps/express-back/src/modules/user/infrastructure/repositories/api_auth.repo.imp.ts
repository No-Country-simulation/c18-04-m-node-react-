import {
  UserAuthRepo,
  RegisterUserDto,
  UserEntity,
  LoginUserDto,
  ForDatasourceAuthRepo
} from '@c18-04-m-node-react/api-modules';

export class ApiAuthRepoImp implements UserAuthRepo {
  constructor(private readonly authDatasource: ForDatasourceAuthRepo) { }
  async registerUser(user: RegisterUserDto): Promise<UserEntity> {
    return await this.authDatasource.register(user);

  }

  async loginUser(user: LoginUserDto): Promise<UserEntity> {
    return await this.authDatasource.login(user);
  }
}
