export class CarEntity{

  constructor(
    public readonly id: string,
    public readonly brand: string,
    public readonly model: string,
    public readonly year: number
  ) {
  }
}
