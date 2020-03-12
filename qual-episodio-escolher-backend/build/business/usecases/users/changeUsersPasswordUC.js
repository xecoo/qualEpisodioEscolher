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
class ChangeUsersPasswordUC {
    constructor(userDataSource, cryptCompareDataSource, encryptDataSource) {
        this.userDataSource = userDataSource;
        this.cryptCompareDataSource = cryptCompareDataSource;
        this.encryptDataSource = encryptDataSource;
    }
    verifyNewPassword(newPassword, realPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            if (newPassword.length < 6) {
                throw new Error("A nova senha deve ter no mínimo 6 caracteres!");
            }
            const validateNewPassword = yield this.cryptCompareDataSource.compare(newPassword, realPassword);
            if (validateNewPassword) {
                throw new Error("A nova senha não pode ser igual a anterior!");
            }
        });
    }
    ;
    verifyUsersPassword(password, realPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const isValidPassword = yield this.cryptCompareDataSource.compare(password, realPassword);
            if (!isValidPassword) {
                throw new Error("A senha está incorreta!");
            }
        });
    }
    ;
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userDataSource.getUserById(input.id);
            this.verifyUsersPassword(input.password, user.getPassword());
            this.verifyNewPassword(input.newPassword, user.getPassword());
            const newPassword = yield this.encryptDataSource.encrypt(input.newPassword);
            yield this.userDataSource.updatePassword(user.getId(), newPassword);
        });
    }
}
exports.ChangeUsersPasswordUC = ChangeUsersPasswordUC;
