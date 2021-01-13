export interface IUserData {
    token: string | undefined
    user: undefined | IUser
    admin: boolean
  }
  
  export interface IUser{
    age: number
    createdAt: string
    email: string
    firstName: string
    from: string
    isAdmin: boolean
    lastName: string
    updatedAt: string
    userName: string
  }

  export interface IUserRegister{
    email: string
    firstName: string
    lastName: string
    userName: string
    password: string
    passwordCheck: string
    age: string
  }