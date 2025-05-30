import { TLoginRequest, TLoginResponse } from "@/types/auth";
import api from "../axios";

export const auth = async (data: TLoginRequest): Promise<TLoginResponse> => {
  console.log(data);
  const response = await api.post("/auth/login", data);
  console.log(response);
  return response.data;
};
