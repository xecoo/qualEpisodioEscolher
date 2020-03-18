import { Episode } from './../business/entities/episode';
import { EpisodesDataSource } from './../business/dataSource/episodesDataSource';
import { BaseDB } from "./base/baseDB";

const table: string = "qualEpisodioAssistir_episodes";

export class EpisodeDB extends BaseDB implements EpisodesDataSource {


    // public async getLotteryEpisodeById(idSerie: string): Promise<Episode[]> {
    //     const allEpisodes = await this.connection.raw(`
    //         SELECT * FROM ${table} WHERE idSerie="${idSerie}";
    //     `)
    //     return allEpisodes[0].map(this.dbModelToEpisode);
    // }

    public async createEpisode(episode: Episode): Promise<void> {
        await this.connection.raw(`
        INSERT INTO
            ${table} (
                id,
                temporada,
                titulo,
                episodio,
                lancamento,
                sinopse,
                idSerie
            )
        VALUES (
            "${episode.getId()}",
            ${episode.getTemporada()},
            "${episode.getTitulo()}",
            ${episode.getEpisodio()},
            ${episode.getLancamento()},
            "${episode.getSinopse()}",
            "${episode.getIdSerie()}"
        )
        `)
    }

    private dbModelToEpisode(dbModel: any): Episode {
        return new Episode(
            dbModel.id,
            dbModel.temporada,
            dbModel.titulo,
            dbModel.episodio,
            dbModel.lancamento,
            dbModel.sinopse,
            dbModel.idSerie
        )
    }

    public async getAllEpisodes(): Promise<Episode[]> {
        const allEpisodes = await this.connection.raw(`
            SELECT * FROM ${table} 
            ORDER BY temporada ASC, episodio ASC ;
        `);
        return allEpisodes[0].map(this.dbModelToEpisode);
    }

    public async verifyEpisodesExists(id: string): Promise<boolean> {
        const episode = await this.connection.raw(`
            SELECT * FROM ${table} WHERE id="${id}";
        `);
        return episode
    }

    public async getEpisodesById(id: string): Promise<Episode> {
        const episode = await this.connection.raw(`
            SELECT * FROM ${table} WHERE id="${id}";
        `);
        const returnedEpisode = this.dbModelToEpisode(episode[0][0]);

        if (!returnedEpisode) {
            throw new Error("Episódio não encontrada!");
        }

        return new Episode(
            returnedEpisode.getId(),
            returnedEpisode.getTemporada(),
            returnedEpisode.getTitulo(),
            returnedEpisode.getEpisodio(),
            returnedEpisode.getLancamento(),
            returnedEpisode.getSinopse(),
            returnedEpisode.getIdSerie()
        )

    }

    public async getAllEpisodesBySerie(idSerie: string): Promise<Episode[]> {
        const allEpisodesBySerie = await this.connection.raw(`
            SELECT * FROM ${table} 
            WHERE idSerie="${idSerie}";
        `);

        return allEpisodesBySerie[0].map(this.dbModelToEpisode);

    }

}