import { UserRepository, UserEntity, ForUserDatabaseRepo, CreateUserDTO } from '@c18-04-m-node-react/api-modules'

export class UserRepoImpl implements UserRepository {
    constructor(private readonly datasource: ForUserDatabaseRepo) {

    }
    async create(user: CreateUserDTO): Promise<UserEntity | null> {
        try {
            return await this.datasource.create(user);
        } catch (error) {
            console.error("Error occurred while creating user:", error);
            return null;
        }
    };

    async getAll(): Promise<UserEntity[]> {
        try {
            return await this.datasource.getAll();
        } catch (error) {
            console.error("Error occurred while getting all users:", error);
            return [];
        }
    }

    async getById(id: string): Promise<UserEntity | null> {
        try {
            return await this.datasource.getById(id);
        } catch (error) {
            console.error("Error occurred while getting user by ID:", error);
            return null;
        }
    }

    async update(id: string, updatedUserData: Partial<CreateUserDTO>): Promise<UserEntity | null> {
        try {
            return await this.datasource.update(id, updatedUserData);
        } catch (error) {
            console.error("Error occurred while updating user:", error);
            return null;
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await this.datasource.delete(id);
        } catch (error) {
            console.error("Error occurred while deleting user:", error);
        }
    }

};
