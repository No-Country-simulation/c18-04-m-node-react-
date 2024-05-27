import { UserEntity } from '../../../domain';
import { LoginUserDto, RegisterUserDto } from '../../../domain/dtos';

export abstract class ForDatasourceAuthRepo {
  abstract login(user: LoginUserDto): Promise<UserEntity>;
  abstract register(user: RegisterUserDto): Promise<UserEntity>;
}
