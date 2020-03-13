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

const app = express()
app.use(express.json());

app.post("/series/createseries", async (req: Request, res: Response) => {
    try {
        const serie: CreateSeriesUCInput = {
            titulo: req.body.titulo,
            lancamento: req.body.lancamento,
            sinopse: req.body.sinopse,
            categoria: req.body.categoria
        }

        const createSeriesUC = new CreateSeriesUC(
            new SerieDB(),
            new GenerateId
        )

        const result = await createSeriesUC.execute(serie)

        res.send({
            status: 200,
            result,
            message: `${serie.titulo} foi criada com sucesso!`
        })
    } catch (e) {
        res.status(404).send(e.message)
    }
})

app.get("/series/getallseries", async (req: Request, res: Response) => {
    try {
        const getAllSeriesUC = new GetAllSeriesUC(new SerieDB());
        const result = await getAllSeriesUC.execute();
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message)
    }
})

app.post("/episodes/createepisodes", async (req: Request, res: Response) => {
    try {
        const episode: CreateEpisodesUCInput = {
            temporada: req.body.temporada,
            titulo: req.body.titulo,
            episodio: req.body.episodio,
            lancamento: req.body.lancamento,
            sinopse: req.body.sinopse,
            idSerie: req.body.idSerie
        }

        const createEpisodesUC = new CreateEpisodesUC(
            new EpisodeDB,
            new GenerateId
        )

        const result = await createEpisodesUC.execute(episode)

        res.send({
            status: 200,
            result,
            message: `${episode.titulo} da série ${episode.idSerie} foi criada com sucesso!`
        })

    } catch (e) {
        res.status(404).send(e.message)
    }
})

app.get("/episodes/getallepisodes", async (req: Request, res: Response) => {
    try {
        const getAllEpisodesUC = new GetAllEpisodesUC(new EpisodeDB());
        const result = await getAllEpisodesUC.execute();
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message)
    }
})

app.get("/lottery", async (req: Request, res: Response) => {
    try {
        const getAllEpisodesUC = new GetAllEpisodesUC(new EpisodeDB());
        const result = await getAllEpisodesUC.lottery();
        res.status(200).send(result)
    } catch (e) {
        res.status(404).send(e.message)
    }
})


export default app;