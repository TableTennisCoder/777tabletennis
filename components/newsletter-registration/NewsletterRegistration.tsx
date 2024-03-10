import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import NewsletterImg from "@/public/newsletter.png";

const NewsletterRegistration = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 relative border border-borderColor rounded-lg">
      <div
        className="w-full"
        style={{ maxHeight: "250px", aspectRatio: "16/8" }}
      >
        <div
          className="shadow-lg rounded-lg overflow-hidden w-full h-full relative"
          style={{
            boxShadow: "0 0 20px rgba(155, 53, 227, 0.1)", // Box shadow with a darker tint
          }}
        >
          <div className="absolute inset-0 flex items-end">
            <Image
              src={NewsletterImg}
              alt="Newsletter"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))",
              }}
            ></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="flex flex-col items-center text-center text-white p-7">
              <h1 className="font-bold sm:text-3xl mb-2 uppercase">
                Subscribe to our Newsletter
              </h1>
              <p className="hidden sm:flex sm:text-sm mb-4 w-96">
                Sign up to our newsletter and be the first to know about new
                products, events, and special offers.
              </p>
              <div className="flex max-w-sm items-center justify-center space-x-2">
                <Input type="email" placeholder="Email" />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterRegistration;
