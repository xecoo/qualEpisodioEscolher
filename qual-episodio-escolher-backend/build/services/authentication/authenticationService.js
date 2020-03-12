"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
class AuthenticationService {
    getJWTSecretKey() {
        if (!process.env.JWT_SECRET) {
            throw new Error("Missing JWT secret key");
        }
        return process.env.JWT_SECRET;
    }
    createToken(userId) {
        const token = jwt.sign({ userId }, this.getJWTSecretKey(), { expiresIn: AuthenticationService.EXPIRES_IN });
        return token;
    }
    verifyToken(token) {
        const verifyToken = jwt.verify(token, this.getJWTSecretKey());
        return verifyToken.userId;
    }
    getUserTokenById(token) {
        const verifyToken = this.verifyToken(token);
        return verifyToken;
    }
}
exports.AuthenticationService = AuthenticationService;
AuthenticationService.EXPIRES_IN = "3h";
