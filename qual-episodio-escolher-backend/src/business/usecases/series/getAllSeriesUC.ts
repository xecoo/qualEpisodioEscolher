import { SeriesDataSource } from "../../dataSource/seriesDataSource";


export class GetAllSeriesUC {
    constructor(
        private seriesDataSource: SeriesDataSource
    ) { }

    public async execute(): Promise<GetAllSeriesUCOutput> {
        const serie = await this.seriesDataSource.getAllSeries();

        return {
            series: serie.map(serie => ({
                id: serie.getId(),
                titulo: serie.getTitulo(),
                lancamento: serie.getLancamento(),
                sinopse: serie.getSinopse(),
                categoria: serie.getCategoria()
            }))
        }
    }
}

interface GetAllSeriesUCOutput {
    series: GetAllSeriesUCDetails[]
}

interface GetAllSeriesUCDetails {
    id: string,
    titulo: string,
    lancamento: number,
    sinopse: string,
    categoria: string[]
}