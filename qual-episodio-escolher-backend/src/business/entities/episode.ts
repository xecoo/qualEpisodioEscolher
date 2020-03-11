export class Episode {
    constructor(
        private id: string,
        private temporada: number,
        private titulo: string,
        private lancamento: number,
        private sinopse: string,
        private idSerie:string
    ) { }

    public getId(): string {
        return this.id;
    }

    public getTemporada(): number {
        return this.temporada;
    }

    public getTitulo(): string {
        return this.titulo
    }

    public getLancamento(): number {
        return this.lancamento
    }

    public getSinopse(): string {
        return this.sinopse
    }

    public getIdSerie():string {
        return this.idSerie
    }
}