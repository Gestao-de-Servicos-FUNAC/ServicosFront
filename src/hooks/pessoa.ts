import api from "@/api/axios";
import { Pessoa } from "@/types/pessoa";
import { useState } from "react";


export const listarPessoas = async (): Promise<{ pessoas: Pessoa[] }> => {
    try {
        const response = await api.get("/pessoas");

        return {pessoas: response.data };
    } catch (error) {
        console.error("Erro ao listar pessoas:", error);
        throw new Error("Não foi possível listar as pessoas.");
    }
}