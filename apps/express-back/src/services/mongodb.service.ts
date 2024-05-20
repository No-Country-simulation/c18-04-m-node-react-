import mongoose from 'mongoose'

interface MongoDBOptionsInterface{
  host: string
  port: number
  username: string
  password: string
  databaseName: string
}

export class MongoDBService{
  private readonly host:string
  private readonly port:number
  private readonly user:string
  private readonly password:string
  private readonly databaseName:string

  constructor(options: MongoDBOptionsInterface){
    this.host = options.host
    this.port = options.port
    this.user = options.username
    this.password = options.password
    this.databaseName = options.databaseName
  }

  public async connect(){
    await mongoose.connect(`mongodb://${this.host}:${this.port}`, {
      authSource: 'admin',
      user: this.user,
      pass: this.password,
      dbName: this.databaseName
    }).then(() => {
        console.log('✅ MongoDB connected 🔌📡🚀...');
    }).catch((error) => {
        console.group('❌ MongoDB connection error');
        console.log(error);
        console.groupEnd();
    })
  }
}
