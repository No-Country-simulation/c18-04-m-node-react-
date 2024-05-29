import { AddUserStatusToListDTO, UpdateUserStatusToListDto, UserListStatusEntity } from "../../../domain";

export abstract class ForDatasourceUserStatusListRepo {
    abstract add(userData : AddUserStatusToListDTO): Promise<UserListStatusEntity>;
    abstract update(userData : UpdateUserStatusToListDto): Promise<UserListStatusEntity>;
    abstract getUserStatusByUserId(userId: string): Promise<UserListStatusEntity>;
}