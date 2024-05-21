import { CarEntity, CreateCarDTO } from "../../../domain";

export abstract class ForCarAxiosFecthRepo {
    abstract createCar(car:CreateCarDTO):Promise<CarEntity>
}