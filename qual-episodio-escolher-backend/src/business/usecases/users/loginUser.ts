import { AuthenticationDataSource } from './../../dataSource/authentiction/authenticationDataSource';
import { UserDataSource } from './../../dataSource/userDataSource';
import { CryptCompareDataSource } from '../../dataSource/cryptography/compareCryptography';

export class LogunUserUC {
    constructor(
        private userDataSource: UserDataSource,
        private cryptDataSource: CryptCompareDataSource,
        private authenticationDataSource: AuthenticationDataSource

    ) { }

    private async execute(input: LoginInput): Promise<LoginOutput> {
        const user = await this.userDataSource.getUserByEmail(input.email);
        const isValidPassword = await this.cryptDataSource.compare(input.password, user.getPassword())

        if (!isValidPassword) {
            throw new Error("O email ou senha não correspondem ao cadastrado no sistema.")
        }

        const createdToken = this.authenticationDataSource.createToken(user.getId())

        return { token: createdToken }
    }
}

export interface LoginInput {
    email: string,
    password: string
}

export interface LoginOutput {
    token: string
}