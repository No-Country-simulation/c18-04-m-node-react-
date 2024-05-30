export class LoginUserDto {
  constructor(
    public readonly email: string,
    public readonly password: string
  ) {}

  static login(object: { [key: string]: any }): [string?, LoginUserDto?] {
    const { password, email } = object;

    //evaluation of the existence of the fields
    if (!password) return ['password is required', undefined];
    if (!email) return ['email is required', undefined];

    //return data
    return [undefined, new LoginUserDto(email, password)];
  }
}
