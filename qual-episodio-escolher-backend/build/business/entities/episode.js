"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Episode {
    constructor(id, temporada, titulo, lancamento, sinopse, idSerie) {
        this.id = id;
        this.temporada = temporada;
        this.titulo = titulo;
        this.lancamento = lancamento;
        this.sinopse = sinopse;
        this.idSerie = idSerie;
    }
    getId() {
        return this.id;
    }
    getTemporada() {
        return this.temporada;
    }
    getTitulo() {
        return this.titulo;
    }
    getLancamento() {
        return this.lancamento;
    }
    getSinopse() {
        return this.sinopse;
    }
    getIdSerie() {
        return this.idSerie;
    }
}
exports.Episode = Episode;
