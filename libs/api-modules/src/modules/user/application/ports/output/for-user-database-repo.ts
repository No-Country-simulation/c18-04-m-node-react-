import { CreateUserDTO } from "../../../domain";
import { UserEntity } from "../../../domain/entities/user.entity";

export abstract class ForUserDatabaseRepo {

    abstract create(user: CreateUserDTO): Promise<UserEntity>
    abstract getAll(): Promise<UserEntity[]>;
    abstract getById(id: string): Promise<UserEntity | null>;
    abstract update(id: string, updatedUserData: Partial<CreateUserDTO>): Promise<UserEntity | null>;
    abstract delete(id: string): Promise<void>;
};