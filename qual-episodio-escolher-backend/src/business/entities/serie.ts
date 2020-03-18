export class Serie {
    constructor(
        private id: string,
        private titulo: string,
        private lancamento: number,
        private sinopse: string,
        private categoria: string
    ) { }

    public getId(): string {
        return this.id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getLancamento(): number {
        return this.lancamento;
    }

    public getSinopse(): string {
        return this.sinopse;
    }

    public getCategoria(): string {
        return this.categoria;
    }

}