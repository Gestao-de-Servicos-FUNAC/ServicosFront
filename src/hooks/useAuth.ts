import { useState } from "react";
import { auth } from "@/api/services/auth.service";
import { setCookie } from "nookies";

export function useAuth() {
  const [loading, setLoading] = useState(false);

  const signIn = async (login: string, password: string) => {
    setLoading(true);
    try {
      const { token } = await auth({ login, password });
      setCookie(undefined, "token", token, {
        maxAge: 60 * 60 * 2, // 2h
        path: "/",
      });
    } finally {
      setLoading(false);
    }
  };

  return { signIn, loading };
}
