"use client";
import React, { useState } from "react";
import { Table, Button, Badge } from "flowbite-react";
import { HiEye, HiPencilAlt, HiTrash } from "react-icons/hi";
import SimpleBar from "simplebar-react";
import FiltroPessoa from "./filtroPessoa";
import { Pessoa, PessoaFilterParams, PessoaModalMode } from "@/types/pessoa";
import { set } from "lodash";
import { Icon } from "@iconify/react/dist/iconify.js";
import ModalPessoa from "./modalPessoa";

const pessoas: Pessoa[] = [
  {
    idPessoa: 1,
    nomePessoa: "Carlos Henrique",
    email: "carlos@example.com",
    cpf: "111.111.111-11",
    tipoPessoa: "ADMINISTRADOR",
    dataNascimento: "15/05/1990",
    status: 1,
  },
  {
    idPessoa: 2,
    nomePessoa: "Ana Souza",
    email: "ana.souza@example.com",
    cpf: "888.888.888-88",
    tipoPessoa: "EGRESSO",
    dataNascimento: "15/05/1990",
    status: 1,
  },
  {
    idPessoa: 3,
    nomePessoa: "João Pedro",
    email: "joao.pedro@example.com",
    cpf: "999.999.999-99",
    tipoPessoa: "DEPENDENTE_EGRESSO",
    dataNascimento: "15/05/1990",
    status: 0,
  },
];

const PessoaListPage = () => {

  const [pessoaList, setPessoaList] = useState(pessoas);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<PessoaModalMode>('create');
  const [selectedPessoa, setSelectedPessoa] = useState<Pessoa | undefined>();

  const columns = [
    { key: "nomePessoa", name: "Nome" },
    { key: "cpf", name: "CPF" },
    { key: "email", name: "Email" },
    { key: "tipoPessoa", name: "Tipo" },
    { key: "dataNascimento", name: "Data de Nascimento" },
    { key: "acoes", name: "Ações" },
  ];

  const handleFilter = (filterParams: PessoaFilterParams) => {
    const filteredList = pessoas.filter((pessoa) => {
      return (
        (!filterParams.nome || pessoa.nomePessoa.toLowerCase().includes(filterParams.nome.toLowerCase())) &&
        (!filterParams.cpf || pessoa.cpf.includes(filterParams.cpf)) &&
        (!filterParams.tipoPessoa || pessoa.tipoPessoa === filterParams.tipoPessoa) &&
        (!filterParams.dataNascimento || pessoa.dataNascimento === filterParams.dataNascimento)
      );
    });
    setPessoaList(filteredList);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedPessoa(undefined);
    setModalMode('create');
  };

  const handleModalOpen = (mode: PessoaModalMode, pessoa?: Pessoa) => {
    setSelectedPessoa(pessoa);
    setModalMode(mode);
    setModalOpen(true);
  };

  const handleSubmit = (formData: Pessoa) => {
    console.log("Form Data:", formData);
    if (modalMode === 'create') {
      console.log("Cadastrado", formData);
    } else if (modalMode === 'edit' && selectedPessoa) {
      console.log("Editado", formData);
    }
    handleModalClose();
  };

  return (
    <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
      <div className="px-6 flex justify-between items-center mb-4">
        <h5 className="card-title">Lista de Pessoas</h5>


        <Button color="blue" onClick={() => handleModalOpen('create')}>
          <Icon icon="ic:baseline-add" /> Adicionar Pessoas
        </Button>
      </div>

      <FiltroPessoa onFilter={handleFilter} />

      <SimpleBar className="max-h-[600px]">
        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              {columns.map((col) => (
                <Table.HeadCell key={col.key} className="p-6">
                  {col.name}
                </Table.HeadCell>
              ))}
            </Table.Head>
            <Table.Body className="divide-y divide-border dark:divide-darkborder">
              {pessoaList.map((pessoa) => (
                <Table.Row key={pessoa.idPessoa}>
                  {columns.map((col) => (
                    <Table.Cell key={col.key} className="whitespace-nowrap">
                      {col.key === "acoes" ? (
                        <div className="flex gap-2">
                          <Button size="xs" color="gray" onClick={() => handleModalOpen('view', pessoa)}>
                            <HiEye className="w-4 h-4" />
                          </Button>
                          <Button size="xs" color="yellow" onClick={() => handleModalOpen('edit', pessoa)}>
                            <HiPencilAlt className="w-4 h-4" />
                          </Button>
                          <Button size="xs" color="failure" onClick={() => {
                            console.log(pessoa);
                          }}>
                            <HiTrash className="w-4 h-4" />
                          </Button>
                        </div>
                      ) : (
                        pessoa[col.key as keyof Pessoa]
                      )}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </SimpleBar >

      <ModalPessoa
        mode={modalMode}
        open={modalOpen}
        pessoa={selectedPessoa}
        onSubmit={handleSubmit}
        onClose={handleModalClose}
      />
    </div >
  );
};

export default PessoaListPage;