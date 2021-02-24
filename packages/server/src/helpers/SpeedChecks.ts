export function SaveSpeedCheckCamps(
    summary: string,
    value: number,
    userId: unknown
): boolean {
    if (summary == null || value == null || userId == null) {
        return true;
    }
    return false;
}
