import { EpisodesDataSource } from '../../dataSource/episodesDataSource';


export class GetAllEpisodesUC {
    constructor(
        private episodesGateway: EpisodesDataSource
    ) { }

    public async execute(): Promise<GetAllEpisodesUCOutput> {
        const episode = await this.episodesGateway.getAllEpisodes();

        return {
            episodes: episode.map(episode => ({
                id: episode.getId(),
                temporada: episode.getTemporada(),
                titulo: episode.getTitulo(),
                lancamento: episode.getLancamento(),
                sinopse: episode.getSinopse(),
                idSerie: episode.getIdSerie()
            }))
        }

    }
}

interface GetAllEpisodesUCOutput {
    episodes: GetAllEpisodesUCDetails[]
}

interface GetAllEpisodesUCDetails {
    id: string,
    temporada: number,
    titulo: string,
    lancamento: number,
    sinopse: string,
    idSerie: string
}