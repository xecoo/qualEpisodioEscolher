"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
class BaseDB {
    constructor() {
        this.connection = knex_1.default({
            client: "mysql",
            connection: {
                host: "ec2-34-228-216-172.compute-1.amazonaws.com",
                user: "root",
                password: process.env.SENHA_TCC,
                database: "qualEpisodioAssistir",
                ssl: true
            }
        });
    }
}
exports.BaseDB = BaseDB;
