import React from "react";
import AuthLayout from "@/components/ui/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

const SignIn = async () => {
  return (
    <AuthLayout left={true} img="/boll.jpg">
      <h1 className="text-3xl mb-2">Welcome back</h1>
      <p className="text-textGray text-sm">Sign in to your account</p>
      <LoginForm />
    </AuthLayout>
  );
};

export default SignIn;
