import { useMutation } from "@tanstack/react-query";
import { LoginService } from "modules/services/register";

// a custom hook is called by the function name
//  it returns a predefined hook
// use useQuery if the request is get
// use useMutation if the request is patch, delete, and post
export function useLogin() {
  return useMutation({
    mutationFn: LoginService,
    onSuccess: (data) => {
      console.log("Login success:", data);
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
}
