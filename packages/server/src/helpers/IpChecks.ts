export function SaveIpCheckCamps(
    ip: string,
    country: string,
    country_capital: string,
    city: string,
    lat: string,
    lon: string,
    isp: string,
    org: string,
    userId: unknown | undefined
): boolean {
    if (
        ip == null ||
        country == null ||
        country_capital == null ||
        city == null ||
        lat == null ||
        lon == null ||
        isp == null ||
        org == null ||
        userId == null
    ) {
        return true;
    }

    return false;
}

export function IdExists(id: string): boolean {
    if (id) {
        return false;
    }
    return true;
}
