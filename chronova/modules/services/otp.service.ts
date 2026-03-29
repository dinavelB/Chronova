import { api } from "lib/config/base-api";
import { OtpType } from "lib/schema/otp";
// import type { Login } from "modules/interface/register";

export async function OtpService(otp: OtpType) {
  try {
    const res = await api.post("/verify-otp", otp);
    return res.data;
  } catch (e: any) {
    console.error("Login error:", e.message);
    throw e;
  }
}
