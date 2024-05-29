import jwt from 'jsonwebtoken';
import { envs } from '../../../../config/';

export class JwtTokenUtility {
  static  createToken(userId: string, expirerTime = '1h'): string {
    return jwt.sign({ userId: userId }, envs.SERVER_SECRET_WORD, {
      expiresIn: expirerTime,
    });
  }

  static validateToken(token: string): string | jwt.JwtPayload {
    return jwt.verify(token, envs.SERVER_SECRET_WORD);
  }

  static getUserIdByToken(token: string): string {
    const { userId } = jwt.decode(token) as { userId: string };
    return userId;
  }

}