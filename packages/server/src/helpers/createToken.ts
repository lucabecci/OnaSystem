import jwt from 'jsonwebtoken'
import config from '../config/config'
export async function createToken(userID: string): Promise<string>{
    const token = await jwt.sign({id: userID}, config.JWT_TOKEN)
    return token
}