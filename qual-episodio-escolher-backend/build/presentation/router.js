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
const serieDB_1 = require("../data/serieDB");
const getAllSeriesUC_1 = require("../business/usecases/series/getAllSeriesUC");
const createSeriesUC_1 = require("../business/usecases/series/createSeriesUC");
const generateId_1 = require("../services/generateId/generateId");
const episodeDB_1 = require("../data/episodeDB");
const createEpisodesUC_1 = require("../business/usecases/episodes/createEpisodesUC");
const getAllEpisodesUC_1 = require("../business/usecases/episodes/getAllEpisodesUC");
class ApiRouter {
    static handleRoute(path, event) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (path) {
                case 'series/createseries':
                    const serie = {
                        titulo: event.body.titulo,
                        lancamento: event.body.lancamento,
                        sinopse: event.body.sinopse,
                        categoria: event.body.categoria
                    };
                    const createSeriesUC = new createSeriesUC_1.CreateSeriesUC(new serieDB_1.SerieDB(), new generateId_1.GenerateId);
                    const resultCreateSeries = yield createSeriesUC.execute(serie);
                    return {
                        status: 200,
                        resultCreateSeries,
                        message: `${serie.titulo} foi criada com sucesso!`
                    };
                case 'series/getallseries':
                    const getAllSeriesUC = new getAllSeriesUC_1.GetAllSeriesUC(new serieDB_1.SerieDB());
                    const resultGetAllSeries = yield getAllSeriesUC.execute();
                    return resultGetAllSeries;
                case 'episodes/createepisodes':
                    const episode = {
                        temporada: event.body.temporada,
                        titulo: event.body.titulo,
                        episodio: event.body.episodio,
                        lancamento: event.body.lancamento,
                        sinopse: event.body.sinopse,
                        idSerie: event.body.idSerie
                    };
                    const createEpisodesUC = new createEpisodesUC_1.CreateEpisodesUC(new episodeDB_1.EpisodeDB, new generateId_1.GenerateId);
                    const resultCreateEpisodes = yield createEpisodesUC.execute(episode);
                    return {
                        status: 200,
                        resultCreateEpisodes,
                        message: `${episode.titulo} da série ${episode.idSerie} foi criada com sucesso!`
                    };
                case 'episodes/getallepisodes':
                    const newGetAllEpisodesUC = new getAllEpisodesUC_1.GetAllEpisodesUC(new episodeDB_1.EpisodeDB());
                    const resultGetAllEpisodes = yield newGetAllEpisodesUC.execute();
                    return resultGetAllEpisodes;
                case 'lottery':
                    const idSerie = {
                        idSerie: event.body.idSerie
                    };
                    const getLotterysEpisode = new getAllEpisodesUC_1.GetAllEpisodesUC(new episodeDB_1.EpisodeDB());
                    const resultLottery = yield getLotterysEpisode.getAllEpisodesBySerie(idSerie);
                    return resultLottery;
                case 'testedeendpoint':
                    const mensagem = "Esse teste está funcionando!";
                    return mensagem;
                default:
                    new Error("Rota não existe!");
                    break;
            }
        });
    }
}
exports.ApiRouter = ApiRouter;
