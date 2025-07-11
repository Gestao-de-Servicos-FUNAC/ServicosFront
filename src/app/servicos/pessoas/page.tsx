"use client";
import React, { useEffect, useState } from "react";
import { Table, Button, Badge, Modal } from "flowbite-react";
import { HiEye, HiPencilAlt, HiTrash } from "react-icons/hi";
import SimpleBar from "simplebar-react";
import FiltroPessoa from "./filtroPessoa";
import { Pessoa, PessoaFilterParams, PessoaModalMode } from "@/types/pessoa";
import { set } from "lodash";
import { Icon } from "@iconify/react/dist/iconify.js";
import ModalPessoa from "./modalPessoa";
import { atualizarPessoa, cadastrarPessoa, listarPessoas, removerPessoa } from "@/hooks/pessoa";

const PessoaListPage = () => {

  const [pessoaList, setPessoaList] = useState<Pessoa[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<PessoaModalMode>('create');
  const [selectedPessoa, setSelectedPessoa] = useState<Pessoa | undefined>();
  const [modalExcluirOpen, setModalExcluirOpen] = useState(false);
  const [pessoaParaExcluir, setPessoaParaExcluir] = useState<Pessoa | null>(null);

  const columns = [
    { key: "nomePessoa", name: "Nome" },
    { key: "cpf", name: "CPF" },
    { key: "email", name: "Email" },
    { key: "tipoPessoa", name: "Tipo" },
    { key: "dataNascimento", name: "Data de Nascimento" },
    { key: "acoes", name: "Ações" },
  ];

  useEffect(() => {
    listarDados()
  }, [])

  const listarDados = async () => {
    const response = await listarPessoas();
    setPessoaList(response.pessoas);
  }

  const handleFilter = async (filterParams: PessoaFilterParams) => {
    const response = await listarPessoas();
    const filteredList = response.pessoas.filter((pessoa) => {
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

  const handleSubmit = async (formData: Pessoa) => {
    if (modalMode === 'create') {
      const response = await cadastrarPessoa(formData);
      listarDados();
    } else if (modalMode === 'edit' && selectedPessoa) {
      const response = await atualizarPessoa(formData);
      listarDados();
    }
    handleModalClose();
  };

  const deletar = async (idPessoa: number) => {
    await removerPessoa(idPessoa);
    listarDados();
  }

  const abrirModalExcluir = (pessoa: Pessoa) => {
    setPessoaParaExcluir(pessoa);
    setModalExcluirOpen(true);
  };

  const fecharModalExcluir = () => {
    setPessoaParaExcluir(null);
    setModalExcluirOpen(false);
  };

  const confirmarExclusao = async () => {
    if (pessoaParaExcluir) {
      await deletar(pessoaParaExcluir.idPessoa);
      fecharModalExcluir();
    }
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
                            abrirModalExcluir(pessoa)
                          }} disabled={pessoa.tipoPessoa == "ADMINISTRADOR"}>
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

      <Modal show={modalExcluirOpen} onClose={fecharModalExcluir}>
        <Modal.Header>Confirmação de Exclusão</Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-700 dark:text-gray-300">
              Deseja realmente excluir <strong>{pessoaParaExcluir?.nomePessoa}</strong>?
            </h3>
            <div className="flex justify-center gap-4 mt-6">
              <Button color="failure" onClick={confirmarExclusao}>
                Confirmar
              </Button>
              <Button color="gray" onClick={fecharModalExcluir}>
                Cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

    </div >
  );
};

export default PessoaListPage;