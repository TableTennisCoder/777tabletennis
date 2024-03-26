import Image from "next/image";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  img: string;
  left: boolean;
}

const AuthLayout = ({ children, img, left }: AuthLayoutProps) => {
  return (
    <div className="h-screen flex relative">
      <div className={`w-1/2 relative hidden lg:flex ${left ? "" : "order-2"}`}>
        <Image
          src={img}
          alt="Ma Long"
          fill
          objectFit="cover"
          className="opacity-70"
        />
        {left ? (
          <div className="absolute inset-0 bg-gradient-to-l from-[#0B1018] to-[#0b101833]"></div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1018] to-[#0b101833]"></div>
        )}
      </div>
      <div
        className={`w-full flex items-center justify-center p-10 md:p-24 lg:w-1/2 2xl:p-32 bg-gradient-to-r from-[#0B1018] to-[#0B1018] ${
          left ? "order-2 lg:order-1" : ""
        }`}
      >
        <div className="w-full flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
