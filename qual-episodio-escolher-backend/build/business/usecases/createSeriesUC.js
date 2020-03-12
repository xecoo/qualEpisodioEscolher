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
const serie_1 = require("../entities/serie");
class CreateSeriesUC {
    constructor(createSeriesGateway, IdGeneratorGateway) {
        this.createSeriesGateway = createSeriesGateway;
        this.IdGeneratorGateway = IdGeneratorGateway;
    }
    verifyInputs(input) {
        if (!(input.titulo || input.lancamento || input.sinopse || input.categoria)) {
            throw new Error("Dica: Para criar uma série, deve preencher todos os campos!");
        }
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            this.verifyInputs(input);
            const newSerie = new serie_1.Serie(this.IdGeneratorGateway.generateId(), input.titulo, input.lancamento, input.sinopse, input.categoria);
            yield this.createSeriesGateway.createSerie(newSerie);
        });
    }
}
exports.CreateSeriesUC = CreateSeriesUC;
