import React from "react";
import Image from "next/image";
import AuthLayout from "@/components/ui/AuthLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Profile = () => {
  return (
    <AuthLayout left={false} img="/wang.png">
      <h1 className="font-black text-3xl mb-6">User Profile</h1>
      <Card className="bg-[transparent] mb-10">
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>Manage user profile</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row gap-6">
          <div className="w-3/12">
            <Image
              alt="profile image"
              src="/profileimage.webp"
              width={148}
              height={148}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-y-6 w-9/12">
            <div className="grid w-full items-center gap-2.5">
              <Label htmlFor="username">Username</Label>
              <Input type="text" name="username" />
            </div>
            <div className="grid w-full items-center gap-2.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[transparent] mb-10">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>
            Manage personal information settings
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-6">
          <div className="flex flex-row justify-between gap-4">
            <div className="grid w-full items-center gap-2.5">
              <Label htmlFor="firstname">First Name</Label>
              <Input type="text" name="firstname" />
            </div>
            <div className="grid w-full items-center gap-2.5">
              <Label htmlFor="lastname">Last Name</Label>
              <Input type="text" name="lastname" />
            </div>
          </div>
          <div className="flex flex-row justify-between gap-4">
            <div className="grid w-full items-center gap-2.5">
              <Label htmlFor="age">Age</Label>
              <Input type="number" name="age" />
            </div>
            <div className="grid w-full items-center gap-2.5">
              <Label htmlFor="nationality">Nationality</Label>
              <Input type="text" name="nationality" />
            </div>
          </div>
          <div className="grid w-full items-center gap-2.5">
            <Label htmlFor="club">Club</Label>
            <Input type="text" name="club" />
          </div>
        </CardContent>
      </Card>
      <Button className="bg-[#F02D65] text-white hover:bg-[#F52E67] w-1/5">
        Save changes
      </Button>
    </AuthLayout>
  );
};

export default Profile;
