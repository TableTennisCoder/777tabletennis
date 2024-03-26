"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Button } from "@/components/ui/button";

import GoogleIcon from "../icons/GoogleIcon";

import { handleRegistration } from "@/lib/authActions";
import { handleGoogleLogin } from "@/lib/authActions";

import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [registrationError, setRegistrationError] = useState<string | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  // submit the form and register the user if inputs are correct
  const onSubmit = async (data: any) => {
    try {
      const result = await handleRegistration(data);

      if (result?.success) {
        reset();
      } else {
        setRegistrationError(result?.error!);
      }
    } catch (error) {
      setRegistrationError("Registration failed. Please try again later");
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-7 mt-10"
      >
        <div className="grid w-full items-center gap-2.5">
          <Label htmlFor="username">
            Username<span className="text-[#ff4238]">*</span>
          </Label>
          <Input
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 5,
                message: "The username must be at least 5 characters long",
              },
              maxLength: {
                value: 20,
                message: "The username may be a maximum of 20 characters long.",
              },
              pattern: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5,20}$/,
            })}
            type="text"
            placeholder="TimoBoll337"
            name="username"
          />
          {errors.username && (
            <p className="text-red-500">{`${errors.username.message}`}</p>
          )}
        </div>
        <div className="grid w-full items-center gap-2.5">
          <Label htmlFor="email">
            Email<span className="text-[#ff4238]">*</span>
          </Label>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                message: "Invalid email format",
              },
            })}
            type="email"
            placeholder="you@example.com"
            name="email"
          />
          {errors.email && (
            <p className="text-red-500">{`${errors.email.message}`}</p>
          )}
        </div>
        <div className="grid w-full items-center gap-2.5">
          <Label htmlFor="password">
            Password<span className="text-[#ff4238]">*</span>
          </Label>
          <div className="relative">
            <Input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "The password must be at least 5 characters long",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+<>?]).{8,}$/,
                  message: "Invalid password",
                },
              })}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              name="password"
            />
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
            <p className="text-red-500">{`${errors.password.message}`}</p>
          )}
        </div>
        <div className="grid w-full items-center gap-2.5">
          <Label htmlFor="passwordRepeat">
            Confirm Password<span className="text-[#ff4238]">*</span>
          </Label>
          <div className="relative">
            <Input
              {...register("passwordRepeat", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === getValues("password") || "Password must match",
              })}
              type={showPassword2 ? "text" : "password"}
              placeholder="••••••••"
              name="passwordRepeat"
            />
            <span
              onClick={togglePasswordVisibility2}
              className="absolute inset-y-0 right-0 flex items-center px-2 opacity-50"
            >
              {showPassword2 ? (
                <EyeOff color="#8593A7" size={20} />
              ) : (
                <Eye color="#8593A7" size={20} />
              )}
            </span>
          </div>
          {errors.passwordRepeat && (
            <p className="text-red-500">{`${errors.passwordRepeat.message}`}</p>
          )}
        </div>
        {registrationError && (
          <p className="text-red-500 text-center mt-4">{registrationError}</p>
        )}

        <Button className="bg-[#F02D65] text-white hover:bg-[#F52E67]">
          Register
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

      <form action={handleGoogleLogin}>
        <Button className="w-full mt-6 mb-6">
          <GoogleIcon />
          Sign Up with Google
        </Button>
      </form>

      <div className="flex items-center justify-center">
        <span className="text-textGray text-sm">
          Already got an account?{" "}
          <Link href="/signin" className="underline text-white">
            Sign In Now
          </Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;
