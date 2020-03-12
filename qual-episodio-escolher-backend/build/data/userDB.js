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
const baseDB_1 = require("./base/baseDB");
const user_1 = require("../business/entities/user");
const table = "qualEpisodioAssistir_users";
class UserDB extends baseDB_1.BaseDB {
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.connection.raw(`
            SELECT * FROM ${table} WHERE id="${id}";
        `);
            return this.dbModelToUser(user[0]);
        });
    }
    updatePassword(id, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
            UPDATE ${table} SET password="${newPassword}" WHERE="${id}";
        `);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.connection.raw(`
            SELECT * FROM ${table} WHERE email="${email}";
        `);
            return this.dbModelToUser(user[0][0]);
        });
    }
    verifyUserExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.connection.raw(`
            SELECT * FROM ${table} WHERE id="${id}";
        `);
            return user;
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
            INSERT INTO 
                ${table} (
                    id,
                    name,
                    email,
                    password
                )
            VALUES(
                "${user.getId()}",
                "${user.getName()}",
                "${user.getEmail()}",
                "${user.getPassword()}",
            );
        `);
        });
    }
    dbModelToUser(dbModel) {
        return new user_1.User(dbModel.id, dbModel.name, dbModel.email, dbModel.password);
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const allUsers = yield this.connection.raw(`
            SELECT * FROM ${table};
        `);
            return allUsers[0].map(this.dbModelToUser);
        });
    }
}
exports.UserDB = UserDB;
