export abstract class ForCarApiControllerRepo {
  abstract create(req: any, res: any): any
  abstract handleError(error: unknown, res: any): any
}
