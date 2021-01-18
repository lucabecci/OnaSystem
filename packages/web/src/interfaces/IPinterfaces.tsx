export interface IIPinformation {
    city: string
    country_name: string
    country_capital: string
    continent_code: string
    latitude: number | undefined
    longitude: number | undefined
    org: string
    postal: number
}

export interface IIPinformationGet {
    _id: string
    ip: string
    city: string
    country: string
    country_capital: string
    continent_code: string
    lat: number | undefined
    lon: number | undefined
    org: string
    postal: number
}

export interface IIPtoSave {
    ip: any | undefined
    city: string | undefined
    country: string | undefined
    country_capital: string | undefined
    lat: number | undefined
    lon: number | undefined
    postal: number | undefined
    org: string | undefined
    
}