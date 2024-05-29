import {
  ForDatasourceUserStatusListRepo,
  AddUserStatusToListDTO,
  UserListStatusEntity,
  UpdateUserStatusToListDto,
  CustomError,
} from '@c18-04-m-node-react/api-modules';
import { UserListStatusModel } from './userStatusList.mongodb.model';
import {UserStatusListMappers} from '../mappers'

export class UserStatusListMongoDBRepoImpl
  implements ForDatasourceUserStatusListRepo
{
  async add(userInfo: AddUserStatusToListDTO): Promise<UserListStatusEntity> {
    try {

      const userStatus = await UserListStatusModel.findOne({
        userId: userInfo.userId,
      });
      
      if (userStatus) {
        throw CustomError.badRequest('User Status already exists');
      }

      const newStatus = await UserListStatusModel.create({
        userId: userInfo.userId,
        status: userInfo.status,
      });
      await newStatus.save();
      return UserStatusListMappers.userModelToEntity(newStatus);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw CustomError.internalServerError;
    }
  }

  async update(userData: UpdateUserStatusToListDto): Promise<UserListStatusEntity> {
    throw new Error('Method not implemented.');
  }

  async getUserStatusByUserId(userId: string): Promise<UserListStatusEntity> {
    try {
      const userStatus = await UserListStatusModel.findOne({
        userId: userId,
      });

      if (!userStatus) {
        throw CustomError.badRequest('User Status not found');
      }
      return userStatus;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw CustomError.internalServerError;
    }
  }
}
