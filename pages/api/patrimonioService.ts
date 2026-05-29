import { Darumadrop_One } from "next/font/google";
import { api } from "./api"
import { log } from "console";

type PatrimonioFormulario = {
    denominacao: string,
    numeroPatrimonio: string,
    valor: number,
    localizacaoId: string,
    statusPatrimonioId: string []
}

interface PatrimonioListagem{
    denominacao: string,
    numeroPatrimonio: string,
    valor: number
}


export async function listarPatrimonio(){
    try{
        const response = await api.get("Patrimonio");

        // const patrimonios = response.data.map((patrimonio: PatrimonioListagem) => ({
        //     ...patrimonio
        // }));
        console.log(response.data);
        return response.data;
    }

     catch(error: any){
        throw new Error(error.response.data);
    }
}

export async function listarPorId(id: number){
    try{
        const response = await api.get("Produto/" + id);

        return response.data;
    }
    catch(error: any){
        throw new Error(error.response.data)
    }
}

export async function cadastrarPatrimonio(dados: PatrimonioFormulario){
    try{
        const formData = new FormData();

        formData.append("denominacao", dados.denominacao);
        formData.append("numeroPatrimonio", dados.numeroPatrimonio);
        formData.append("valor", dados.valor.toString());
        formData.append("localizacaoId", dados.localizacaoId);
        dados.statusPatrimonioId.forEach((id) => {
            formData.append("statusPatrimonioId", id);
        })

        await api.post("Patrimonio", formData);
    }

    catch(error: any){
        throw new Error(error.mesage.data);
    }
}

export async function excluirPatrimonio(patrimonioId: string) {
    try{
        await api.delete("Patrimonio" + patrimonioId);
    }
    catch(error: any){
        throw new Error(error.response.data);
    }
}

export async function editarPatrimonio(patrimonioId: string, dados: PatrimonioFormulario){
    try{
    const formData = new FormData();

        formData.append("denominacao", dados.denominacao);
        formData.append("numeroPatrimonio", dados.numeroPatrimonio);
        formData.append("valor", dados.valor.toString());
        formData.append("localizacaoId", dados.localizacaoId);
        dados.statusPatrimonioId.forEach((id) => {
            formData.append("statusPatrimonioId", id);
        })

        await api.patch("Patrimonio" + patrimonioId, formData);
    }
    catch(error: any){
        throw new Error(error.response.data);
    }
    
}

