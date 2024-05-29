import { LoginUserDto, RegisterUserDto } from '../dtos';
import { UserEntity } from '../entities';

export abstract class UserAuthRepo {
  abstract registerUser(user: RegisterUserDto): Promise<UserEntity>;
  //login user need a object with shape object = {email: string, password: string}
  abstract loginUser(userLogin: LoginUserDto): Promise<UserEntity>;
}
