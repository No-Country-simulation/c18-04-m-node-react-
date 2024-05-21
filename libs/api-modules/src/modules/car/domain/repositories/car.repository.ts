import { CarEntity } from "../car.entity";
import { CreateCarDTO } from "../dto";

export abstract class CarRepository {
  abstract create(car: CreateCarDTO): Promise<CarEntity>
}
