import api from "@/api/axios";
import { Egresso, EgressoDto } from "@/types/egresso";



export const listarEgressos = async (): Promise<{egressos: Egresso[]}> => {
    try {
        const response = await api.get(`/egressos`)

        return { egressos: response.data }
    } catch (error) {
        console.error(`Erro ao listar egressos:`, error);
        throw new Error("Não foi possível retornar a lista de egressos.");
    }
}

export const buscarEgresso = async (id: number): Promise<Egresso> => {
    try {
        const response = await api.get(`/egressos/${id}`)

        return response.data
    } catch (error) {
        console.error(`Erro ao buscar as informações do egresso:`, error);
        throw new Error("Não foi possível buscar as informações do egresso.");
    }
}

export const buscarEgressoPorPessoa = async (idenPessoa: number): Promise<Egresso> => {
    try {
        const response = await api.get(`/egressos/pessoa/${idenPessoa}`)

        return response.data
    } catch (error) {
        console.error(`Erro ao buscar as informações do egresso:`, error);
        throw new Error("Não foi possível buscar as informações do egresso.");
    }
}

export const criarEgresso = async (egresso: EgressoDto): Promise<Egresso> => {
    try {
        const response = await api.post(`/egressos`, egresso)

        return response.data
    } catch (error) {
        console.error(`Erro ao cadastrar as informações do egresso:`, error);
        throw new Error("Não foi possível cadastrar as informações do egresso.");
    }
}

export const atualizarEgresso = async (egresso: EgressoDto): Promise<Egresso> => {
    try {
        const response = await api.patch(`/egressos/${egresso.idenEgresso}`, egresso)

        return response.data
    } catch (error) {
        console.error(`Erro ao atualizar as informações do egresso:`, error);
        throw new Error("Não foi possível atualizar as informações do egresso.");
    }
}

export const removerEgresso = async (id: number): Promise<void> => {
    try {
        await api.delete(`/egressos/${id}`)
    } catch (error) {
         console.error(`Erro ao remover as informações do egresso:`, error);
        throw new Error("Não foi possível remover as informações do egresso.");
    }
}