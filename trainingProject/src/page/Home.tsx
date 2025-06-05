import { useAuth } from "../auth/authContext";

export default function Home() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-6">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-white/40">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome!
        </h1>
        <p className="text-gray-600 mb-8">
          You have successfully logged in.
        </p>

        <button
          onClick={logout}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-6 rounded-md hover:from-purple-600 hover:to-blue-600 transition duration-200 shadow-md"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
