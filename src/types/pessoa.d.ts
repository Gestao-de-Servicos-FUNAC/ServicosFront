export type Pessoa = {
    idPessoa: number;
    nomePessoa: string;
    cpf: string;
    email?: string;
    dataNascimento?: string; // Formato: "DD/MM/YYYY"
    nomeSocial?: string;
    genero?: string;
    status: number; // 0 = Inativo, 1 = Ativo
    tipoPessoa: string; // Exemplo: 'administrador', 'funcionario', 'egresso', 'dependente_egresso'
    identidadeGenero?: string;
    orientacaoSexual?: string;
    nacionalidade?: string;
    raca?: string;
}

export type PessoaFilterParams = {
    nome?: string;
    cpf?: string;
    tipoPessoa?: string;
    dataNascimento?: string; // Formato: "DD/MM/YYYY"
}

export type TipoPessoaEnum = {
    ADMINISTRADOR: 'administrador';
    FUNCIONARIO: 'funcionario';
    EGRESSO: 'egresso';
    DEPENDENTE_EGRESSO: 'dependente_egresso';
}

export type PessoaModalMode = 'create' | 'edit' | 'view';