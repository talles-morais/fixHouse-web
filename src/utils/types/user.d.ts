export type UserLogin = {
  email: string,
  password: string,
}

export type UserRegister = {
  name: string,
  email: string,
  password: string,
  confirmPassword: string
}

export type UserRegisterPro = {
  name: string,
  email: string,
  specialty: string,
  password: string,
  confirmPassword: string
}