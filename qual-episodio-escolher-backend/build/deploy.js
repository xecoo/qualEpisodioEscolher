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
const router_1 = require("./presentation/router");
exports.handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pathParameter = event.pathParameters;
        if (!pathParameter) {
            throw new Error("Lembre de colocar o endpoint!");
        }
        const result = yield router_1.ApiRouter.handleRoute(pathParameter.proxy, {
            body: JSON.parse(event.body),
            headers: event.headers,
            queryParams: event.queryStringParameters
        });
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                result
            })
        };
        return response;
    }
    catch (err) {
        console.log("Err: ", err);
        const response = {
            statusCode: 400,
            body: JSON.stringify({
                errorMessage: err.message
            })
        };
        return response;
    }
});
