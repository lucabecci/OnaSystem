import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import config from "../config/config";
import User from "../models/User.schema";

class Auth {
  private _options: StrategyOptions;
  public _strategy: Strategy;

  constructor() {
    this._options = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.JWT_TOKEN,
    };

    this._strategy = new Strategy(this._options, async (payload, done) => {
      try {
        const user = await User.findById(payload.id);

        if (user) {
          return done(null, user._id);
        }
        return done(null, false);
      } catch (e) {
        console.log(e);
        return false;
      }
    });
  }
}

const passportStrategy = new Auth();

export default passportStrategy._strategy;
