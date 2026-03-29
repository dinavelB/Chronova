import * as z from "zod";

export const OtpSchema = z.object({
  otp: z
    .string()
    .length(6, "OTP must be exactly 6 digits")
    .regex(/^\d+$/, "OTP must contain only numbers"),
});

export type OtpType = z.infer<typeof OtpSchema>;
