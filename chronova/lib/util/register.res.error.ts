import { useRegister } from "lib/customhooks/useRegister";

// using hooks outside the react file violates
// set the error to anys
export const getErrorMessage = (error: any) => {
  if (!error) return null;

  if (error.response?.data?.error) {
    return error.response.data.error;
  }
  if (error.response?.data?.message) {
    return error.response.data.message;
  }
  return error.message || "An error occurred. Please try again.";
};
