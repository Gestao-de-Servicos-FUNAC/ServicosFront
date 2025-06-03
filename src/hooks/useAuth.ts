import { useState } from "react";
import { setCookie } from "nookies";
import { loginUser } from "@/api/services/auth.service";

export function useAuth() {
  const [loading, setLoading] = useState(false);

  const signIn = async (login: string, senha: string) => {
    setLoading(true);
    try {
      const { token } = await loginUser({ login, senha });
      console.log(token, "tolen");
      setCookie(undefined, "token", token, {
        maxAge: 60 * 60 * 2,
        path: "/",
      });
    } finally {
      setLoading(false);
    }
  };

  return { signIn, loading };
}
