import { UserEntity, CreateUserDTO } from "../../../domain";

export abstract class ForUserAxiosFecthRepo {
    abstract createUser(user: CreateUserDTO): Promise<UserEntity>;
    abstract getAllUsers(): Promise<UserEntity[] | null>;
    abstract getUserById(userId: string): Promise<UserEntity | null>;
    abstract updateUser(userId: string, updatedUserData: Partial<CreateUserDTO>): Promise<UserEntity | null>;
    abstract deleteUser(userId: string): Promise<void>;
};