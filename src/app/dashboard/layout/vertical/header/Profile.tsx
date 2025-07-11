import { Button, Dropdown } from "flowbite-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { logoutUser } from "@/api/services/auth.service";
import Logo from "@/components/ui/logo/Logo";
const Profile = () => {
  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  };
  return (
    <div className="relative group/menu">
      <Dropdown
        label=""
        className="rounded-sm w-44"
        dismissOnClick={false}
        renderTrigger={() => (
          <span className="h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary">
            <Image
              src="/images/logos/logo-icon.svg"
              alt="logo"
              height="35"
              width="35"
              className="rounded-full"
            />
          </span>
        )}
      >
        <Dropdown.Item
          as={Link}
          href="#"
          className="px-3 py-3 flex items-center bg-hover group/link w-full gap-3 text-dark"
        >
          <Icon icon="solar:user-circle-outline" height={20} />
          Meu Perfil
        </Dropdown.Item>

        <div className="p-3 pt-0 w-full">
          <Button
            size={"sm"}
            onClick={() => handleLogout()}
            className="mt-2 border border-primary text-primary bg-transparent hover:bg-red-500 hover:text-white outline-none focus:outline-none w-full"
          >
            Sair
          </Button>
        </div>
      </Dropdown>
    </div>
  );
};

export default Profile;
