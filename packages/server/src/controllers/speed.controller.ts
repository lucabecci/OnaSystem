import {Request, Response} from 'express'
import { SaveSpeedCheckCamps } from '../helpers/SpeedChecks'
import Speed, { ISpeed } from '../models/Speed.schema'




class SpeedController {
    public async createSpeed(req: Request, res: Response): Promise<Response>{
        const speedinformation = {
            summary: req.body.summary,
            value: req.body.value,
            userId: req.user
        }

        const campsChecked:boolean = SaveSpeedCheckCamps(
            speedinformation.summary, 
            speedinformation.value,
            req.user
        )

        if(campsChecked){
            return res.status(400).json({
                ok: false,
                message: 'Please send all camps'
            })
        }

        try{
            const newSpeed: ISpeed = await new Speed(speedinformation)

            const speedSaved: ISpeed = await newSpeed.save()
            return res.status(200).json({
                ok: true,
                speedSaved
            })
        }
        catch(e){
            return res.status(500).json({
                ok: false,
                message: 'Internal server error'
            })
        }

    }

    public async getSpeeds(req: Request, res: Response): Promise<Response>{
        try{
            const speeds: ISpeed[] = await Speed.find({userId: req.user})

            if(speeds.length < 1){
                return res.status(400).json({
                    ok: false,
                    message: 'You dont have anything in your speed history '
                })
            }
            return res.status(200).json({
                ok: true,
                speeds
            })
        }
        catch(e){
            return res.status(500).json({
                ok: false,
                message: 'Internal server error'
            })
        }
    }

    public async getSpeed(req: Request, res: Response): Promise<Response>{
        try{
            const id: string = req.params.id
            if(id.length < 20){
                return res.status(400).json({
                    ok: false,
                    message: 'ID short, please send a valid ID'
                })
            }
            try{
                const speed: ISpeed = await Speed.findById(id)
                return res.status(200).json({
                    ok: true,
                    speed
                })
            }
            catch(e){
                return res.status(400).json({
                    ok: false,
                    message: 'ID not found, please send a valid ID'
                })
            }
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                ok: false,
                message: 'Internal server error'
            })
        }
    }

    public async deleteSpeed(req: Request, res: Response): Promise<Response>{
        try{
            const id: string = req.params.id 
            if(id.length < 20){
                return res.status(400).json({
                    ok: false,
                    message: 'ID short, please send a valid ID'
                })
            }
            try{
                const deleted: ISpeed = await Speed.findByIdAndDelete(id)
                return res.status(200).json({
                    ok: true,
                    deleted
                })
            }
            catch(e){
                return res.status(400).json({
                    ok: false,
                    message: 'ID not found, please send a valid ID'
                })
            }
        }
        catch(e){
            return res.status(500).json({
                ok: false,
                message: 'Internal server error'
            })
        }
    }

    public async deleteAll(req: Request, res: Response): Promise<Response>{
        const speeds: ISpeed[] = await Speed.find({userId: req.user})

        if(speeds.length < 1){
            return res.status(400).json({
                ok: false,
                message: 'Dont have a speeds in your speed history'
            })
        }
        try{
            speeds.map(async (speed) => {
                await Speed.findByIdAndDelete(speed._id)
            })

            return res.status(200).json({
                ok: true,
                message: 'All speeds deleted'
            })
        }
        catch(e){
            return res.status(500).json({
                ok: false,
                message: 'Internal server error'
            })
        }
    }
}

export default SpeedController