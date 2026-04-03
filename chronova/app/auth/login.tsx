import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "lib/schema/register";
import type { RegisteFormData } from "lib/schema/register";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { FieldError, FieldGroup, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

// Skeleton Component with smooth fade-out
function FormSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {/* Back button skeleton */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gray-200 rounded" />
        <div className="w-40 h-5 bg-gray-200 rounded" />
      </div>

      {/* Header skeleton */}
      <div className="space-y-2 mt-4">
        <div className="w-64 h-8 bg-gray-200 rounded" />
        <div className="w-80 h-6 bg-gray-200 rounded" />
        <div className="h-12 bg-gray-200 rounded mt-5" />
      </div>

      {/* Form fields skeleton */}
      <div className="space-y-4 mt-6">
        <div className="space-y-2">
          <div className="w-12 h-4 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>

        <div className="space-y-2">
          <div className="w-16 h-4 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>

        <div className="w-32 h-5 bg-gray-200 rounded mt-4" />

        <div className="w-full h-12 bg-gray-200 rounded" />
      </div>
    </div>
  );
}

interface LoginFormProps {
  isModal?: boolean;
  onClose?: () => void;
}

export default function LoginForm({
  isModal = false,
  onClose,
}: LoginFormProps) {
  const nav = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisteFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    // Show skeleton for 1 second then fade in the actual form
    const skeletonTimer = setTimeout(() => {
      setShowSkeleton(false);
      // Trigger form animation after skeleton disappears
      setTimeout(() => setIsVisible(true), 50);
    }, 1000);

    return () => clearTimeout(skeletonTimer);
  }, []);

  async function onSubmit(data: RegisteFormData) {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Login failed. Please try again.");
        setIsLoading(false);
        return;
      }

      const result = await response.json();
      // Handle successful login - navigate or store token
      nav("/");
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      setIsLoading(false);
    }
  }

  return (
    <div
      className={`flex items-center justify-center ${isModal ? "" : "min-h-screen bg-custom-image"}`}
    >
      <Card
        className={`
          w-3xl max-w-xl py-15 px-10
          transition-all duration-500 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          rounded-lg shadow-2xl border-primary/20
          ${isModal ? "bg-card" : ""}`}
      >
        {/* Show skeleton while loading */}
        {showSkeleton ? (
          <FormSkeleton />
        ) : (
          <>
            <div
              className="flex items-center font-header-form text-lg cursor-pointer hover:text-primary transition-colors"
              onClick={() => {
                if (isModal && onClose) return onClose();
                nav("/");
              }}
            >
              <img src="/Back.svg" alt="" />
              <p>{isModal ? "Close" : "Back to landing page"}</p>
            </div>

            <CardHeader className="flex flex-col gap-2">
              <CardTitle className="text-left text-2xl font-extrabold font-header-form mt-2">
                Welcome back
              </CardTitle>
              <p className="text-lg font-header-form">
                Sign in to your Chronova account
              </p>
              <div className="h-12 border-2 w-full mt-5 rounded-md flex items-center px-10 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer">
                <img src="/Google.jpg" alt="" className="w-6 h-6" />
                <p className="text-center ml-23">Sign in with google</p>
              </div>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="text-center text-sm text-muted-foreground my-6">
                  Or continue with email
                </div>

                <FieldGroup>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    className="h-10"
                    placeholder="your@email.com"
                    type="email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <FieldError>{errors.email.message}</FieldError>
                  )}
                </FieldGroup>

                <FieldGroup>
                  <div className="flex justify-between items-center">
                    <FieldLabel>Password</FieldLabel>
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline transition-colors"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <Input
                    className="h-10"
                    type="password"
                    placeholder="Enter your password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <FieldError>{errors.password.message}</FieldError>
                  )}
                </FieldGroup>

                {errorMessage && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-md text-sm text-center animate-in fade-in slide-in-from-top-2 duration-300">
                    {errorMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full h-12 font-header-form text-md relative overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
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
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Signing in...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </Button>

                <p className="font-header-form text-lg text-center mt-6">
                  Don't have an account?{" "}
                  <span
                    className="text-primary cursor-pointer hover:underline transition-all"
                    onClick={() => nav("/auth/register")}
                  >
                    Sign up
                  </span>
                </p>
              </form>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
}
