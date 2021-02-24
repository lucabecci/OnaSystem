/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import NetworkSpeed from "network-speed";
import { SaveSpeedCheckCamps } from "../helpers/SpeedChecks";
import Speed, { ISpeed } from "../models/Speed.schema";

class SpeedController {
    public async createSpeed(req: Request, res: Response): Promise<Response> {
        const speedinformation = {
            summary: req.body.summary,
            value: req.body.value,
            userId: req.user,
        };

        const campsChecked: boolean = SaveSpeedCheckCamps(
            speedinformation.summary,
            speedinformation.value,
            req.user
        );

        if (campsChecked) {
            return res.status(400).json({
                ok: false,
                message: "Please send all camps",
            });
        }

        try {
            const newSpeed: ISpeed = await new Speed(speedinformation);

            const speedSaved: ISpeed = await newSpeed.save();
            return res.status(200).json({
                ok: true,
                speedSaved,
            });
        } catch (e) {
            return res.status(500).json({
                ok: false,
                message: "Internal server error",
            });
        }
    }

    public async getSpeeds(req: Request, res: Response): Promise<Response> {
        try {
            const speeds: ISpeed[] = await Speed.find({ userId: req.user });

            if (speeds.length < 1) {
                return res.status(400).json({
                    ok: false,
                    message: "You dont have anything in your speed history ",
                });
            }
            return res.status(200).json({
                ok: true,
                speeds,
            });
        } catch (e) {
            return res.status(500).json({
                ok: false,
                message: "Internal server error",
            });
        }
    }

    public async getSpeed(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            if (id.length < 20) {
                return res.status(400).json({
                    ok: false,
                    message: "ID short, please send a valid ID",
                });
            }
            try {
                const speed: ISpeed = await Speed.findById(id);
                return res.status(200).json({
                    ok: true,
                    speed,
                });
            } catch (e) {
                return res.status(400).json({
                    ok: false,
                    message: "ID not found, please send a valid ID",
                });
            }
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                ok: false,
                message: "Internal server error",
            });
        }
    }

    public async deleteSpeed(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            if (id.length < 20) {
                return res.status(400).json({
                    ok: false,
                    message: "ID short, please send a valid ID",
                });
            }
            try {
                const deleted: ISpeed = await Speed.findByIdAndDelete(id);
                return res.status(200).json({
                    ok: true,
                    deleted,
                });
            } catch (e) {
                return res.status(400).json({
                    ok: false,
                    message: "ID not found, please send a valid ID",
                });
            }
        } catch (e) {
            return res.status(500).json({
                ok: false,
                message: "Internal server error",
            });
        }
    }

    public async deleteAll(req: Request, res: Response): Promise<Response> {
        const speeds: ISpeed[] = await Speed.find({ userId: req.user });

        if (speeds.length < 1) {
            return res.status(400).json({
                ok: false,
                message: "Dont have a speeds in your speed history",
            });
        }
        try {
            speeds.map(async (speed) => {
                await Speed.findByIdAndDelete(speed._id);
            });

            return res.status(200).json({
                ok: true,
                message: "All speeds deleted",
            });
        } catch (e) {
            return res.status(500).json({
                ok: false,
                message: "Internal server error",
            });
        }
    }

    public async testUpload(_req: Request, res: Response): Promise<Response> {
        const testNetworkSpeed = new NetworkSpeed();
        const options = {
            hostname: "www.google.com",
            port: 80,
            path: "/catchers/544b09b4599c1d0200000289",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const fileSizeInBytes = 2000000;
        const speed: any = await testNetworkSpeed.checkUploadSpeed(
            options,
            fileSizeInBytes
        );
        const finalSpeed = parseInt(speed.mbps) / 10;
        return res.status(200).json({
            ok: true,
            upload: finalSpeed,
        });
    }

    public async testDownload(_req: Request, res: Response): Promise<Response> {
        const testNetworkSpeed = new NetworkSpeed();
        const baseUrl = "http://eu.httpbin.org/stream-bytes/50000000";
        const fileSizeInBytes = 50000000;
        const speed: any = await testNetworkSpeed.checkDownloadSpeed(
            baseUrl,
            fileSizeInBytes
        );
        const finalSpeed = parseInt(speed.mbps) / 10;
        return res.status(200).json({
            ok: true,
            download: finalSpeed,
        });
    }
}

export default SpeedController;
