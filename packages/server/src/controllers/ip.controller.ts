import {Response} from 'express'
import { MyRequest } from 'src/types/Types'

class IpController {
    public test(req: MyRequest, res: Response){
        console.log(req.user)
        return res.status(400).json({
            ok: true,
            message: 'Auth middleware is working'
        })
    }
}

export default IpController