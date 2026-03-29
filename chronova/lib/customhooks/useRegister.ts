import { useMutation } from "@tanstack/react-query";
import { LoginService } from "modules/services/register";
import { OtpService } from "modules/services/otp.service";
import { useNavigate } from "react-router";
// a custom hook is called by the function name
//  it returns a predefined hook
// use useQuery if the request is get
// use useMutation if the request is patch, delete, and post
export function useRegister() {
  const nav = useNavigate(); // always call at top when instantiating hooks
  return useMutation({
    mutationFn: LoginService,
    onSuccess: (data) => {
      console.log("Login success:", data);

      nav("/auth/otp");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
}

export function useOtp() {
  const nav = useNavigate(); // always call at top when instantiating hooks
  return useMutation({
    mutationFn: OtpService,
    onSuccess: (data) => {
      console.log("Login success:", data);

      nav("/auth/otp");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
}
