import { UserEntity, CreateUserDTO } from "../../../domain";

export abstract class ForUserAxiosFecthRepo {
    abstract createUser(user:CreateUserDTO):Promise<UserEntity>
};