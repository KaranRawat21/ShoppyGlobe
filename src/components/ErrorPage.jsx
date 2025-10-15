import { Link } from "react-router-dom";

export default function ErrorPage({ error }) {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] text-center p-6">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Something Went Wrong!</h1>

      <p className="text-lg text-gray-600 mb-2">
        {error?.response?.status === 404
          ? "The page or resource you’re looking for was not found."
          : error?.message || "An unexpected error occurred."}
      </p>

      <p className="text-sm text-gray-400 mb-6">
        Error Code: {error?.response?.status || "Unknown"}
      </p>

      <Link
        to="/"
        className="bg-black text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
