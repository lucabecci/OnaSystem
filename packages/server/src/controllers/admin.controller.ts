import { Request, Response } from "express";
import User, { IUser } from "../models/User.schema";

class AdminController {
  public async getUsers(_req: Request, res: Response): Promise<Response> {
    const users: IUser[] = await User.find().select("-password").select("-__v");

    if (users.length < 1 || users === null) {
      return res.status(400).json({
        ok: false,
        message: "The collection of user have a 0 users",
      });
    }

    return res.status(200).json({
      ok: true,
      users,
    });
  }

  public async getUser(req: Request, res: Response): Promise<Response> {
    try {
      const id: string = req.params.id;

      try {
        const user: IUser = await User.findById(id).select("-password");

        if (user === null) {
          return res.status(400).json({
            ok: false,
            message: "The user doesnt exists",
          });
        }

        return res.status(200).json({
          ok: true,
          user,
        });
      } catch (e) {
        return res.status(400).json({
          ok: false,
          message: "The user doesnt exists",
        });
      }
    } catch (e) {
      return res.status(500).json({
        ok: false,
        message: "Internal server error",
      });
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const id: string = req.params.id;

      try {
        const userDeleted: IUser = await User.findByIdAndDelete(id);

        if (!userDeleted) {
          return res.status(400).json({
            ok: false,
            message: "The user doesnt exists",
          });
        }

        return res.status(200).json({
          ok: true,
          userDeleted,
        });
      } catch (e) {
        return res.status(400).json({
          ok: false,
          message: "The user doesnt exists",
        });
      }
    } catch (e) {
      return res.status(500).json({
        ok: false,
        message: "Internal server error",
      });
    }
  }

  public async setAdmin(req: Request, res: Response): Promise<Response>{
    try{
      const userId: string = req.params.id
      try{
        const newAdmin: IUser = await User.findByIdAndUpdate(userId,{ isAdmin: true })
                          .select("-password")

        if(newAdmin.isAdmin === true){
          return res.status(400).json({
            ok: false,
            message: `The user ${newAdmin.userName} is already an administrator`
          })
        }
        if (!newAdmin) {
          return res.status(400).json({
            ok: false,
            message: "The user doesnt exists",
          });
        }
        return res.status(200).json({
          ok: true,
          message: `New admin added: ${newAdmin.userName}`
        })
      }
      catch(e){
        return res.status(400).json({
          ok: false,
          message: "The user doesnt exists",
        });
      }
    }
    catch(e){
      return res.status(500).json({
        ok: false,
        message: 'Internal server error' 
      })
    }
  }
}

export default AdminController;
