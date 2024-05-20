import { CarEntity } from "../car.entity";

export abstract class CarRepository {
  abstract create(car: CarEntity): Promise<CarEntity>
}
