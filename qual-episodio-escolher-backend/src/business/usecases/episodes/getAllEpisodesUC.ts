import { EpisodesDataSource } from '../../dataSource/episodesDataSource';

export class GetAllEpisodesUC {
    constructor(
        private episodeDataSource: EpisodesDataSource
    ) { }

    public async execute(): Promise<GetAllEpisodesUCOutput> {
        const episode = await this.episodeDataSource.getAllEpisodes();

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
        }
    }

    public async getAllEpisodesBySerie(input:GetOneEpisodeByIdUCInput): Promise<GetLotterysEpisodeOutput> {
        const arrayEpisodes = await this.episodeDataSource.getAllEpisodesBySerie(input.idSerie);
        //const arrayEpisodes = await this.episodeDataSource.getAllEpisodes();
        const lotteryEpisode = arrayEpisodes[Math.floor(Math.random() * arrayEpisodes.length)];
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
        }
    }
}

export interface GetOneEpisodeByIdUCInput {
    idSerie:string
}

export interface GetAllEpisodesUCOutput {
    episodes: GetAllEpisodesUCDetails[]
}

export interface GetAllEpisodesUCDetails {
    id: string,
    temporada: number,
    titulo: string,
    episodio: number,
    lancamento: number,
    sinopse: string,
    idSerie: string
}

export interface GetLotterysEpisodeOutput {
    episodes: GetAllEpisodesUCDetails
}