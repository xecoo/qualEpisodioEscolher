"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class GenerateId {
    generateId() {
        return uuid_1.v4();
    }
}
exports.GenerateId = GenerateId;
