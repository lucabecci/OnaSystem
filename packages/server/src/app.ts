import express, {Application} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import passport from 'passport'

import config, { iConfig } from './config/config'
import Database from './database/database'
import IndexRouter from './routes/index.routes'
import IpRouter from './routes/ip.routes'
import UserRouter from './routes/user.routes'
import passportAuth from './middlewares/Auth'
import SpeedRouter from './routes/speed.routes'
import AdminRouter from './routes/admin.routes'
class App {
    private _app: Application
    public _config: iConfig
    private _database: Database
    private _indexRouter: IndexRouter
    private _userRouter: UserRouter
    private _ipRouter: IpRouter
    private _speedRouter: SpeedRouter
    private _adminRouter: AdminRouter
    constructor(){
        this._app = express()
        this._config = config
        this._database = new Database(this._config.MONGO_URI)
        this._indexRouter = new IndexRouter
        this._userRouter = new UserRouter
        this._ipRouter = new IpRouter
        this._speedRouter = new SpeedRouter
        this._adminRouter = new AdminRouter

        this.initDatabase()
        this.initConfig()
        this.initRoutes()
    }
    private initDatabase(): void{
        this._database.getConnection()
    }

    private initConfig(): void{
        this._app.use(cors())
        this._app.use(helmet())
        this._app.use(express.json())
        this._app.use(express.urlencoded({extended: false}))
        this._app.use(morgan(this._config.MORGAN_WORKING))

        this._app.use(passport.initialize())
        passport.use(passportAuth)
    }

    private initRoutes(): void{
        this._app.use('/', this._indexRouter._router)
        this._app.use('/user', this._userRouter._router)
        this._app.use('/ip', this._ipRouter._router)
        this._app.use('/speed', this._speedRouter._router)
        this._app.use('/admin', this._adminRouter._router)
    }

    public run(): void{
        this._app.listen(this._config.PORT, () =>{
            console.log('Server on port:', this._config.PORT)
        })
    }
}

export default App