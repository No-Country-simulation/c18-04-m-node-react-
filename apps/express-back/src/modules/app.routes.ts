import { Router } from 'express'

export class AppRoutes {
  static get routes(): Router {
    const router = Router()

    router.use('/api', (req, res) => {
      res.send('Hello World!')
    })
    return router
  }
}
