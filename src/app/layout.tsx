import React from "react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "simplebar-react/dist/simplebar.min.css";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import customTheme from "@/theme/custom-theme";
import "../styles/globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Funac",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/logos/favicon.svg"
          type="image/svg+xml"
        />
        <ThemeModeScript />
      </head>
      <body className={`${manrope.className}`}>
        <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>
      </body>
    </html>
  );
}
