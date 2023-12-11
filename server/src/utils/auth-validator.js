import { z } from "zod";

const signupSchema = z.object({
  username: z
    .string({ required_error: "username is required." })
    .trim()
    .min(3, "username must be atleast 3 characters.")
    .max(30, "username should not be greater than 30 characters."),
  email: z
    .string({ required_error: "email is required." })
    .trim()
    .email({ message: "Invalid email." })
    .min(5, "email must be atleast 5 characters.")
    .max(255, "Email should not be greater than 255 characters."),
  phone: z
    .string({ required_error: "Phone number is required." })
    .trim()
    .min(10, "Phone number must be atleast 10 digit.")
    .max(20, "Phone number should not be grater than 20 digit."),
  password: z
    .string({ required_error: "password is required." })
    .min(7, "password must be atleast 7 characters.")
    .max(200, "password should not be greater than 200 characters."),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required." })
    .trim()
    .email({ message: "Invalid email." })
    .min(5, "email must be atleast 5 characters.")
    .max(255, "Email should not be greater than 255 characters."),
  password: z
    .string({ required_error: "password is required." })
    .min(7, "password must be atleast 7 characters.")
    .max(200, "password should not be greater than 200 characters."),
});

export { signupSchema, loginSchema };
