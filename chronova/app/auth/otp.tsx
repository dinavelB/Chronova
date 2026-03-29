import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { OtpSchema } from "lib/schema/otp";
import { OtpType } from "lib/schema/otp";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { FieldError, FieldGroup, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useOtp, useRegister } from "lib/customhooks/useRegister";
import { getErrorMessage } from "lib/util/register.res.error";

export default function OtpForm() {
  const mutation = useOtp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OtpType>({
    resolver: zodResolver(OtpSchema),
    defaultValues: {
      otp: "",
    },
  });

  function onSubmit(userData: OtpType) {
    mutation.mutate(userData);
  }
  // pass the error from mutation backend response
  const errorMessage = getErrorMessage(mutation.error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md shadow-xl border-0 rounded-2xl transition-all duration-300 hover:shadow-2xl">
        <CardHeader className="pb-6 pt-8">
          <div className="mx-auto w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-7 h-7 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <CardTitle className="text-center text-2xl font-bold text-gray-800">
            Enter OTP
          </CardTitle>
          <p className="text-center text-sm text-gray-500 mt-2">
            Please enter the verification code sent to your device
          </p>
        </CardHeader>
        <CardContent className="pb-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <FieldGroup>
              <FieldLabel className="text-sm font-semibold text-gray-700 mb-2 block">
                Verification Code
              </FieldLabel>
              <Input
                className="h-12 text-center text-lg tracking-widest font-mono border-2 focus:border-gray-400 focus:ring-gray-400 rounded-xl transition-all duration-200"
                placeholder="000000"
                maxLength={6}
                {...register("otp")}
              />
              {errors.otp && (
                <div className="mt-2 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-red-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <FieldError className="text-red-500 text-sm">
                    {errors.otp.message}
                  </FieldError>
                </div>
              )}
            </FieldGroup>

            {/* Display backend error message */}
            {errorMessage && (
              <div className="flex items-center gap-2 mt-2">
                <svg
                  className="w-4 h-4 text-red-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-red-500 text-sm">{errorMessage}</span>
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-12 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Verifying...
                </div>
              ) : (
                "Verify OTP"
              )}
            </Button>

            <div className="text-center text-sm text-gray-500 pt-2">
              Didn't receive the code?{" "}
              <button
                type="button"
                className="text-blue-700 hover:text-gray-900 font-medium hover:underline transition-colors"
                onClick={() => {
                  // Add resend logic here if needed
                }}
              >
                Resend OTP
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
