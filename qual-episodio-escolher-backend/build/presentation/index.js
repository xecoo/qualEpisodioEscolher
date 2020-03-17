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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./router");
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
app.post("/:route", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield router_1.ApiRouter.handleRoute(req.params.route, req);
        const response = {
            result
        };
        res.status(200).send(response);
    }
    catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
}));
app.get("/:route", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield router_1.ApiRouter.handleRoute(req.params.route, req);
        const response = {
            result
        };
        res.status(200).send(response);
    }
    catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
}));
app.put("/:route", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield router_1.ApiRouter.handleRoute(req.params.route, req);
        const response = {
            result
        };
        res.status(200).send(response);
    }
    catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
}));
app.delete("/:route", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield router_1.ApiRouter.handleRoute(req.params.route, req);
        const response = {
            result
        };
        res.status(200).send(response);
    }
    catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
}));
exports.default = app;
