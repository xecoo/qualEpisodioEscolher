import { UserDataSource } from './../../dataSource/userDataSource';

export class GetAllUsersUC {
    constructor(
        private userDataSource: UserDataSource
    ) { }

    public async execute(): Promise<GetAllUsersUCOutput> {
        const user = await this.userDataSource.getAllUsers();

        return {
            users: user.map(user => ({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail()
            }))
        }
    }
}

export interface GetAllUsersUCOutput {
    users: GetAllUsersUCDetails[]
}

export interface GetAllUsersUCDetails {
    id: string,
    name: string,
    email: string
}