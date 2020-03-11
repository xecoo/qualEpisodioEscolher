import { IdGeneratorDataSource } from './../../dataSource/idGenerator/idGeneratorDataSource';
import { UserDataSource } from './../../dataSource/userDataSource';
import { EncryptDataSource } from '../../dataSource/cryptography/encryptDataSource';
import { AuthenticationDataSource } from '../../dataSource/authentiction/authenticationDataSource';
import { User } from '../../entities/user';

export class CreateUserUC {
    constructor(
        private createUserDataSource: UserDataSource,
        private idGeneratorDataSource: IdGeneratorDataSource,
        private encryptDataSource: EncryptDataSource,
        private authentication: AuthenticationDataSource
    ) { }

    private verifyInputs(input: CreateUserUCInput) {
        if (!(input.name || input.email || input.password)) {
            throw new Error("É necessário preencher todos os campos!")
        }
    }

    public async execute(input: CreateUserUCInput): Promise<CreateUserUCOutput> {
        this.verifyInputs(input);

        const encryptedPassword = await this.encryptDataSource.encrypt(input.password);
        const newUser = new User(
            this.idGeneratorDataSource.generateId(),
            input.name,
            input.email,
            encryptedPassword
        );

        await this.createUserDataSource.createUser(newUser);

        const newAuthentication = await this.authentication.createToken(newUser.getId());

        return {
            authentication: newAuthentication
        }
    }
}

export interface CreateUserUCInput {
    name: string,
    email: string,
    password: string
}

export interface CreateUserUCOutput {
    authentication: string
}