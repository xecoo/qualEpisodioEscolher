import { IdGeneratorDataSource } from "../../business/dataSource/idGenerator/idGeneratorDataSource";
import { v4 } from 'uuid';

export class GenerateId implements IdGeneratorDataSource {
    public generateId(): string {
        return v4()
    }
}