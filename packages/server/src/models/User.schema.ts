import { Schema, Document, model, SchemaDefinition } from "mongoose";
import bcrypt from "bcrypt";
export interface IUser extends Document {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    age: number;
    isAdmin: boolean;
}

class UserSchema {
    private _schemaDefinition: SchemaDefinition;
    public _userSchema: Schema;

    constructor() {
        (this._schemaDefinition = {
            firstName: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 20,
                trim: true,
            },
            lastName: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 20,
                trim: true,
            },
            userName: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 15,
                trim: true,
                unique: true,
            },
            email: {
                type: String,
                required: true,
                minlength: 8,
                trim: true,
                unique: true,
            },
            password: {
                type: String,
                required: true,
                minlength: 6,
                trim: true,
            },
            age: {
                type: Number,
                default: 18,
            },
            isAdmin: {
                type: Boolean,
                default: false,
            },
        }),
            (this._userSchema = new Schema(this._schemaDefinition, {
                timestamps: true,
            }));

        this.encryptPassword();
    }

    private encryptPassword() {
        this._userSchema.pre<IUser>("save", async function (next) {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const user = this;
            if (!user.isModified("password")) return next();
            const salt = await bcrypt.genSalt(12);
            const hashed = await bcrypt.hash(user.password, salt);
            user.password = hashed;
            next();
        });
    }
}

const userschema = new UserSchema();

export default model<IUser>("User", userschema._userSchema);
