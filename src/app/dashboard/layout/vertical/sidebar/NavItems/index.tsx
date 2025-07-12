"use client";
import React from "react";
import { ChildItem } from "../Sidebaritems";
import { Sidebar } from "flowbite-react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemsProps {
  item: ChildItem;
  nested?: boolean; // <- nova prop para saber se está dentro de um NavCollapse
}

const NavItems: React.FC<NavItemsProps> = ({ item, nested = false }) => {
  const pathname = usePathname();
  const isActive = item.url === pathname;

  const baseClass =
    "group/link rounded-md mb-1 px-4 py-3 text-[15px] flex items-center gap-3 leading-[normal]";

  const activeBgClass = nested
    ? "bg-lightprimary text-primary" // dentro do Collapse
    : "bg-primary text-white"; // item de primeiro nível

  const inactiveClass =
    "text-link hover:bg-lightprimary hover:text-primary dark:text-white dark:hover:text-primary";

  return (
    <Sidebar.Item
      href={item.url}
      as={Link}
      className={`${baseClass} ${isActive ? activeBgClass : inactiveClass}`}
    >
      <span className="flex gap-3 items-center truncate">
        {item.icon ? (
          <Icon
            icon={item.icon}
            className={`transition-all duration-150 ${
              isActive
                ? nested
                  ? "text-primary"
                  : "text-white"
                : "text-gray-500 group-hover/link:text-primary"
            }`}
            height={18}
          />
        ) : (
          <span
            className={`h-[6px] w-[6px] mx-1.5 rounded-full ${
              isActive
                ? nested
                  ? "bg-primary"
                  : "bg-white"
                : "bg-darklink dark:bg-white group-hover/link:bg-primary"
            }`}
          ></span>
        )}
        <span className="max-w-36 overflow-hidden hide-menu">{item.name}</span>
      </span>
    </Sidebar.Item>
  );
};

export default NavItems;
