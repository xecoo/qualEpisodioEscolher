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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const serieDB_1 = require("../data/serieDB");
const getAllSeriesUC_1 = require("../business/usecases/series/getAllSeriesUC");
const createSeriesUC_1 = require("../business/usecases/series/createSeriesUC");
const express_1 = __importStar(require("express"));
const generateId_1 = require("../services/generateId/generateId");
const episodeDB_1 = require("../data/episodeDB");
const createEpisodesUC_1 = require("../business/usecases/episodes/createEpisodesUC");
const app = express_1.default();
app.use(express_1.default.json());
app.post("/series/createSeries", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serie = {
            titulo: req.body.titulo,
            lancamento: req.body.lancamento,
            sinopse: req.body.sinopse,
            categoria: req.body.categoria
        };
        const createSeriesUC = new createSeriesUC_1.CreateSeriesUC(new serieDB_1.SerieDB(), new generateId_1.GenerateId);
        const result = {
            authentication: yield createSeriesUC.execute(serie)
        };
        return {
            status: 200,
            result,
            message: `${serie.titulo} foi criada com sucesso!`
        };
    }
    catch (e) {
        express_1.response.status(404).send(e.message);
    }
}));
app.get("/series/getallseries", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllSeriesUC = new getAllSeriesUC_1.GetAllSeriesUC(new serieDB_1.SerieDB());
        const result = yield getAllSeriesUC.execute();
        res.status(200).send(result);
    }
    catch (e) {
        res.status(404).send(e.message);
    }
}));
app.post("/episodes/createEpisodes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const episode = {
            temporada: req.body.temporada,
            titulo: req.body.titulo,
            lancamento: req.body.lancamento,
            sinopse: req.body.sinopse,
            idSerie: req.body.idSerie
        };
        const createEpisodesUC = new createEpisodesUC_1.CreateEpisodesUC(new episodeDB_1.EpisodeDB, new generateId_1.GenerateId);
        const result = {
            authentication: yield createEpisodesUC.execute(episode)
        };
        return {
            status: 200,
            result,
            message: `${episode.titulo} da série ${episode.idSerie} foi criada com sucesso!`
        };
    }
    catch (e) {
        res.status(404).send(e.message);
    }
}));
exports.default = app;
