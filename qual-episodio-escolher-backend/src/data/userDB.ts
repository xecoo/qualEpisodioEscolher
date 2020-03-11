import { UserDataSource } from './../business/dataSource/userDataSource';
import { BaseDB } from "./base/baseDB";
import { User } from '../business/entities/user';

const table: string = "qualEpisodioAssistir_users";

export class UserDB extends BaseDB implements UserDataSource {

    public async getUserById(id: string): Promise<User> {
        const user = await this.connection.raw(`
            SELECT * FROM ${table} WHERE id="${id}";
        `)
        return this.dbModelToUser(user[0])
    }

    public async updatePassword(id: string, newPassword: string): Promise<void> {
        await this.connection.raw(`
            UPDATE ${table} SET password="${newPassword}" WHERE="${id}";
        `)
    }

    public async getUserByEmail(email: string): Promise<User> {
        const user = await this.connection.raw(`
            SELECT * FROM ${table} WHERE email="${email}";
        `)
        return this.dbModelToUser(user[0][0])
    }

    public async verifyUserExists(id: string): Promise<boolean> {
        const user = await this.connection.raw(`
            SELECT * FROM ${table} WHERE id="${id}";
        `)

        return user
    }

    public async createUser(user: User): Promise<void> {
        await this.connection.raw(`
            INSERT INTO 
                ${table} (
                    id,
                    name,
                    email,
                    password
                )
            VALUES(
                "${user.getId()}",
                "${user.getName()}",
                "${user.getEmail()}",
                "${user.getPassword()}",
            );
        `)
    }

    private dbModelToUser(dbModel: any): User {
        return new User(
            dbModel.id,
            dbModel.name,
            dbModel.email,
            dbModel.password
        )
    }

    public async getAllUsers(): Promise<User[]> {
        const allUsers = await this.connection.raw(`
            SELECT * FROM ${table};
        `)
        return allUsers[0].map(this.dbModelToUser);
    }

}