export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginTokenization {
  token: string;
}
