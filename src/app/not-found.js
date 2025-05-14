export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="text-lg">Page Not Found</p>
        <a href="/" className="text-blue-500 underline">Go back home</a>
      </div>
    </div>
  );
}
