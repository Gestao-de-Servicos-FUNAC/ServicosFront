import nookies from "nookies";
import api from "../axios";
export function setAuthToken(token: string, ctx: any = null) {
  nookies.set(ctx, process.env.NEXT_PUBLIC_BASE_TOKEN!, token, {
    maxAge: 60 * 60 * 5,
    path: "/",
    secure: true,
    sameSite: "lax",
  });
}

export function getAuthToken(ctx: any = null): string | null {
  const cookies = nookies.get(ctx);
  return cookies[process.env.NEXT_PUBLIC_BASE_TOKEN!] || null;
}

export function removeAuthToken(ctx: any = null) {
  nookies.destroy(ctx, process.env.NEXT_PUBLIC_BASE_TOKEN!);
}

export async function loginUser(req: {
  login: string;
  senha: string;
}): Promise<{ token: string }> {
  try {
    console.log("loginUser", req);
    const { data } = await api.post("/auth/login", req);

    setAuthToken(data.token);
    window.location.href = "/";
    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("Login failed. Please check your credentials.");
  }
}

export async function logoutUser(ctx: any = null) {
  removeAuthToken(ctx);
  window.location.href = "/login";
}
