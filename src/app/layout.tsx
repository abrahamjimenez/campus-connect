import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Campus Connect",
  description: "Software as a Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header><Header/></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
