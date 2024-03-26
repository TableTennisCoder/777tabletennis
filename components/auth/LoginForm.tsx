"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Button } from "@/components/ui/button";
import { Toaster } from "../ui/toaster";
import { useToast } from "../ui/use-toast";

import GoogleIcon from "../icons/GoogleIcon";

import { handleGoogleLogin, handleCredentialsLogin } from "@/lib/authActions";

import { useForm } from "react-hook-form";

import { ILoginResponse, IFormData, IFormErrors } from "@/lib/types";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<IFormData>();

  // submit the form and register the user if inputs are correct
  const onSubmit = async (data: any) => {
    try {
      const result: ILoginResponse | void = await handleCredentialsLogin(data);

      console.log(result);

      if (result?.success) {
        reset();
      } else {
        toast({
          variant: "destructive",
          title: "Invalid user credentials",
          description:
            "Oops! Looks like your serve missed the mark. Double-fault on the credentials. Let's try that again with a bit more spin! 🎾🔄",
        });
        setLoginError(result?.error!);
      }
    } catch (error) {
      setLoginError("Registration failed. Please try again later");
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-7 mt-10"
      >
        <div className="grid w-full items-center gap-2.5">
          <Label htmlFor="email">
            Email<span className="text-[#ff4238]">*</span>
          </Label>
          <Input
            type="email"
            placeholder="you@example.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <div className="text-red-500 text-sm">{errors.email.message}</div>
          )}
        </div>
        <div className="grid w-full items-center gap-2.5">
          <Label htmlFor="password">
            Password<span className="text-[#ff4238]">*</span>
          </Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              {...register("password", { required: "Password is required" })}
              className="relative"
            />
            {/* Password toggle button */}
            <span
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-2 opacity-50"
            >
              {showPassword ? (
                <EyeOff color="#8593A7" size={20} />
              ) : (
                <Eye color="#8593A7" size={20} />
              )}
            </span>
          </div>

          {errors.password && (
            <div className="text-red-500 text-sm">
              {errors.password.message}
            </div>
          )}
        </div>
        <Button
          type="submit"
          className="bg-[#F02D65] text-white hover:bg-[#F52E67]"
          disabled={isSubmitting}
        >
          Sign In
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-strong"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-[#161E2C] px-2 text-sm text-foreground">
              or
            </span>
          </div>
        </div>
      </form>

      <form action={handleGoogleLogin} className="flex flex-col gap-y-7 mt-6">
        <Button>
          <GoogleIcon />
          Continue with Google
        </Button>
      </form>

      <div className="flex items-center justify-center mt-6">
        <span className="text-textGray text-sm">
          Don&apos;st have an account?{" "}
          <Link href="/signup" className="underline text-white">
            Sign Up Now
          </Link>
        </span>
      </div>

      <Toaster />
    </div>
  );
};

export default LoginForm;
