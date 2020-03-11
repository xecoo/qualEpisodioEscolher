import { User } from "../entities/user";

export interface UserDataSource {
    createUser(user: User): Promise<void>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
    verifyUserExists(id: string): Promise<boolean>;
    getUserById(id:string): Promise<User>;
    updatePassword(id: string, newPassword: string): Promise<void>;
}