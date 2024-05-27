import { CreateCarDTO } from "../../../domain";
import { UserEntity } from "libs/api-modules/src/modules/user";
export abstract class ForCarDatabaseRepo {

  abstract create(car: CreateCarDTO): Promise<CarEntity>
}