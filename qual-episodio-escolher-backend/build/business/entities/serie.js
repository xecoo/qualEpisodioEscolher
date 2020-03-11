"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Serie {
    constructor(id, titulo, lancamento, sinopse, categoria) {
        this.id = id;
        this.titulo = titulo;
        this.lancamento = lancamento;
        this.sinopse = sinopse;
        this.categoria = categoria;
    }
    getId() {
        return this.id;
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
    getCategoria() {
        return this.categoria;
    }
}
exports.Serie = Serie;
