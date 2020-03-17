import { SerieDB } from '../data/serieDB';
import { GetAllSeriesUC } from '../business/usecases/series/getAllSeriesUC';
import {
    CreateSeriesUC,
    CreateSeriesUCInput
} from '../business/usecases/series/createSeriesUC';
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
                };

                const createSeriesUC = new CreateSeriesUC(
                    new SerieDB(),
                    new GenerateId
                );

                const resultCreateSeries = await createSeriesUC.execute(serie);

                return {
                    status: 200,
                    resultCreateSeries,
                    message: `${serie.titulo} foi criada com sucesso!`
                };

            case '/series/getallseries':

                const getAllSeriesUC = new GetAllSeriesUC(new SerieDB());
                const resultGetAllSeries = await getAllSeriesUC.execute();
                return {
                    resultGetAllSeries
                };

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

                const resultCreateEpisodes = await createEpisodesUC.execute(episode);

                return {
                    status: 200,
                    resultCreateEpisodes,
                    message: `${episode.titulo} da série ${episode.idSerie} foi criada com sucesso!`
                };

            case '/episodes/getallepisodes':

                const newGetAllEpisodesUC = new GetAllEpisodesUC(new EpisodeDB());
                const resultGetAllEpisodes = await newGetAllEpisodesUC.execute();
                return {
                    resultGetAllEpisodes
                };

            case '/lottery':

                const getLotterysEpisode = new GetAllEpisodesUC(new EpisodeDB());
                const resultLottery = await getLotterysEpisode.lottery();
                return {
                    resultLottery
                };

            case '/testedeendpoint':
                
                return {
                    mensagem : "Esse teste está funcionando!"
                };

            default:
                new Error("Rota não existe!");
                break;
        }
    }
}