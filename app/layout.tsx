import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "AI Supply Chain",
  description: "Typed graph of AI applications and their supply-chain dependencies."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
