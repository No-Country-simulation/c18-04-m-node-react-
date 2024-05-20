export class CreateCarDTO{
  private constructor(
    public readonly brand: string,
    public readonly model: string,
    public readonly year: number
  ){}
  static create(object:{[key:string]:any}):[string?, CreateCarDTO?]{
    const { brand, model, year} = object

    if(!brand) return ['brand is required', undefined]
    if(!model) return ['model is required', undefined]
    if(!year) return ['year is required', undefined]

    return [undefined, new CreateCarDTO(brand, model, year)]
  }
}
