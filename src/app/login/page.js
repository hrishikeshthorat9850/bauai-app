"use client";

import { signIn } from "next-auth/react";  // Corrected import for signIn
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");  // For error handling
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Attempt to sign in with credentials
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false, // Prevent automatic redirect by NextAuth
    });

    // Handle successful login or show error message
    if (res?.ok) {
      router.push("/items");  // Redirect to /items after successful login
    } else {
      setErrorMessage("Invalid credentials");  // Show error message if login fails
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="space-y-4 p-8 shadow-xl rounded-xl bg-white">
        <h2 className="text-2xl font-bold">Login</h2>
        
        {/* Show error message if login fails */}
        {errorMessage && (
          <div className="text-red-600 text-sm">{errorMessage}</div>
        )}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded"
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full rounded"
          placeholder="Password"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
