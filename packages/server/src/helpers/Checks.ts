export function RegisterCampsCheck( 
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    passwordCheck: string,
    age: number,
    from: string
): boolean{
    if(
        firstName == null ||
        lastName == null ||
        userName == null ||
        email == null ||
        password == null ||
        passwordCheck == null ||
        age == null ||
        from == null 
    ){
        return true
    }

    return false 
}


export function EqualPasswords (
    password: string,
    passwordCheck: string
){
    if(password !== passwordCheck){
        return true
    }
    return false
}