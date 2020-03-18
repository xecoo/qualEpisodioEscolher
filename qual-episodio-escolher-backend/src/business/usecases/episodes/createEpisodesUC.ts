import { IdGeneratorDataSource } from '../../dataSource/idGenerator/idGeneratorDataSource';
import { EpisodesDataSource } from '../../dataSource/episodesDataSource';
import { Episode } from '../../entities/episode';
export class CreateEpisodesUC {
    constructor(
        private createEpisodesDataSource: EpisodesDataSource,
        private idGeneratorDataSource: IdGeneratorDataSource

    ) { }

    private verifyInputs(input: CreateEpisodesUCInput) {
        if (!(input.temporada || input.titulo ||input.episodio || input.lancamento || input.sinopse || input.idSerie)) {
            throw new Error("Dica: Para criar um episódio, deve preencher todos os campos!")
        }
    }

    public async execute(input: CreateEpisodesUCInput): Promise<void> {
        this.verifyInputs(input);
        const newEpisode = new Episode(
            this.idGeneratorDataSource.generateId(),
            input.temporada,
            input.titulo,
            input.episodio,
            input.lancamento,
            input.sinopse,
            input.idSerie
        );

        await this.createEpisodesDataSource.createEpisode(newEpisode);
    }
}

export interface CreateEpisodesUCInput {
    temporada: number,
    titulo: string,
    episodio:number,
    lancamento: number,
    sinopse: string,
    idSerie:string
}