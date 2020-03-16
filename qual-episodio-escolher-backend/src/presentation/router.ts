import { SerieDB } from '../data/serieDB';
import { GetAllSeriesUC } from '../business/usecases/series/getAllSeriesUC';
import {
    CreateSeriesUC,
    CreateSeriesUCInput
} from '../business/usecases/series/createSeriesUC';
import express, { Request, Response, response } from 'express'

import { GenerateId } from '../services/generateId/generateId';
import { EpisodeDB } from '../data/episodeDB';
import {
    CreateEpisodesUCInput,
    CreateEpisodesUC
} from '../business/usecases/episodes/createEpisodesUC';
import { GetAllEpisodesUC } from '../business/usecases/episodes/getAllEpisodesUC';

export class ApiRouter {
    public static async handleRoute(path: string, event: any): Promise<any> {
        
        switch (path) {
            case '/series/createseries':

                const serie: CreateSeriesUCInput = {
                    titulo: event.body.titulo,
                    lancamento: event.body.lancamento,
                    sinopse: event.body.sinopse,
                    categoria: event.body.categoria
                }

                const createSeriesUC = new CreateSeriesUC(
                    new SerieDB(),
                    new GenerateId
                )

                const result = await createSeriesUC.execute(serie)

                return {
                    status: 200,
                    result,
                    message: `${serie.titulo} foi criada com sucesso!`
                }
            case '/series/getallseries':

                const getAllSeriesUC = new GetAllSeriesUC(new SerieDB());
                const result = await getAllSeriesUC.execute();
                return {
                    result
                }
            case '/episodes/createepisodes':

                const episode: CreateEpisodesUCInput = {
                    temporada: event.body.temporada,
                    titulo: event.body.titulo,
                    episodio: event.body.episodio,
                    lancamento: event.body.lancamento,
                    sinopse: event.body.sinopse,
                    idSerie: event.body.idSerie
                };

                const createEpisodesUC = new CreateEpisodesUC(
                    new EpisodeDB,
                    new GenerateId
                );

                const result = await createEpisodesUC.execute(episode);

                return {
                    status: 200,
                    result,
                    message: `${episode.titulo} da série ${episode.idSerie} foi criada com sucesso!`
                }

            case '/episodes/getallepisodes':

                const getAllEpisodesUC = new GetAllEpisodesUC(new EpisodeDB());
                const result = await getAllEpisodesUC.execute();
                res.status(200).send(result);

            case '/lottery':

                const getAllEpisodesUC = new GetAllEpisodesUC(new EpisodeDB());
                const result = await getAllEpisodesUC.lottery();
                res.status(200).send(result)

            default:
                new Error("Rota não existe!");
                break;
        }
    }
}
