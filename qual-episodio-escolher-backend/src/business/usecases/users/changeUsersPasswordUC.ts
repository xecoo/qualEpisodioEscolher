import { EncryptDataSource } from './../../dataSource/cryptography/encryptDataSource';
import { UserDataSource } from './../../dataSource/userDataSource';
import { CryptCompareDataSource } from '../../dataSource/cryptography/compareCryptography';

export class ChangeUsersPasswordUC {
    constructor(
        private userDataSource: UserDataSource,
        private cryptCompareDataSource: CryptCompareDataSource,
        private encryptDataSource: EncryptDataSource
    ) { }

    private async verifyNewPassword(newPassword: string, realPassword: string): Promise<void> {
        if (newPassword.length < 6) {
            throw new Error("A nova senha deve ter no mínimo 6 caracteres!");
        }

        const validateNewPassword = await this.cryptCompareDataSource.compare(newPassword, realPassword);
        if (validateNewPassword) {
            throw new Error("A nova senha não pode ser igual a anterior!")
        }
    };

    private async verifyUsersPassword(password: string, realPassword: string): Promise<void> {
        const isValidPassword = await this.cryptCompareDataSource.compare(password, realPassword);
        if (!isValidPassword) {
            throw new Error("A senha está incorreta!")
        }
    };

    async execute(input: ChangeUsersPasswordUCInput): Promise<void> {
        const user = await this.userDataSource.getUserById(input.id);
        this.verifyUsersPassword(input.password, user.getPassword());
        this.verifyNewPassword(input.newPassword, user.getPassword());

        const newPassword = await this.encryptDataSource.encrypt(input.newPassword);
        await this.userDataSource.updatePassword(user.getId(), newPassword);
    }

}

export interface ChangeUsersPasswordUCInput {
    id: string,
    password: string,
    newPassword: string
}

