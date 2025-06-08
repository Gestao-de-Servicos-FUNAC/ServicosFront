"use client";
import { logoutUser } from "@/api/services/auth.service";

const page = () => {
  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  };

  return (
    <div className="min-h-screen min-w-full flex flex-col items-center justify-center gap-2">
      Logado :)
      <button
        className="bg-red-500 text-white p-2 rounded-2 rounded-md"
        onClick={() => handleLogout()}
      >
        deslogar
      </button>
    </div>
  );
};

export default page;
