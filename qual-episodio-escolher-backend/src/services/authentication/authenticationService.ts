import { AuthenticationDataSource } from './../../business/dataSource/authentiction/authenticationDataSource';
import * as jwt from 'jsonwebtoken';

export class AuthenticationService implements AuthenticationDataSource {
    private static EXPIRES_IN = "3h"

    private getJWTSecretKey(): string {
        if (!process.env.JWT_SECRET) {
            throw new Error("Missing JWT secret key")
        }

        return process.env.JWT_SECRET
    }

    createToken(userId: string): string {
        const token = jwt.sign(
            { userId },
            this.getJWTSecretKey(),
            { expiresIn: AuthenticationService.EXPIRES_IN }
        )

        return token
    }

    verifyToken(token: string): string {
        const verifyToken = jwt.verify(
            token,
            this.getJWTSecretKey()
        ) as JwtData;
        return verifyToken.userId
    }

    getUserTokenById(token: string): string {
        const verifyToken = this.verifyToken(token);
        return verifyToken;
    }

}

interface JwtData {
    userId: string
    iat: number
    exp: number
}