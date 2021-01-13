export function checkCamps(
    email: string,
    firstName: string, 
    lastName: string, 
    userName: string,
    password: string,
    passwordCheck: string,
    age: string
): boolean{
    if(
        email.length === 0 ||
        firstName.length === 0 ||
        lastName.length === 0 ||
        userName.length === 0 ||
        password.length === 0 ||
        passwordCheck.length === 0 ||
        age.length === 0
        ){
            return true
        }
    return false
}

export function checkInvalidLetters(
    firstName: string, 
    lastName: string, 
    userName: string): boolean{
    if(
        /<>|``-=,';]{}+/gi.test(firstName) ||
        /<>|``-=,';]{}+/gi.test(lastName) ||
        /<>|``-=,';]{}+/gi.test(userName)
        ){
        return true
    }    
    return false
}

export function comparePassword(password: string, passwordCheck: string): boolean {
    if(password !== passwordCheck){
        return true
    }
    
    return false
}

export function checkEmail(email: string): boolean {
    if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)){
        return true
    }
    return false
}
