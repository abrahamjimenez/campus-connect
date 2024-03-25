import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

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
        <header>
          <Header />
        </header>
        <main>
          <MantineProvider>{children}</MantineProvider>
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
