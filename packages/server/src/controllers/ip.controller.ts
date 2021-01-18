import { Request, Response } from "express";
import { IdExists, SaveIpCheckCamps } from "../helpers/IpChecks";
import Ip, { IIp } from "../models/IP.schema";
class IpController {
  public async newSearch(req: Request, res: Response): Promise<Response> {
    const searchInformation = {
      ip: req.body.ip,
      country: req.body.country,
      country_capital: req.body.country_capital,
      city: req.body.city,
      lat: req.body.lat,
      lon: req.body.lon,
      postal: req.body.postal,
      org: req.body.org,
      userId: req.user,
    };
    const campsChecked = SaveIpCheckCamps(
      searchInformation.ip,
      searchInformation.country,
      searchInformation.country_capital,
      searchInformation.city,
      searchInformation.lat,
      searchInformation.lon,
      searchInformation.postal,
      searchInformation.org,
      searchInformation.userId
    );
    //check not more of 10 searchs
    const searches: IIp[] = await Ip.find({userId: req.user}).sort({date: 'descending'})
    if(searches.length >= 10){
      const toDelete: IIp = searches[0]
      await Ip.findByIdAndDelete({_id: toDelete._id})
    }
    if (campsChecked) {
      return res.status(400).json({
        ok: false,
        message: "Please send all camps",
      });
    }
    console.log(searches.length)
    const search: IIp = await new Ip(searchInformation);

    const searchSaved = await search.save();

    return res.status(200).json({
      ok: true,
      searchSaved,
    });
  }

  public async getSearchs(req: Request, res: Response): Promise<Response> {
    const searchs: IIp[] = await Ip.find({ userId: req.user }).sort({createdAt: -1});

    if (searchs.length < 1) {
      return res.status(400).json({
        ok: false,
        message: "You dont have searchs",
      });
    }

    return res.status(200).json({
      ok: true,
      searchs,
    });
  }

  public async getSearch(req: Request, res: Response): Promise<Response> {
    const id: string = req.params.id;

    const idChecked = IdExists(id);

    if (idChecked) {
      return res.status(400).json({
        ok: false,
        message: "Please send an ID",
      });
    }
    try {
      const ip: IIp = await Ip.findById(id);

      if (ip === null) {
        return res.status(400).json({
          ok: false,
          message: "ID not found",
        });
      }

      return res.status(200).json({
        ok: true,
        ip,
      });
    } catch (e) {
      return res.status(400).json({
        ok: false,
        message: "Internal server error",
      });
    }
  }

  public async deleteSearch(req: Request, res: Response): Promise<Response> {
    const id: string = req.params.id;

    const idChecked = IdExists(id);

    if (idChecked) {
      return res.status(400).json({
        ok: false,
        message: "Please send an ID",
      });
    }

    try {
      const searchDeleted: IIp = await Ip.findByIdAndDelete(id);

      if (searchDeleted === null) {
        return res.status(400).json({
          ok: false,
          message: "ID not found",
        });
      }

      return res.status(200).json({
        ok: true,
        searchDeleted,
      });
    } catch (e) {
      return res.status(400).json({
        ok: false,
        message: "Internal server error",
      });
    }
  }

  public async deleteAll(req: Request, res: Response): Promise<Response> {
    const ips: IIp[] = await Ip.find({ userId: req.user });

    if (ips.length < 1) {
      return res.status(400).json({
        ok: false,
        message: "You dont have anything in your IP history",
      });
    }
    try {
      ips.map(async (ip) => {
        await Ip.findByIdAndDelete(ip._id);
      });

      return res.status(200).json({
        ok: true,
        message: "IP history deleted",
      });
    } catch (e) {
      return res.status(500).json({
        ok: false,
        message: "Internal server error",
      });
    }
  }

  public getUserIP(req: Request, res: Response): Response{
    try{
      const ip: string|undefined = req.clientIp

      return res.status(200).json({
        ok: true,
        user_ip: ip
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

export default IpController;
