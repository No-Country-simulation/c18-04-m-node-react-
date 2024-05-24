import { CarEntity, CreateCarDTO, CustomError, ForCarDatabaseRepo } from "@c18-04-m-node-react/api-modules";
import { CarModel } from './'
import { CarMappers } from "../mappers";
export class CarMongoDBRepoImpl implements ForCarDatabaseRepo {
  async create(car: CreateCarDTO): Promise<CarEntity> {
    try {

      const existingCar = await CarModel.find({ model: car.model })

      if (!existingCar) throw CustomError.badRequest('Car already exists')

      const newCar = await CarModel.create(car)

      await newCar.save()

      return CarMappers.carModelToEntity(newCar)

    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw CustomError.internalServerError
    }
  }
}
