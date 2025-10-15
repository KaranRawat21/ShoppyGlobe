import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-[#f8f8f9] px-4">
      <h1 className="text-8xl font-extrabold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mb-6 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
        Try going back to the homepage.
      </p>

      <Link
        to="/"
        className="bg-black text-white font-bold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
      >
        Go Home
      </Link>
    </div>
  );
}
