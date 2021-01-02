import {Response, Request} from 'express'
import { EqualPasswords, RegisterCampsCheck } from '../helpers/Checks'
import User from '../models/User.schema'
class UserController{
    public async register(req: Request, res: Response): Promise<Response> {
        const newUser = {
            firstName: <string> req.body.firstName,
            lastName: <string> req.body.lastName,
            userName: <string> req.body.userName,
            email: <string> req.body.email,
            password: <string> req.body.password,
            passwordCheck: <string> req.body.passwordCheck,
            age: <number> req.body.age,
            from: <string> req.body.from
        }
        const campsChecked = RegisterCampsCheck(
            newUser.firstName, 
            newUser.lastName, 
            newUser.userName, 
            newUser.email, 
            newUser.password,
            newUser.passwordCheck,
            newUser.age,
            newUser.from)

        if(campsChecked){
            return res.status(400).json({
                ok: false,
                message: 'Please send all camps'
            })
        }    
        const passwordEqual = EqualPasswords(
            newUser.password, 
            newUser.passwordCheck)

        if(passwordEqual){
            return res.status(400).json({
                ok: false,
                message: 'Password not equal'
            })
        }
        
        const emailChecked = await User.findOne({email: newUser.email})
        
        if(emailChecked) {
            return res.status(400).json({
                ok: false,
                message: 'Email already in use'
            })
        }

        const usernameChecked = await User.findOne({userName: newUser.userName})

        if(usernameChecked){
            return res.status(400).json({
                ok: false,
                message: 'Username already in use'
            })
        }

        try{
            const createUser = await new User(newUser)

            const user = await createUser.save()
            return res.status(200).json({
                ok: true,
                user
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

export default UserController