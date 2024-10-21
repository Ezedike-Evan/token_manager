import WalletContext from "@/contexts/walletContext";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Token Flow | Mint, manage and trade",
  description: "Mint, manage and trade fungible tokens and NFTs on solana with ease from one site"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WalletContext>
          {children}
        </WalletContext>
      </body>
    </html>
  );
}
