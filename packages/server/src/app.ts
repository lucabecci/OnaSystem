import express, {Application} from 'express'
import morgan from 'morgan'
import config, { iConfig } from './config/config'

import Database from './database/database'
class App {
    private _app: Application
    public _config: iConfig
    private _database: Database
    constructor(){
        this._app = express()
        this._config = config
        this._database = new Database(this._config.MONGO_URI)

        this.initDatabase()
        this.initConfig()
    }
    private initDatabase(){
        this._database.getConnection()
    }

    private initConfig() {
        this._app.use(express.json())
        this._app.use(express.urlencoded({extended: false}))
        this._app.use(morgan(this._config.MORGAN_WORKING))
    }

    public run(){
        this._app.listen(this._config.PORT, () =>{
            console.log('Server on port:', this._config.PORT)
        })
    }
}

export default App