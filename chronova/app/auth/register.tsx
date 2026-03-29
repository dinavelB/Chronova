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
export default function BugReportForm() {
  const mutation = useRegister();

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
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md px-2 py-15">
        <CardHeader>
          <CardTitle className="text-center">Signup to Chronova</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FieldGroup>
              <FieldLabel>Email</FieldLabel>
              <Input
                className="h-10"
                placeholder="Enter your email"
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

            <Button
              type="submit"
              className="w-full h-12"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
