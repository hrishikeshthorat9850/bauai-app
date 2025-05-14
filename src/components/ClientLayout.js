"use client";
import { SessionProvider } from "next-auth/react";
import Navbar from "./Navbar";

export default function ClientLayout({ children }) {
  return (
    <SessionProvider>
      <Navbar />
      <main className="p-4">{children}</main>
    </SessionProvider>
  );
}
