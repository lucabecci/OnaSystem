export function checkCampsLogin(email: string, password: string) {
    if (email.length < 1 || password.length < 6) {
        return true;
    }
    return false;
}

export function checkEmailLogin(email: string) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        return true;
    }
    return false;
}
