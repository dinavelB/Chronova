import { api } from "lib/config/base-api";
import type { RegisteFormData } from "lib/schema/register";
import type { Login } from "modules/interface/register";

export async function LoginService(user: RegisteFormData): Promise<Login> {
  try {
    const res = await api.post("/", user);
    return res.data;
  } catch (e: any) {
    console.error("Login error:", e.message);
    throw e;
  }
}
