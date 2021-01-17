import axios from "axios";
import { IIPinformation } from "../interfaces/IPinterfaces";

export async function searchIP(ip: string){
    try{
        const result = await axios.get(`https://ipapi.co/190.174.89.14/json/`)
        if(result.data.error){
            return {
                error: true,
                message: 'invalid IP address',
                data: null
            }
        }
        const information: IIPinformation  = {
            city: result.data.city,
            country_name: result.data.country_name,
            country_capital: result.data.country_capital,
            continent_code: result.data.continent_code,
            latitude: result.data.latitude,
            longitude: result.data.longitude,
            org: result.data.org,
            postal: result.data.postal
        }
        return {
            error: false,
            message: '',
            data: information
        }
    }
    catch(e){
        return {
            error: true,
            message: 'Internal server error',
            data: null
        }
    }
}
export async function searchIPLogged(ip: string, token: string){
    try{
        const result = await axios.get(`http://ip-api.com/json/${ip}`)
        const saveResult = await saveInformationIP(result.data, token)
        if(saveResult.error === true){
            return {
                error: true,
                message: saveResult.message,
                data: null
            }
        }
        return {
            error: false,
            message: '',
            data: result.data
        }
    }
    catch(e){
        return {
            error: true,
            message: 'err',
            data: null
        }
    }
}

export async function saveInformationIP(data: any, token: string){
    try{
        await axios.post('http://localhost:4000/ip/saveSearch', data, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        return {
            error: false,
            message: ''
        }
    }
    catch(e){
        return {
            error: true,
            message: e
        }
    }


}

export async function getAllIP(){
    
}

export async function getBestIPS(){

}

export async function getBadIPS(){

}