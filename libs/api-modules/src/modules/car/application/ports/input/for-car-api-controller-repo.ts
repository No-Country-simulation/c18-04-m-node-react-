export  abstract class ForCarApiControllerRepo<T,R> {
  abstract create(req:T,res:R):any
}
