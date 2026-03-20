import { api } from "lib/config/base-api";
import type { LoginFormData } from "lib/schema/login";
import type { Login } from "modules/interface/login";

export async function LoginService(user: LoginFormData): Promise<Login> {
  try {
    const res = await api.post<Login>("/login", user);
    return res.data;
  } catch (e: any) {
    console.error("Login error:", e.message);
    throw e;
  }
}
