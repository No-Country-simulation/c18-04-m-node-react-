import express, { Express, Router } from "express"
import path from "path"
interface ApiOptionsInterface {
  port: number,
  routes: Router
}
export class ExpressService {
  public app: Express
  private readonly port: number
  private readonly routes: Router

  constructor(options: ApiOptionsInterface) {
    const { port, routes } = options
    this.app = express()
    this.port = port
    this.routes = Router()
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use('/assets', express.static(path.join(__dirname, 'assets')));
    this.port = port
    this.routes = routes
  }
  public start() {
    this.app.use(this.routes)
    this.app.listen(this.port, () => {
      console.log(`Express server listening on port ${this.port}`)
    })
  }
}
