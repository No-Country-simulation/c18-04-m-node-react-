import bcrypt from 'bcrypt';
export class AuthPasswordUtility {
  static passwordValidate(password: string, hashedPassword: string): boolean {
    let isEqual = false;

    isEqual = bcrypt.compareSync(password, hashedPassword,);

    return isEqual;
  }

  static passwordHash(password: string): string {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }
}
