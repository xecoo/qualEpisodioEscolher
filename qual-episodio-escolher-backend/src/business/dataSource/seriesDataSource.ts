import { Serie } from "../entities/serie";

export interface SeriesDataSource {
    createSerie(series: Serie): Promise<void>;
    getAllSeries(): Promise<Serie[]>;
    verifySeriesExists(id: string): Promise<boolean>;
    getSeriesById(id: string): Promise<Serie>;
}