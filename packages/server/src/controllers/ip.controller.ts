import {Request, Response} from 'express'

class IpController {
    public test(req: Request, res: Response){
        console.log(req.user)
        return res.status(400).json({
            ok: true,
            message: 'Auth middleware is working'
        })
    }
}

export default IpController