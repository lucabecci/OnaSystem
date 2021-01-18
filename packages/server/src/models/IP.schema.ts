import { Schema, model, Document, SchemaDefinition } from "mongoose";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IIp extends Document {
  _id?: string;
  ip: string;
  country: string;
  country_capital: string;
  city: string;
  lat: string;
  lon: string;
  postal: string;
  org: string;
  userId: string;
}

class IpSchema {
  private _schemaDefinition: SchemaDefinition;
  public _ipSchema: Schema;

  constructor() {
    this._schemaDefinition = {
      ip: {
        type: String,
        required: true,
        trim: true,
      },
      country: {
        type: String,
        required: true,
      },
      country_capital: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      lat: {
        type: String,
        required: true,
        trim: true,
      },
      lon: {
        type: String,
        required: true,
        trim: true,
      },
      postal: {
        type: String,
        required: true,
      },
      org: {
        type: String,
        required: true,
      },
      userId: {
        type: String,
        required: true,
      },
    };
    this._ipSchema = new Schema(this._schemaDefinition, { timestamps: true });
  }
}

const ipSchema = new IpSchema();

export default model<IIp>("Ip", ipSchema._ipSchema);
