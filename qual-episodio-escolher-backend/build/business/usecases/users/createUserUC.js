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
const user_1 = require("../../entities/user");
class CreateUserUC {
    constructor(createUserDataSource, idGeneratorDataSource, encryptDataSource, authentication) {
        this.createUserDataSource = createUserDataSource;
        this.idGeneratorDataSource = idGeneratorDataSource;
        this.encryptDataSource = encryptDataSource;
        this.authentication = authentication;
    }
    verifyInputs(input) {
        if (!(input.name || input.email || input.password)) {
            throw new Error("É necessário preencher todos os campos!");
        }
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            this.verifyInputs(input);
            const encryptedPassword = yield this.encryptDataSource.encrypt(input.password);
            const newUser = new user_1.User(this.idGeneratorDataSource.generateId(), input.name, input.email, encryptedPassword);
            yield this.createUserDataSource.createUser(newUser);
            const newAuthentication = yield this.authentication.createToken(newUser.getId());
            return {
                authentication: newAuthentication
            };
        });
    }
}
exports.CreateUserUC = CreateUserUC;
