"use client";
import { Pessoa, PessoaModalMode } from "@/types/pessoa";
import { Button, Datepicker, Label, Modal, Select, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";


interface Props {
    open: boolean;
    mode: PessoaModalMode;
    pessoa?: Pessoa;
    onClose: () => void;
    onSubmit: (pessoa: Pessoa) => void;
}

const tipos = [
    "EGRESSO",
    "DEPENDENTE_EGRESSO",
    "FUNCIONARIO",
    "ADMINISTRADOR",
]

export default function ModalPessoa({
    open,
    mode,
    pessoa,
    onClose,
    onSubmit
}: Props) {
    const isViewMode = mode === 'view';
    const isEditMode = mode === 'edit';
    const isCreateMode = mode === 'create';

    const [formData, setFormData] = useState<Pessoa>({
        idPessoa: 0,
        nomePessoa: "",
        email: "",
        cpf: "",
        tipoPessoa: "",
        dataNascimento: "",
        nomeSocial: "",
        genero: "",
        identidadeGenero: "",
        orientacaoSexual: "",
        nacionalidade: "",
        raca: "",
        status: 1,
    });

    useEffect(() => {
        if (pessoa && (mode === 'edit' || mode === 'view')) {
            setFormData({
                ...pessoa,
            });
        } else if (mode === 'create') {
            setFormData({
                idPessoa: 0,
                nomePessoa: "",
                email: "",
                cpf: "",
                tipoPessoa: "",
                dataNascimento: "",
                nomeSocial: "",
                genero: "",
                identidadeGenero: "",
                orientacaoSexual: "",
                nacionalidade: "",
                raca: "",
                status: 1,
            });
        }
    }, [pessoa, mode]);

    const handleChange = (key: keyof Pessoa, value: string | number) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isCreateMode || isEditMode) {
            onSubmit(formData);
        }
    };

   return (
    <div className="w-full sm:w-2/3 mx-auto">
      <Modal show={open} onClose={onClose} popup>
        <Modal.Header />
        <Modal.Body>
          <h3 className="text-lg font-semibold mb-4 text-center">
            {isCreateMode && "Criar Pessoa"}
            {isEditMode && "Editar Pessoa"}
            {isViewMode && "Visualizar Pessoa"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nomePessoa" value="Nome" />
                <TextInput id="nomePessoa" value={formData.nomePessoa} onChange={(e) => handleChange("nomePessoa", e.target.value)} disabled={isViewMode} required={!isViewMode} />
              </div>
              <div>
                <Label htmlFor="nomeSocial" value="Nome Social" />
                <TextInput id="nomeSocial" value={formData.nomeSocial || ""} onChange={(e) => handleChange("nomeSocial", e.target.value)} disabled={isViewMode} />
              </div>
              <div>
                <Label htmlFor="cpf" value="CPF" />
                <TextInput id="cpf" value={formData.cpf} onChange={(e) => handleChange("cpf", e.target.value)} disabled={isViewMode} required={!isViewMode} />
              </div>
              <div>
                <Label htmlFor="email" value="Email" />
                <TextInput id="email" type="email" value={formData.email || ""} onChange={(e) => handleChange("email", e.target.value)} disabled={isViewMode} />
              </div>
              <div>
                <Label htmlFor="tipoPessoa" value="Tipo de Pessoa" />
                <Select id="tipoPessoa" value={formData.tipoPessoa || ""} onChange={(e) => handleChange("tipoPessoa", e.target.value)} disabled={isViewMode} required={!isViewMode}>
                  <option value="">Selecione o tipo</option>
                  {tipos.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <Label htmlFor="dataNascimento" value="Data de Nascimento" />
                <Datepicker
                  id="dataNascimento"
                  value={formData.dataNascimento || ""}
                  onSelectedDateChanged={(date) => {
                    if (date) {
                      const day = String(date.getDate()).padStart(2, "0");
                      const month = String(date.getMonth() + 1).padStart(2, "0");
                      const year = date.getFullYear();
                      const formattedDate = `${day}/${month}/${year}`;
                      handleChange("dataNascimento", formattedDate);
                    } else {
                      handleChange("dataNascimento", "");
                    }
                  }}
                  disabled={isViewMode}
                />
              </div>
              <div>
                <Label htmlFor="genero" value="Gênero" />
                <TextInput id="genero" value={formData.genero || ""} onChange={(e) => handleChange("genero", e.target.value)} disabled={isViewMode} />
              </div>
              <div>
                <Label htmlFor="identidadeGenero" value="Identidade de Gênero" />
                <TextInput id="identidadeGenero" value={formData.identidadeGenero || ""} onChange={(e) => handleChange("identidadeGenero", e.target.value)} disabled={isViewMode} />
              </div>
              <div>
                <Label htmlFor="orientacaoSexual" value="Orientação Sexual" />
                <TextInput id="orientacaoSexual" value={formData.orientacaoSexual || ""} onChange={(e) => handleChange("orientacaoSexual", e.target.value)} disabled={isViewMode} />
              </div>
              <div>
                <Label htmlFor="nacionalidade" value="Nacionalidade" />
                <TextInput id="nacionalidade" value={formData.nacionalidade || ""} onChange={(e) => handleChange("nacionalidade", e.target.value)} disabled={isViewMode} />
              </div>
              <div>
                <Label htmlFor="raca" value="Raça" />
                <TextInput id="raca" value={formData.raca || ""} onChange={(e) => handleChange("raca", e.target.value)} disabled={isViewMode} />
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-4">
              {!isViewMode ? (
                <>
                  <Button type="button" color="red" onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button type="submit" color="green">
                    {isCreateMode ? "Cadastrar" : "Salvar"}
                  </Button>
                </>
              ) : (
                <Button type="button" className="btn btn-secondary w-full" onClick={onClose}>
                  Fechar
                </Button>
              )}
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}