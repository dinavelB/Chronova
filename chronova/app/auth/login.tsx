import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "lib/schema/login";
import type { LoginFormData } from "lib/schema/login";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { FieldError, FieldGroup, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button"; // Add this

export default function BugReportForm() {
  const {
    register, // register the input val
    handleSubmit, // he submit event
    formState: { errors }, // errors
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: LoginFormData) {
    console.log(data);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md px-2 py-15">
        <CardHeader>
          <CardTitle className="text-center">Login to Chronova</CardTitle>
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

            <Button type="submit" className="w-full h-12">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
