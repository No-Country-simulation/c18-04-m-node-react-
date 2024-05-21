import { CarRepository, CreateCarDTO, CustomError, ForCarApiControllerRepo } from "@c18-04-m-node-react/api-modules";
import { Response, Request } from "express"

export class CarApiControllerRepoImpl implements ForCarApiControllerRepo {
  constructor(private readonly carRepository: CarRepository) {

  }
  handleError(error: unknown, res: Response) {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: "Internal server error" })
    }

    return res.status(500).json({ error: "Internal server error" })
  }
  create = (req: Request, res: Response) => {
    const [error, createCar] = CreateCarDTO.create(req.body)
    if (error) {
      return res.status(400).json(error)
    }

    this.carRepository.create(createCar).then((car) => {
      return res.status(201).json({ car })
    }).catch((error) => {
      this.handleError(error, res)
    })
  }

}
