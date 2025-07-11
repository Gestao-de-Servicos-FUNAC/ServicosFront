"use client";
import React from "react";
import Image from "next/image";
import Logo from "/public/images/logos/logo.svg";
import Link from "next/link";
const FullLogo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <Image src={Logo} alt="logo" className={className} />
    </Link>
  );
};

export default FullLogo;
