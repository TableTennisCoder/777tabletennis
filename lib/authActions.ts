"use server";

import bcrypt from "bcrypt";
import { signIn, signOut } from "@/lib/auth.js";
import { checkIfUserExists, createNewUser } from "@/lib/auth.js";

interface LoginResponse {
  error?: string;
  success?: boolean;
}

// handle login with Google
export const handleGoogleLogin = async () => {
  await signIn("google");
};

// handle login with credentials (email & password)
export const handleCredentialsLogin = async (
  formData: any
): Promise<LoginResponse | void> => {
  const { email, password } = formData;
  try {
    await signIn("credentials", { email, password });
  } catch (err: any) {
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};

// handle logout
export const handleLogout = async () => {
  await signOut();
};

// handle registration
export const handleRegistration = async (formData: any) => {
  const { username, email, password, passwordRepeat } = formData;

  if (password !== passwordRepeat) {
    return { error: "Password does not match" };
  }

  const userData = {
    username: username,
    email: email,
    password: await hashPassword(password.toString()),
  };

  try {
    const user = await checkIfUserExists(userData);

    // check if user already exists
    if (user) {
      console.log("User already exists");
      return { error: "User already exists" };
    }

    // if not, create new user
    const newUser = await createNewUser(userData);

    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Registration failed. Please try again later." };
  }
};

// hashes password before storing it in db
const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};
