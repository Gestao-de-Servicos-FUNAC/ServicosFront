import { Pessoa } from "./pessoa"

export type Egresso = {
    idenEgresso: number
    contaBancaria: string
    regimePena: string
    pessoa: Pessoa
}

export type EgressoDto = {
    idenEgresso?: number,
    contaBancaria: string
    regimePena: string
    idPessoa: number
}

export type RegimePenal = {
    ABERTO: 'Aberto';
    SEMI_ABERTO: 'Semi Aberto';
    FECHADO: 'Fechado';
}