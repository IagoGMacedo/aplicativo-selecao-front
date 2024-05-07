export interface IUser{
    id: number;
    firstName: string;
    lastName: string;
    login: string;
    role: Role;
}

export enum Role{
    ADMIN, COMMON
}

export interface ILogin{
    login: string;
    password: string;
}

export interface ILoginResponse{
    message: string;
    token: string;
    user: IUser;
}