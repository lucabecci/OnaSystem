export function SaveIpCheckCamps(
    ip: string,
    country: string,
    city: string,
    lat: string,
    lon: string,
    isp: string,
    org: string,
    userId: unknown | undefined
): boolean{
    if(
        ip == null ||
        country == null ||
        city == null ||
        lat == null ||
        lon == null || 
        isp == null ||
        org == null ||
        userId == null
    ){
        return true
    }

    return false
}