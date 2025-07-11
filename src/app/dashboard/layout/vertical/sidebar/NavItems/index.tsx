"use client";
import React from "react";
import { ChildItem } from "../Sidebaritems";
import { Sidebar } from "flowbite-react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemsProps {
  item: ChildItem;
}
const NavItems: React.FC<NavItemsProps> = ({ item }) => {
  const pathname = usePathname();
  const isActive = item.url === pathname;
  return (
    <>
      <Sidebar.Item
        href={item.url}
        as={Link}
        className={`${
          isActive
            ? "!text-white !bg-primary shadow-active"
            : "text-link bg-transparent group/link hover:bg-gray-100 dark:hover:bg-darkborder "
        } `}
      >
        <span className="flex gap-3 align-center items-center truncate">
          {item.icon ? (
            <Icon icon={item.icon} className={`${ isActive ? "text-white" : item.color} transition-all duration-150`} height={18} />
          ) : (
            <span
              className={`h-[6px] w-[6px] mx-1.5 rounded-full ${
                isActive
                  ? "!bg-white "
                  : "bg-darklink dark:bg-white group-hover/link:bg-primary"
              } `}
            ></span>
          )}
          <span className="max-w-36 overflow-hidden hide-menu">
            {item.name}
          </span>
        </span>
      </Sidebar.Item>
    </>
  );
};

export default NavItems;
