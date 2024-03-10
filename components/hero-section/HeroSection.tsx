import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MainNews from "@/public/kallberg.png";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <Link href="/news/12">
      <div className="flex flex-col lg:flex-row gap-5 relative border border-borderColor rounded-lg cursor-pointer">
        <div
          className="w-full"
          style={{ maxHeight: "650px", aspectRatio: "16/12" }}
        >
          <div
            className="shadow-lg rounded-lg overflow-hidden w-full h-full relative"
            style={{
              background: "#E2E8F0",
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)", // Box shadow with a darker tint
            }}
          >
            <Image
              src={MainNews}
              alt="Dima Ovtcharov wechselt nach Fulda"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 top-0 w-100 h-100 flex items-end"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, .9) 20%, rgba(0, 0, 0, .7) 60%, rgba(0, 0, 0, .3) 70%)",
              }}
            >
              <div className="m-7 w-5/6">
                <h1 className="text-white font-bold lg:text-5xl mb-4 md:text-4xl text-3xl">
                  Ranking Stakes Set for First WTT Grand Smash of 2024
                </h1>
                <p className="text-sm mb-4">
                  Singapore Smash 2024 is almost here, and with it comes a whole
                  lot of ITTF Table Tennis World Ranking points. With 2000pts
                  sitting up top for the champions, the time is ripe to make
                  some big moves as the first quarter of the season hits its
                  conclusion. There are two sides to the coin though...
                </p>
                <Button variant="secondary">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HeroSection;
