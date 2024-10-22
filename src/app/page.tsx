'use client'
import WalletContext from "@/contexts/walletContext"; 
import NavBar from "@/components/navbar";
import NotConnected from "@/components/notConnected";

export default function Home() {
  return (
    <WalletContext>
      <header>
        <NavBar />
      </header>
      <main>
        <NotConnected />
      </main>
    </WalletContext>
  );
}
