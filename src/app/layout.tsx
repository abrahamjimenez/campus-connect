import React from "react";
import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
