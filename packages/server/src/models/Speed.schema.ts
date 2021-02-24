import { Schema, Document, model, SchemaDefinition } from "mongoose";

export interface ISpeed extends Document {
    _id?: string;
    summary: string;
    value: number;
    userId: string;
}

class SpeedSchema {
    private _schemaDefinition: SchemaDefinition;
    public _speedSchema: Schema;

    constructor() {
        this._schemaDefinition = {
            summary: {
                type: String,
                required: true,
                trim: true,
                default: "Bad",
            },
            value: {
                type: Number,
                required: true,
                trim: true,
                default: 0,
            },
            userId: {
                type: String,
                required: true,
                trim: true,
            },
        };

        this._speedSchema = new Schema(this._schemaDefinition, {
            timestamps: true,
        });
    }
}

const speedSchema = new SpeedSchema();

export default model<ISpeed>("Speed", speedSchema._speedSchema);
