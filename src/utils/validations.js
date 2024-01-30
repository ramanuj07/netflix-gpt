import { z } from "zod";

// Regular expression pattern for password validation
const passwordPattern =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Validation schema for user login
export const userLoginSchema = (isSignUp) => {
  if (isSignUp) {
    return z
      .object({
        name: z.string().min(2, "Name is required"),
        email: z.string().email("Invalid email address"),
        password: z
          .string()
          .min(8, "Password must be at least 8 characters long")
          .regex(
            passwordPattern,
            "Password must contain at least one letter, one number, and one special character"
          ),
        confirmPassword: z.string(),
      })
      .refine(
        // Confirm password matches the password
        ({ confirmPassword, password }) => confirmPassword === password,
        { message: "The passwords did not match", path: ["confirmPassword"] }
      );
  } else {
    return z.object({
      email: z.string().email("Invalid email address"),
      password: z.string().min(8, "Password is required"),
    });
  }
};
