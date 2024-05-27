import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { UserEntity } from '@c18-04-m-node-react/api-modules';

interface User {
  id: number;
  username: string;
  password: string;
}

class AuthController {
  async login(req: Request, res: Response): Promise<void> {
    
    const { username, password } = req.body;

    
    const user: User = this.getUserFromDatabase(username); 
    if (!user || !this.validatePassword(password, user.password)) {
     res.status(401).json({ error: 'Invalid credentials' });
    }

    
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });

    res.json({ token });
  }

  async register(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: User = this.createUserInDatabase(username, hashedPassword); 

    
    res.status(201).json({ message: 'User registered successfully' });
  }

  private validatePassword(plainPassword: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(plainPassword, hashedPassword);
  }

  private getUserFromDatabase(username: string): User | null {
    return { id: 1, username, password: 'hashed_password' };
  }

  private createUserInDatabase(username: string, hashedPassword: string): User {
    return { id: 2, username, password: hashedPassword }; 
  }
}

export default new AuthController();