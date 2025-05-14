'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to BAUAI Web App</h1>
        <p className="text-lg text-gray-600 mb-6">
          Manage your items seamlessly. Secure login, fast access, and personalized content.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Link
            href="/signup"
            className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="/items"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
          >
            View Items
          </Link>
        </div>
        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}
