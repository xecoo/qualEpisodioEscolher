"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class LogunUserUC {
    constructor(userDataSource, cryptDataSource, authenticationDataSource) {
        this.userDataSource = userDataSource;
        this.cryptDataSource = cryptDataSource;
        this.authenticationDataSource = authenticationDataSource;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userDataSource.getUserByEmail(input.email);
            const isValidPassword = yield this.cryptDataSource.compare(input.password, user.getPassword());
            if (!isValidPassword) {
                throw new Error("O email ou senha não correspondem ao cadastrado no sistema.");
            }
            const createdToken = this.authenticationDataSource.createToken(user.getId());
            return { token: createdToken };
        });
    }
}
exports.LogunUserUC = LogunUserUC;
