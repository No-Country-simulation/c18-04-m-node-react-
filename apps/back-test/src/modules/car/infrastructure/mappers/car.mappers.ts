import { CarEntity, CustomError } from "@c18-04-m-node-react/api-modules"

export class CarMappers {
  static carModelToEntity(object: { [key: string]: any }) {
    const { _id, id, brand, model, year } = object

    if (!id || !_id) throw CustomError.badRequest('id not found')
    if (!brand) throw CustomError.badRequest('brand not found')
    if (!model) throw CustomError.badRequest('model not found')
    if (!year) throw CustomError.badRequest('year not found')

    return new CarEntity(id || _id, brand, model, year)
  }
}
