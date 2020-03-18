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
class GetAllEpisodesUC {
    constructor(episodeDataSource) {
        this.episodeDataSource = episodeDataSource;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const episode = yield this.episodeDataSource.getAllEpisodes();
            return {
                episodes: episode.map(episode => ({
                    id: episode.getId(),
                    temporada: episode.getTemporada(),
                    titulo: episode.getTitulo(),
                    episodio: episode.getEpisodio(),
                    lancamento: episode.getLancamento(),
                    sinopse: episode.getSinopse(),
                    idSerie: episode.getIdSerie()
                }))
            };
        });
    }
    lottery() {
        return __awaiter(this, void 0, void 0, function* () {
            const episode = yield this.episodeDataSource.getAllEpisodes();
            const lotteryEpisode = episode[Math.floor(Math.random() * episode.length)];
            return {
                episodes: {
                    id: lotteryEpisode.getId(),
                    temporada: lotteryEpisode.getTemporada(),
                    titulo: lotteryEpisode.getTitulo(),
                    episodio: lotteryEpisode.getEpisodio(),
                    lancamento: lotteryEpisode.getLancamento(),
                    sinopse: lotteryEpisode.getSinopse(),
                    idSerie: lotteryEpisode.getIdSerie()
                }
            };
        });
    }
}
exports.GetAllEpisodesUC = GetAllEpisodesUC;
