import {
  UserEntity,
  CustomError,
  ForDatasourceAuthRepo,
  LoginUserDto,
  RegisterUserDto,
  ForDatasourceUserStatusListRepo,
} from '@c18-04-m-node-react/api-modules';
import { UserModel } from './user.mongodb.model';
import { UserMappers } from '../mappers';
import { AuthPasswordUtility } from '../utilities';
export class AuthMongoDBRepoImpl implements ForDatasourceAuthRepo {
  constructor(
    private readonly userStatusListRepo: ForDatasourceUserStatusListRepo
  ) {}
  async register(user: RegisterUserDto): Promise<UserEntity> {
    try {
      const existingUser = await UserModel.findOne({ email: user.email });
      if (existingUser) throw CustomError.badRequest('User already exists');

      const hashedPassword = AuthPasswordUtility.passwordHash(user.password);

      const newUser = await UserModel.create({
        ...user,
        password: hashedPassword,
      });

      await newUser.save();

      await this.userStatusListRepo.add({
        userId: newUser._id.toString(),
        status: 0,
      });

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
