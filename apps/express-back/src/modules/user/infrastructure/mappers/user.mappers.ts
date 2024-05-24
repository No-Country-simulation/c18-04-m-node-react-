import { UserEntity, CustomError } from '@c18-04-m-node-react/api-modules';

export class UserMappers {
  static userModelToEntity(object: { [key: string]: any }) {
    const {
      _id,
      id,
      firstName,
      lastName,
      email,
      userName,
      userRole,
      birth,
      address,
      contactInfo,
      lawyerTypes,
    } = object;

    if (!id || !_id) throw CustomError.badRequest('id not found');
    if (!firstName) throw CustomError.badRequest('first name not found');
    if (!lastName) throw CustomError.badRequest('last name not found');
    if (!email) throw CustomError.badRequest('email not found');
    if (!birth) throw CustomError.badRequest('birth not found');
    if (!address) throw CustomError.badRequest('address not found');
    if (!contactInfo) throw CustomError.badRequest('contact info not found');
    if (!lawyerTypes) throw CustomError.badRequest('lawyer types not found');

    return new UserEntity(
      id || _id,
      firstName,
      lastName,
      email,
      userName,
      userRole,
      birth,
      address,
      contactInfo,
      lawyerTypes
    );
  }
}
