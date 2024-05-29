import { ContactInfo } from '../entities';

export class RegisterUserDto {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly userName: string,
    public readonly password: string,
    public readonly birth: string,
    public readonly email: string
  ) {}

  static register(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { firstName, lastName, userName, password, birth, email } = object;
    
    //evaluation of the existence of the fields
    if (!firstName) return ['firstName is required', undefined];
    if (!lastName) return ['lastName is required', undefined];
    if (!userName) return ['userName is required', undefined];
    if (!password) return ['password is required', undefined];
    if (!birth) return ['birth is required', undefined];
    if (!email) return ['email is required', undefined];

    //return data
    return [
      undefined,
      new RegisterUserDto(
        firstName,
        lastName,
        userName,
        password,
        birth,
        email
      ),
    ];
  }
}
