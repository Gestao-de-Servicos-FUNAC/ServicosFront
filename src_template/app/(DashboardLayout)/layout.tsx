"use client";
import React from "react";
import Sidebar from "./layout/vertical/sidebar/Sidebar";
import Header from "./layout/vertical/header/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full min-h-screen">
      <div className="page-wrapper flex w-full">
        <Sidebar />
        <div className="body-wrapper w-full bg-white dark:bg-dark">
          <Header />
          <div className="bg-lightgray mr-3 rounded-page min-h-[90vh]">
            <div className={`container mx-auto  py-30`}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
