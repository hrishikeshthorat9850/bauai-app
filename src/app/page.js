export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-teal-100 p-8">
      <div className="max-w-2xl text-center bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Welcome to <span className="text-teal-600">ItemHum</span></h1>
        <p className="text-lg text-gray-700 mb-6">
          Built with ❤️ by <strong>Hrishikesh Thorat</strong>
        </p>
        <p className="text-gray-600 mb-4">
          ItemHum is a full-stack application where users can securely sign up, log in, and manage their items. Powered by Next.js, Prisma, PostgreSQL, and Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <a href="/signup" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition">Get Started</a>
          <a href="/items/my" className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition">View My Items</a>
        </div>
      </div>
    </main>
  );
}
