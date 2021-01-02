import {Schema, model, Document, SchemaDefinition} from 'mongoose'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IIpSchema extends Document {
    _id?: string
    ip: string,
    country: string
    city: string
    lat: string
    lon: string
    isp: string
    org: string
    userId: string
}

class IpSchema {
    private _schemaDefinition: SchemaDefinition
    public _ipSchema: Schema

    constructor(){
        this._schemaDefinition = {
            ip: {
                type: String,
                required: true,
                trim: true
            },
            country: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            lat: {
                type: String,
                required: true,
                trim: true
            },
            lon: {
                type: String,
                required: true,
                trim: true
            },
            isp: {
                type:String,
                required: true
            },
            org: {
                type: String,
                required: true
            },
            userId: {
                type: String,
                required: true,

            }
        }
        this._ipSchema = new Schema(this._schemaDefinition, {timestamps: true})
    }
}


const ipSchema = new IpSchema

export default model<IIpSchema>('Ip', ipSchema._ipSchema)