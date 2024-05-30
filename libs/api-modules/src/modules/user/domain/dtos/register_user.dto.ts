import { AddressEntity,ContactInfo } from '../entities/';

export class RegisterUserDto {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly userName: string,
    public readonly password: string,
    public readonly birth: string,
    public readonly email: string,
    public readonly registrationId: string,
    public readonly address: AddressEntity,
    public readonly contactInfo: ContactInfo
  ) { }

  static register(user: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { firstName, lastName, userName, password, birth, email, registrationId, address,contactInfo } = user;

    //evaluation of the existence of the fields
    if (!firstName) return ['firstName is required', undefined];
    if (!lastName) return ['lastName is required', undefined];
    if (!userName) return ['userName is required', undefined];
    if (!password) return ['password is required', undefined];
    if (!birth) return ['birth is required', undefined];
    if (!email) return ['email is required', undefined];
    if (!registrationId) return ['registrationId is required', undefined];
    if (!address) return ['address is required', undefined];
    if (!address.street) return ['street is required', undefined];
    if (!address.city) return ['city is required', undefined];
    if (!address.zipCode) return ['zipCode is required', undefined];
    if (!contactInfo) return ['contactInfo is required', undefined];
    if (!contactInfo.phone) return ['phone is required', undefined];
    if (!contactInfo.movil) return ['email is required', undefined];

    //return data
    return [
      undefined,
      new RegisterUserDto(
        firstName,
        lastName,
        userName,
        password,
        birth,
        email,
        registrationId,
        address,
        contactInfo
      ),
    ];
  }
}
