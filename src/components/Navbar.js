"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link href="/" className="font-bold text-lg">BAUAI App</Link>
      <div className="space-x-4">
        <Link href="/items">Items</Link>
        {session ? (
          <>
            <Link href="/items/new">New</Link>
            <Link href="/items/my">My Items</Link>
            <button onClick={() => signOut()} className="text-red-400">Logout</button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/signup">Register</Link> {/* Make sure this line exists */}
          </>
        )}
      </div>
    </nav>
  );
}
