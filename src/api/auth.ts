import axios from "axios";
import { User } from "../models/User";
import { BASE_URL, LS_LOGIN_TOKEN } from "./base";

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse{
    data: {
        is_2fa_enabled: boolean;
    };
    token: string;
    user: User;
    
}

export interface Issue{
    id: number;
    title: string;
}

export const login = (data: LoginRequest) => {
    const url = BASE_URL + "/login";
    
    console.log(data);
    console.log(LS_LOGIN_TOKEN);
    return axios.post<LoginResponse>(url, data).then((response) => {
        console.log(response.data.token);
        localStorage.setItem(LS_LOGIN_TOKEN, response.data.token);
        return response.data.user;
    });
    
};

export const logout = () => {
    localStorage.removeItem(LS_LOGIN_TOKEN);
}

interface MeResponse {
    data: User;
}

export const me = () => {
    const url = BASE_URL + "/me";
    return axios.get<MeResponse>(url).then((response) => response.data.data);
};
