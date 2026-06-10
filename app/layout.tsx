import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "OSAI Supply Chain",
  description: "Typed graph of user-facing open-source AI applications and their supply-chain dependencies."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
