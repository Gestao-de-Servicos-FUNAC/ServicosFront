"use client";
import { buscarEgressoPorPessoa } from "@/hooks/egresso";
import { buscarPessoaPorId } from "@/hooks/pessoa";
import { Egresso } from "@/types/egresso";
import { Pessoa, PessoaModalMode } from "@/types/pessoa";
import { Button, Datepicker, Label, Modal, Select, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";


interface Props {
  open: boolean;
  mode: PessoaModalMode;
  pessoa?: Pessoa;
  onClose: () => void;
  onSubmit: (pessoaEgresso: Egresso) => void;
}

const tipos = [
  "EGRESSO",
  "DEPENDENTE_EGRESSO",
  // "FUNCIONARIO",
  // "ADMINISTRADOR",
]

const regimePena = [
  'Aberto',
  'Semi Aberto',
  'Fechado'
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

  const [formData, setFormData] = useState<Egresso>({
    idenEgresso: 0,
    contaBancaria: "",
    regimePena: "",
    pessoa: {
      idPessoa: 0,
      nomePessoa: "",
      email: "",
      cpf: "",
      tipoPessoa: "",
      dataNascimento: undefined,
      nomeSocial: "",
      genero: "",
      identidadeGenero: "",
      orientacaoSexual: "",
      nacionalidade: "",
      raca: "",
      status: 1,
    }
  });

  useEffect(() => {
    if (pessoa && (mode === 'edit' || mode === 'view')) {
      if (pessoa.tipoPessoa == "EGRESSO") {
        buscarEgresso(pessoa.idPessoa).then((pessoaEgresso) => {
          setFormData({
            idenEgresso: pessoaEgresso.idenEgresso,
            contaBancaria: pessoaEgresso.contaBancaria,
            regimePena: pessoaEgresso.regimePena,
            pessoa: pessoa,
          })
        })
      } else {
        setFormData({
          idenEgresso: 0,
          contaBancaria: "",
          regimePena: "",
          pessoa: pessoa,
        });
      }

    } else if (mode === 'create') {
      setFormData({
        idenEgresso: 0,
        contaBancaria: "",
        regimePena: "",
        pessoa: {
          idPessoa: 0,
          nomePessoa: "",
          email: "",
          cpf: "",
          tipoPessoa: "",
          dataNascimento: undefined,
          nomeSocial: "",
          genero: "",
          identidadeGenero: "",
          orientacaoSexual: "",
          nacionalidade: "",
          raca: "",
          status: 1,
        }
      });
    }
  }, [pessoa, mode]);

  useEffect(() => {
    if (formData) {
      console.log(formData);
    }
  }, [formData])

  const buscarEgresso = async (idPessoa: number) => {
    const pessoaEgresso = await buscarEgressoPorPessoa(idPessoa);
    return pessoaEgresso;
  }

  const handleChange = (key: keyof Egresso, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  const handlePessoaChange = (key: keyof Pessoa, value: string | number | undefined) => {
    setFormData((prev) => ({
      ...prev,
      pessoa: {
        ...prev.pessoa,
        [key]: value,
      },
    }));
  };

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
                <Label htmlFor="pessoa.nomePessoa" value="Nome" />
                <TextInput id="pessoa.nomePessoa" value={formData.pessoa.nomePessoa} onChange={(e) => handlePessoaChange("nomePessoa", e.target.value)} disabled={isViewMode} required={!isViewMode} />
              </div>
              <div>
                <Label htmlFor="pessoa.nomeSocial" value="Nome Social" />
                <TextInput id="pessoa.nomeSocial" value={formData.pessoa.nomeSocial || ""} onChange={(e) => handlePessoaChange("nomeSocial", e.target.value)} disabled={isViewMode} />
              </div>
              <div>
                <Label htmlFor="pessoa.cpf" value="CPF" />
                <TextInput id="pessoa.cpf" value={formData.pessoa.cpf} onChange={(e) => handlePessoaChange("cpf", e.target.value)} disabled={isViewMode} required={!isViewMode} />
              </div>
              <div>
                <Label htmlFor="pessoa.email" value="Email" />
                <TextInput id="pessoa.email" type="email" value={formData.pessoa.email || ""} onChange={(e) => handlePessoaChange("email", e.target.value)} required={!isViewMode} disabled={isViewMode} />
              </div>
              <div>
                <Label htmlFor="pessoa.tipoPessoa" value="Tipo de Pessoa" />
                <Select id="pessoa.tipoPessoa" value={formData.pessoa.tipoPessoa} onChange={(e) => handlePessoaChange("tipoPessoa", e.target.value)} disabled={isViewMode} required={!isViewMode}>
                  <option value="">Selecione o tipo</option>
                  {tipos.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <Label htmlFor="pessoa.dataNascimento" value="Data de Nascimento" />
                <Datepicker
                  id="pessoa.dataNascimento"
                  value={formData.pessoa.dataNascimento}
                  onSelectedDateChanged={(date) => {
                    if (date) {
                      handlePessoaChange("dataNascimento", date.toISOString());
                    } else {
                      handlePessoaChange("dataNascimento", "");
                    }
                  }}
                  showTodayButton={false}
                  showClearButton={false}
                  labelClearButton="Limpar"
                  disabled={isViewMode}
                />
              </div>
              <div>
                <Label htmlFor="pessoa.genero" value="Gênero" />
                <TextInput id="pessoa.genero" value={formData.pessoa.genero || ""} onChange={(e) => handlePessoaChange("genero", e.target.value)} disabled={isViewMode} />
              </div>
              <div>
                <Label htmlFor="pessoa.identidadeGenero" value="Identidade de Gênero" />
                <TextInput id="pessoa.identidadeGenero" value={formData.pessoa.identidadeGenero || ""} onChange={(e) => handlePessoaChange("identidadeGenero", e.target.value)} disabled={isViewMode} />
              </div>
              <div>
                <Label htmlFor="pessoa.orientacaoSexual" value="Orientação Sexual" />
                <TextInput id="pessoa.orientacaoSexual" value={formData.pessoa.orientacaoSexual || ""} onChange={(e) => handlePessoaChange("orientacaoSexual", e.target.value)} disabled={isViewMode} />
              </div>
              <div>
                <Label htmlFor="pessoa.nacionalidade" value="Nacionalidade" />
                <TextInput id="pessoa.nacionalidade" value={formData.pessoa.nacionalidade || ""} onChange={(e) => handlePessoaChange("nacionalidade", e.target.value)} disabled={isViewMode} />
              </div>
              <div>
                <Label htmlFor="pessoa.raca" value="Raça" />
                <TextInput id="pessoa.raca" value={formData.pessoa.raca || ""} onChange={(e) => handlePessoaChange("raca", e.target.value)} disabled={isViewMode} />
              </div>
              {formData.pessoa.tipoPessoa == "EGRESSO" && (
                <div>
                  <Label htmlFor="regimePenal" value="Tipo de Pessoa" />
                  <Select id="regimePenal" value={formData.regimePena} onChange={(e) => handleChange("regimePena", e.target.value)} disabled={isViewMode} required={!isViewMode}>
                    <option value="">Selecione o Regime Penal</option>
                    {regimePena.map((tipo) => (
                      <option key={tipo} value={tipo}>
                        {tipo}
                      </option>
                    ))}
                  </Select>
                </div>
              )}
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