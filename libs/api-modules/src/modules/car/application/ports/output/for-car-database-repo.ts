import { CreateCarDTO } from "../../../domain";
import { CarEntity } from "../../../domain/car.entity";

export abstract class ForCarDatabaseRepo {

  abstract create(car: CreateCarDTO): Promise<CarEntity>
}
