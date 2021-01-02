import jwt from 'jsonwebtoken'
import {NextFunction} from 'express'
import {MyRequest, MyResponse} from '../types/Types'

const authenticated = (
    req: MyRequest, 
    res: MyResponse, 
    next: NextFunction): any => {
    try{
        const token = req.header("x-auth-token")

        if(!token){
            return res.status(400).json({
                ok: false,
                message: 'Not authentication token, authetication denied'
            })
        }

        const verified: any = jwt.verify(token, process.env.JWT_TOKEN!)

        if(!verified){
            return res.status(400).json({
                ok: false,
                message: 'Token verification failed, authentication denied'
            })
        }

        req.user = verified.id!
        next()
    }

    catch(e){
        return res.status(500).json({
            ok: false,
            message: 'Internal server error'
        })
    }
}

export default authenticated