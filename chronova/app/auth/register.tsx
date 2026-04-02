import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "lib/schema/register";
import type { RegisteFormData } from "lib/schema/register";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { FieldError, FieldGroup, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useRegister } from "lib/customhooks/useRegister";
import { getErrorMessage } from "lib/util/register.res.error";
import { Navigate, useNavigate } from "react-router";
export default function BugReportForm() {
  const mutation = useRegister();
  const nav = useNavigate();

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

  function onSubmit(userData: RegisteFormData) {
    mutation.mutate(userData); // builtin method in mutation
  }
  // pass the error from mutation backend response
  const errorMessage = getErrorMessage(mutation.error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-custom-image">
      <Card className="w-3xl max-w-xl py-15 px-10">
        <div
          className="flex items-center font-header-form text-lg cursor-pointer"
          onClick={() => nav("/")}
        >
          <img src="/Back.svg" alt="" />
          <p>Back to landing page</p>
        </div>
        <CardHeader className="flex flex-col gap-2">
          <CardTitle className="text-left text-2xl font-extrabold font-header-form mt-2">
            Create your account
          </CardTitle>
          <p className="text-lg font-header-form">
            Create your Chronova account to get started
          </p>
          <div className="h-12 border-2 w-full mt-5 radius rounded-md flex items-center px-10 ">
            <img src="/Google.jpg" alt="" />
            <p className="text-center ml-23">Sign up with google</p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FieldGroup className="flex flex-row gap-4 mt-5">
              <div className="flex-1">
                <FieldLabel>Firstname</FieldLabel>
                <Input
                  className="h-10"
                  placeholder="Enter your firstname"
                  {...register("firstname")}
                />
                {errors.firstname && (
                  <FieldError>{errors.firstname.message}</FieldError>
                )}
              </div>

              <div className="flex-1">
                <FieldLabel>Lastname</FieldLabel>
                <Input
                  className="h-10"
                  placeholder="Enter your lastname"
                  {...register("lastname")}
                />
                {errors.lastname && (
                  <FieldError>{errors.lastname.message}</FieldError>
                )}
              </div>
            </FieldGroup>

            <FieldGroup>
              <FieldLabel>Email</FieldLabel>
              <Input
                className="h-10"
                placeholder="sampleemail@gmail.com"
                {...register("email")}
              />
              {errors.email && <FieldError>{errors.email.message}</FieldError>}
            </FieldGroup>

            <FieldGroup>
              <FieldLabel>Password</FieldLabel>
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

            {/* Display backend error message */}
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm text-center">
                {errorMessage}
              </div>
            )}

            <p className="font-header-form text-lg mt-10">
              Already have an account?{" "}
              <span
                className="text-primary cursor-pointer"
                onClick={() => nav("/auth/login")}
              >
                Login
              </span>
            </p>

            <Button
              type="submit"
              className="w-full h-12 font-header-form text-md"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Creating account..." : "Create Acccount"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
