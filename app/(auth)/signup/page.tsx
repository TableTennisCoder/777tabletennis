import React from "react";
import AuthLayout from "@/components/ui/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";

const SignUp = () => {
  return (
    <AuthLayout left={true} img="/boll.jpg">
      <h1 className="text-3xl mb-2">Get started</h1>
      <p className="text-textGray text-sm">Create a new account</p>
      <RegisterForm />
    </AuthLayout>
  );
};

export default SignUp;
