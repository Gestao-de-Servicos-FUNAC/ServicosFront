"use client";
import { PessoaFilterParams } from "@/types/pessoa";
import React, { useState } from "react";
import { Button, Datepicker, Label, Select, TextInput } from "flowbite-react";

interface Props {
    onFilter: (params: PessoaFilterParams) => void;
}

const tipos = ["EGRESSO", "DEPENDENTE_EGRESSO", "FUNCIONARIO", "ADMINISTRADOR"];

export default function FiltroPessoa({ onFilter }: Props) {
    const [filtro, setFiltro] = useState<PessoaFilterParams>({
        nome: "",
        cpf: "",
        tipoPessoa: "",
        dataNascimento: "",
    });

    const handleChange = (key: keyof PessoaFilterParams, value: string) => {
        setFiltro((prev) => ({ ...prev, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onFilter(filtro);
    };

    const handleClear = () => {
        setFiltro({
            nome: "",
            cpf: "",
            tipoPessoa: "",
            dataNascimento: "",
        });
        onFilter({
            nome: "",
            cpf: "",
            tipoPessoa: "",
            dataNascimento: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-6 mb-6">
            <div className="grid grid-cols-10 gap-4">
                <div className="col-span-6">
                    <Label htmlFor="nome" value="Nome" className="" />
                    <TextInput
                        id="nome"
                        type="text"
                        placeholder="Digite seu nome"
                        value={filtro.nome || ""}
                        onChange={(e) => handleChange("nome", e.target.value)}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="col-span-4">
                    <Label htmlFor="cpf" value="CPF" />
                    <TextInput
                        id="cpf"
                        type="text"
                        placeholder="Digite seu CPF"
                        value={filtro.cpf || ""}
                        onChange={(e) => handleChange("cpf", e.target.value)}
                        className="input input-bordered w-full"
                    />
                </div>
            </div>
            <div className="grid grid-cols-10 gap-4 items-end">
                <div className="col-span-3">
                    <Label htmlFor="tipoPessoa" value="Tipo de Pessoa" className="" />
                    <Select
                        id="tipoPessoa"
                        value={filtro.tipoPessoa || ""}
                        onChange={(e) => handleChange("tipoPessoa", e.target.value)}
                        className="select select-bordered w-full"
                    >
                        <option value="">Selecione o tipo</option>
                        {tipos.map((tipo) => (
                            <option key={tipo} value={tipo}>
                                {tipo}
                            </option>
                        ))}
                    </Select>
                </div>
                <div className="col-span-3">
                    <Label htmlFor="dataNascimento" value="Data de Nascimento" className="" />
                    <Datepicker
                        id="dataNascimento"
                        placeholder="DD/MM/YYYY"
                        value={filtro.dataNascimento || ""}
                        accept="DD/MM/YYYY"
                        onSelectedDateChanged={(date) => {
                            const day = String(date.getDate()).padStart(2, "0");
                            const month = String(date.getMonth() + 1).padStart(2, "0");
                            const year = date.getFullYear();
                            const formattedDate = `${day}/${month}/${year}`;
                            handleChange("dataNascimento", formattedDate);
                        }}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="col-span-4 flex gap-3 items-end">
                    <Button color="blue" type="submit">
                        Filtrar
                    </Button>
                    <Button color="gray" type="button" onClick={handleClear}>
                        Limpar Filtros
                    </Button>
                </div>
            </div>
        </form>
    );
}