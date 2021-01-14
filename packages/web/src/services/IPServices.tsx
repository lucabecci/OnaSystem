import axios from "axios";

export async function searchIP(ip: string){
    try{
        const result = await axios.get(`http://ip-api.com/json/${ip}`)
        return {
            error: true,
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