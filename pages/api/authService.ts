import {api} from "./api";
import secureLocalStorage from "react-secure-storage";

export async function login(nif: string, senha: string) {
    try{
    const response = await api.post("Autenticacao/login", {nif, senha});

    const token = response.data.token;

    secureLocalStorage.setItem("Token", token);}
    catch(error: any){
        throw new Error(error.response.data);
    }
}