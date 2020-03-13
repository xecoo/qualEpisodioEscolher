import { BaseDB } from "./base/baseDB";
import { Serie } from '../business/entities/serie';
import { SeriesDataSource } from '../business/dataSource/seriesDataSource';

const table: string = "qualEpisodioAssistir_series";

export class SerieDB extends BaseDB implements SeriesDataSource {

    public async createSerie(serie: Serie): Promise<void> {
        await this.connection.raw(`
            INSERT INTO 
                ${table} (
                    id,
                    titulo,
                    lancamento,
                    sinopse,
                    categoria
                )
            VALUES (
                "${serie.getId()}",
                "${serie.getTitulo()}",
                "${serie.getLancamento()}",
                "${serie.getSinopse()}",
                "${serie.getCategoria()}"
            );
        `)
    }

    private dbModelToSerie(dbModel: any): Serie {
        return new Serie(
            dbModel.id,
            dbModel.titulo,
            dbModel.lancamento,
            dbModel.sinopse,
            dbModel.categoria
        )
    }

    public async getAllSeries(): Promise<Serie[]> {
        const allSeries = await this.connection.raw(`
            SELECT * FROM ${table} ;
        `)
        return allSeries[0].map(this.dbModelToSerie);
    }

    public async verifySeriesExists(id: string): Promise<boolean> {
        const serie = await this.connection.raw(`
            SELECT * FROM ${table} WHERE id=${id};
        `);
        return serie
    }

    public async getSeriesById(id: string): Promise<Serie> {
        const serie = await this.connection.raw(`
            SELECT * FROM ${table} WHERE id=${id};
        `);
        const returnedSerie = this.dbModelToSerie(serie[0][0]);
        if (!returnedSerie) {
            throw new Error("Série não encontrada!");
        }
        return new Serie(
            returnedSerie.getId(),
            returnedSerie.getTitulo(),
            returnedSerie.getLancamento(),
            returnedSerie.getSinopse(),
            returnedSerie.getCategoria()
        )

    }

}
