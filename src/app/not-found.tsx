import Image from "next/image";
import React from "react";
import ErrorImg from "/public/images/backgrounds/errorimg.svg";
import { Button } from "flowbite-react";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Não encontrado",
};
const Error = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-white dark:bg-darkgray">
        <div className="text-center text-primary">
          <Image src={ErrorImg} alt="error" className="mb-4 w-[500px]" />
          <h1 className="text-ld text-4xl mb-6 text-primary">Ops!</h1>
          <h6 className="text-xl text-ld text-primary">
            A página que você está procurando não foi encontrada!
          </h6>
          <Button
            color={"primary"}
            as={Link}
            href="/"
            className="w-fit mt-6 mx-auto bg-primary"
          >
            Voltar
          </Button>
        </div>
      </div>
    </>
  );
};

export default Error;
