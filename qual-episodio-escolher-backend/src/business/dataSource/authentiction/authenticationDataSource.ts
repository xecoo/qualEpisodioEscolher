export interface AuthenticationDataSource {
    createToken(id:string):string;
}