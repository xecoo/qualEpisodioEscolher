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
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
app.use(cors_1.default({ origin: true }));
const generateRoute = (path, childPath, grandChildPath) => {
    let route = path;
    if (childPath) {
        route = `${route}/${childPath}`;
        if (grandChildPath) {
            route = `${route}/${grandChildPath}`;
        }
    }
    return route;
};
app.post("/:path/:childPath", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const path = generateRoute(req.params.path, req.params.childPath);
        const result = yield router_1.ApiRouter.handleRoute(path, req);
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
app.get("/:path/:childPath", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const path = generateRoute(req.params.path, req.params.childPath);
        const result = yield router_1.ApiRouter.handleRoute(path, req);
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
app.put("/:path/:childPath", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const path = generateRoute(req.params.path, req.params.childPath);
        const result = yield router_1.ApiRouter.handleRoute(path, req);
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
app.delete("/:path/:childPath", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const path = generateRoute(req.params.path, req.params.childPath);
        const result = yield router_1.ApiRouter.handleRoute(path, req);
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
app.post("/:path", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const path = generateRoute(req.params.path);
        const result = yield router_1.ApiRouter.handleRoute(path, req);
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
app.get("/:path", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const path = generateRoute(req.params.path);
        const result = yield router_1.ApiRouter.handleRoute(path, req);
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
app.put("/:path", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const path = generateRoute(req.params.path);
        const result = yield router_1.ApiRouter.handleRoute(path, req);
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
app.delete("/:path", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const path = generateRoute(req.params.path);
        const result = yield router_1.ApiRouter.handleRoute(path, req);
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
