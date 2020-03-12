import { IdGeneratorDataSource } from '../../dataSource/idGenerator/idGeneratorDataSource';
import { SeriesDataSource } from "../../dataSource/seriesDataSource";
import { Serie } from '../../entities/serie';

export class CreateSeriesUC {
    constructor(
        private createSeriesDataSource: SeriesDataSource,
        private idGeneratorDataSource: IdGeneratorDataSource,
    ) { }

    private verifyInputs(input: CreateSeriesUCInput) {
        if (!(input.titulo || input.lancamento || input.sinopse || input.categoria )) {
            throw new Error("Dica: Para criar uma série, deve preencher todos os campos!")
        }
    }

    public async execute(input: CreateSeriesUCInput): Promise<void> {
        this.verifyInputs(input);
        const newSerie = new Serie(
            this.idGeneratorDataSource.generateId(),
            input.titulo,
            input.lancamento,
            input.sinopse,
            input.categoria
        );

        await this.createSeriesDataSource.createSerie(newSerie);
    }
}

export interface CreateSeriesUCInput {
    titulo: string,
    lancamento: number,
    sinopse: string,
    categoria: string[]
}