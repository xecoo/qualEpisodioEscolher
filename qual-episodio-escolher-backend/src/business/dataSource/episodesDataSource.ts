import { Episode } from '../entities/episode';

export interface EpisodesDataSource {
    createEpisode(episode: Episode): Promise<void>;
    getAllEpisodes(): Promise<Episode[]>;
    verifyEpisodesExists(id: string): Promise<boolean>;
    getEpisodesById(id: string): Promise<Episode>;
    getAllEpisodesBySerie(idSerie: string): Promise<Episode[]>;
}