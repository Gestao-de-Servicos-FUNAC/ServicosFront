import api from "@/api/axios";
import { Pessoa } from "@/types/pessoa";

export const listarPessoas = async (): Promise<{ pessoas: Pessoa[] }> => {
    try {
        const response = await api.get("/pessoas");

        return {pessoas: response.data };
    } catch (error) {
        console.error("Erro ao listar pessoas:", error);
        throw new Error("Não foi possível listar as pessoas.");
    }
}

export const buscarPessoaPorId = async (id: number): Promise<Pessoa> => {
    try {
        const response = await api.get(`/pessoas/${id}`);

        return response.data;
    } catch (error) {
        console.error(`Erro ao obter as informações da pessoa com ID ${id}:`, error);
        throw new Error("Não foi possível obter as informações da pessoa.");
    }
}

export const cadastrarPessoa = async ( pessoa: Pessoa): Promise<Pessoa> => {
    try {
        const response = await api.post("/pessoas", pessoa);

        return response.data;
    } catch (error) {
        console.error("Erro ao cadatras a pessoa:", error);
        throw new Error("Não foi possível cadastrar a pessoa.");
    }
}

export const atualizarPessoa = async ( pessoa: Pessoa): Promise<Pessoa> => {
    try {
        const response = await api.patch(`/pessoas/${pessoa.idPessoa}`, pessoa);

        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar as informações da pessoa com ID ${pessoa.idPessoa}:`, error);
        throw new Error("Não foi possível atualizar as informações da pessoa.");
    }
}

export const removerPessoa = async (id: number): Promise<void> => {
    try {
        await api.delete(`/pessoas/${id}`);
    } catch (error) {
        console.error(`Erro ao remover a pessoa com o ID ${id}:`, error);
        throw new Error("Não foi possível remover a pessoa.");
    }
}
