import { UserEntity } from "../entities/user.entity";
import { CreateUserDTO } from "../dtos";

export abstract class UserRepository {
  abstract create(user: CreateUserDTO): Promise<UserEntity>
  abstract getAll(): Promise<UserEntity[]>;
  abstract getById(id: string): Promise<UserEntity | null>;
  abstract update(id: string, updatedUserData: Partial<CreateUserDTO>): Promise<UserEntity | null>;
  abstract delete(id: string): Promise<void>;
}