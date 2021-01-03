import { Request, Response } from "express";
import { IdExists, SaveIpCheckCamps } from "../helpers/IpChecks";
import Ip, { IIp } from "../models/IP.schema";
class IpController {
  public async newSearch(req: Request, res: Response): Promise<Response> {
    const searchInformation = {
      ip: req.body.ip,
      country: req.body.country,
      city: req.body.city,
      lat: req.body.lat,
      lon: req.body.lon,
      isp: req.body.isp,
      org: req.body.org,
      userId: req.user,
    };
    const campsChecked = SaveIpCheckCamps(
      searchInformation.ip,
      searchInformation.country,
      searchInformation.city,
      searchInformation.lat,
      searchInformation.lon,
      searchInformation.isp,
      searchInformation.org,
      searchInformation.userId
    );

    if (campsChecked) {
      return res.status(400).json({
        ok: false,
        message: "Please send all camps",
      });
    }
    const search: IIp = await new Ip(searchInformation);

    const searchSaved = await search.save();

    return res.status(200).json({
      ok: true,
      searchSaved,
    });
  }

  public async getSearchs(req: Request, res: Response): Promise<Response> {
    const searchs: IIp[] = await Ip.find({ userId: req.user });

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
    const ips: IIp[] = await Ip.find({userId: req.user})

    if(ips.length < 1){
      return res.status(400).json({
        ok: false,
        message: 'You dont have anything in your IP history'
      })
    }
    try{
      ips.map(async (ip) => {
        await Ip.findByIdAndDelete(ip._id)
      })

      return res.status(200).json({
        ok: true,
        message: 'IP history deleted'
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
