export function RegisterCampsCheck(
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  password: string,
  passwordCheck: string,
  age: number
): boolean {
  if (
    firstName == null ||
    lastName == null ||
    userName == null ||
    email == null ||
    password == null ||
    passwordCheck == null ||
    age == null
  ) {
    return true;
  }

  return false;
}

export function LoginCampsCheck(email: string, password: string): boolean {
  if (email == null || password == null) {
    return true;
  }

  return false;
}

export function EqualPasswords(
  password: string,
  passwordCheck: string
): boolean {
  if (password !== passwordCheck) {
    return true;
  }
  return false;
}
