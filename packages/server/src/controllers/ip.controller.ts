import {Request, Response} from 'express'
import { SaveIpCheckCamps } from '../helpers/IpChecks'
import Ip, {IIpSchema} from '../models/IP.schema'
class IpController {
    public async newSearch (req: Request, res: Response): Promise<Response>{
        const searchInformation = {
            ip: req.body.ip,
            country: req.body.country,
            city: req.body.city,
            lat: req.body.lat,
            lon: req.body.lon,
            isp: req.body.isp,
            org: req.body.org,
            userId: req.user
        }
        const campsChecked = SaveIpCheckCamps(
            searchInformation.ip,
            searchInformation.country,
            searchInformation.city,
            searchInformation.lat,
            searchInformation.lon,
            searchInformation.isp,
            searchInformation.org,
            searchInformation.userId
        )

        if (campsChecked) {
            return res.status(400).json({
                ok: false,
                message: 'Please send all camps'
            }) 
        }
        const search: IIpSchema = await new Ip(searchInformation)

        const searchSaved = await search.save()

        return res.status(200).json({
            ok: true,
            searchSaved
        })
    }

    public async getSearchs (req: Request, res:Response): Promise<Response>{
        const searchs: IIpSchema[] = await Ip.find({userId: req.user})

        if(searchs.length < 1){
            return res.status(400).json({
                ok: false,
                message: 'You dont have searchs'
            })
        }

        return res.status(200).json({
            ok: true,
            searchs
        })
    }
}

export default IpController