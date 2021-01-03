import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import config from "../config/config";
import User, { IUser } from "../models/User.schema";

export async function IsAdmin(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  let token;
  if (req.headers.authorization?.startsWith("Bearer ")) {
    token = req.headers.authorization?.substring(
      7,
      req.headers.authorization?.length
    );
  } else {
    return res.status(401).json({
      ok: false,
      message: "Auth token not found, authetication denied",
    });
  }

  try {
    const verified = jwt.verify(token, config.JWT_TOKEN);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { id }: any = verified;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const user: IUser = await User.findById(id);

    if (user.isAdmin === false) {
      return res.status(401).json({
        ok: false,
        message: "You are not admin, authentication denied",
      });
    }

    next();
  } catch (e) {
    return res.status(400).json({
      ok: false,
      message: "Auth token invalid, authentication denied",
    });
  }
}
