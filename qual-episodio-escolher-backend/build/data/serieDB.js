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
const serie_1 = require("../business/entities/serie");
const table = "qualEpisodioEscolher_series";
class SerieDB extends baseDB_1.BaseDB {
    createSerie(serie) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
            INSERT INTO 
                ${table} (
                    id,
                    titulo,
                    lancamento,
                    sinopse,
                    categoria
                )
            VALUES (
                "${serie.getId()}",
                "${serie.getTitulo()}",
                "${serie.getLancamento()}",
                "${serie.getSinopse()}",
                "${serie.getCategoria()}",
            );
        `);
        });
    }
    dbModelToSerie(dbModel) {
        return new serie_1.Serie(dbModel.id, dbModel.titulo, dbModel.lancamento, dbModel.sinopse, dbModel.categoria);
    }
    getAllSeries() {
        return __awaiter(this, void 0, void 0, function* () {
            const allSeries = yield this.connection.raw(`
            SELECT * FROM ${table} ;
        `);
            return allSeries[0].map(this.dbModelToSerie);
        });
    }
    verifySeriesExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const serie = yield this.connection.raw(`
            SELECT * FROM ${table} WHERE id=${id};
        `);
            return serie;
        });
    }
    getSeriesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const serie = yield this.connection.raw(`
            SELECT * FROM ${table} WHERE id=${id};
        `);
            const returnedSerie = this.dbModelToSerie(serie[0][0]);
            if (!returnedSerie) {
                throw new Error("Série não encontrada!");
            }
            return new serie_1.Serie(returnedSerie.getId(), returnedSerie.getTitulo(), returnedSerie.getLancamento(), returnedSerie.getSinopse(), returnedSerie.getCategoria());
        });
    }
}
exports.SerieDB = SerieDB;
