import { CarEntity } from "../../../domain/car.entity";

export abstract class ForCarDatabaseRepo{

  abstract create(car: CarEntity): Promise<CarEntity>
}
