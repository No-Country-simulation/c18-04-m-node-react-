import {
  UserEntity,
  CustomError,
  ForDatasourceAuthRepo,
  LoginUserDto,
  RegisterUserDto,
} from '@c18-04-m-node-react/api-modules';
import { UserModel } from './user.mongodb.model';
import { UserMappers } from '../mappers';
export class AuthMongoDBRepoImpl implements ForDatasourceAuthRepo {
  async register(user: RegisterUserDto): Promise<UserEntity> {
    try {
      const existingUser = await UserModel.findOne({ email: user.email });
      if (existingUser) throw CustomError.badRequest('User already exists');
      const newUser = await UserModel.create({
        ...user,
        //need password hash
        password: user.password,
      });

      await newUser.save();
      return UserMappers.userModelToEntity(newUser);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw CustomError.internalServerError;
    }
  }

  async login(user: LoginUserDto): Promise<UserEntity> {
    try {
      const existingUser = await UserModel.findOne({ email: user.email });
      if (!existingUser) throw CustomError.badRequest('User not found');

      return UserMappers.userModelToEntity(existingUser);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw CustomError.internalServerError;
    }
  }
}
