import axios from "axios";
import { IIPinformation, IIPtoSave } from "../interfaces/IPinterfaces";

export async function searchIP(ip: string) {
    try {
        const result = await axios.get(`https://ipapi.co/${ip}/json/`);
        if (result.data.error) {
            return {
                error: true,
                message: "invalid IP address",
                data: null,
            };
        }
        const information: IIPinformation = {
            city: result.data.city,
            country_name: result.data.country_name,
            country_capital: result.data.country_capital,
            continent_code: result.data.continent_code,
            latitude: result.data.latitude,
            longitude: result.data.longitude,
            org: result.data.org,
            postal: result.data.postal,
        };
        return {
            error: false,
            message: "",
            data: information,
        };
    } catch (e) {
        return {
            error: true,
            message: "Internal server error",
            data: null,
        };
    }
}
export async function getUserIP() {
    try {
        const res = await axios.get("https://api.ipify.org/?format=json");
        const result = await searchIP(res.data.ip);
        return result;
    } catch (e) {
        return {
            error: true,
            message: "Internal server Error",
            data: null,
        };
    }
}
export async function saveInformationIP(data: IIPtoSave, token: string) {
    try {
        await axios.post("http://localhost:4000/ip/create", data, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        return {
            error: false,
            message: "",
        };
    } catch (e) {
        return {
            error: true,
            message: "Error to save your IP search",
        };
    }
}

export async function getAllIP(token: string) {
    try {
        const result = await axios.get("http://localhost:4000/ip/search", {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        if (result.data.searchs.length < 1) {
            return {
                error: false,
                message: "",
                data: [],
            };
        }
        return {
            error: false,
            message: "",
            data: result.data.searchs,
        };
    } catch (e) {
        return {
            error: true,
            message: "Error to get your IP searchs",
        };
    }
}
