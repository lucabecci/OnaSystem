import express, {Application} from 'express'
import morgan from 'morgan'
import config, { iConfig } from './config/config'

import Database from './database/database'
import IndexRouter from './routes/index.routes'
class App {
    private _app: Application
    public _config: iConfig
    private _database: Database
    private _indexRouter: IndexRouter
    constructor(){
        this._app = express()
        this._config = config
        this._database = new Database(this._config.MONGO_URI)
        this._indexRouter = new IndexRouter

        this.initDatabase()
        this.initConfig()
        this.initRoutes()
    }
    private initDatabase(): void{
        this._database.getConnection()
    }

    private initConfig(): void{
        this._app.use(express.json())
        this._app.use(express.urlencoded({extended: false}))
        this._app.use(morgan(this._config.MORGAN_WORKING))
    }

    private initRoutes(): void{
        this._app.use('/', this._indexRouter._router)
    }

    public run(): void{
        this._app.listen(this._config.PORT, () =>{
            console.log('Server on port:', this._config.PORT)
        })
    }
}

export default App