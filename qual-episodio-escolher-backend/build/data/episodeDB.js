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
const episode_1 = require("../business/entities/episode");
const table = "qualEpisodioAssistir_episodes";
class EpisodeDB extends baseDB_1.BaseDB {
    createEpisode(episode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
        INSERT INTO
            ${table} (
                id,
                temporada,
                titulo,
                lancamento,
                sinopse,
                idSerie,
            )
        VALUES (
            "${episode.getId()}",
            "${episode.getTemporada()}",
            "${episode.getTitulo()}",
            "${episode.getLancamento()}",
            "${episode.getSinopse()}",
            "${episode.getIdSerie()}",
        )
        `);
        });
    }
    dbModelToEpisode(dbModel) {
        return new episode_1.Episode(dbModel.id, dbModel.temporada, dbModel.Titulo, dbModel.lancamento, dbModel.sinopse, dbModel.idSerie);
    }
    getAllEpisodes() {
        return __awaiter(this, void 0, void 0, function* () {
            const allEpisodes = yield this.connection.raw(`
            SELECT * FROM ${table} ;
        `);
            return allEpisodes[0].map(this.dbModelToEpisode);
        });
    }
    verifyEpisodesExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const episode = yield this.connection.raw(`
            SELECT * FROM ${table} WHERE id=${id};
        `);
            return episode;
        });
    }
    getEpisodesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const episode = yield this.connection.raw(`
            SELECT * FROM ${table} WHERE id=${id};
        `);
            const returnedEpisode = this.dbModelToEpisode(episode[0][0]);
            if (!returnedEpisode) {
                throw new Error("Episódio não encontrada!");
            }
            return new episode_1.Episode(returnedEpisode.getId(), returnedEpisode.getTemporada(), returnedEpisode.getTitulo(), returnedEpisode.getLancamento(), returnedEpisode.getSinopse(), returnedEpisode.getIdSerie());
        });
    }
    getAllEpisodesBySerie(idSerie) {
        return __awaiter(this, void 0, void 0, function* () {
            const allEpisodesBySerie = yield this.connection.raw(`
            SELECT * FROM ${table} 
            WHERE idSerie=${idSerie};
        `);
            return allEpisodesBySerie[0].map(this.dbModelToEpisode);
        });
    }
}
exports.EpisodeDB = EpisodeDB;
