import { CarRepository, CarEntity, ForCarDatabaseRepo, CreateCarDTO } from '@c18-04-m-node-react/api-modules'
export class CarRepoImpl implements CarRepository {
  constructor(private readonly datasource: ForCarDatabaseRepo) {

  }
  async create(car: CreateCarDTO): Promise<CarEntity | null> {
    return await this.datasource.create(car)
  }
}
