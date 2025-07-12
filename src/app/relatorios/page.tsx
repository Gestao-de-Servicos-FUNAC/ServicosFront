"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Table } from "flowbite-react";

const page = () => {
  return (
    <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-primary">Relatórios</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
          <Icon icon="solar:download-outline" className="mr-2 inline-block" />
          Exportar CSV
        </button>
      </div>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Título</Table.HeadCell>
          <Table.HeadCell>Data</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {[1, 2, 3].map((id) => (
            <Table.Row key={id}>
              <Table.Cell>{id}</Table.Cell>
              <Table.Cell>Relatório {id}</Table.Cell>
              <Table.Cell>2025-07-10</Table.Cell>
              <Table.Cell>Concluído</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
};

export default page;
