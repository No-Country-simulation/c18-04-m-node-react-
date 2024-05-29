import { UserListStatusEntity, CustomError } from '@c18-04-m-node-react/api-modules';

export class UserStatusListMappers {
  static userModelToEntity(object: { [key: string]: any }) {
    const {
      _id,
      id,
      status,
      userId
    } = object;

    if (!id || !_id) throw CustomError.badRequest('id not found');
    if (status < 0 ) throw CustomError.badRequest('status not found');
    if (!userId) throw CustomError.badRequest('userId not found');

    return new UserListStatusEntity({
      id: id || _id,
      status: status,
      userId:userId
    });
  }
}
