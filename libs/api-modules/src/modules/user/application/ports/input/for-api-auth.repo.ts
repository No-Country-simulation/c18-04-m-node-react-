export abstract class ForApiAuthRepo {
    abstract login(req:any, res:any):void
    abstract register(req:any, res:any):void
    abstract handleError(error: unknown, res: any): any
}