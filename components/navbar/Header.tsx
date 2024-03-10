"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";

import Links from "./Links";
import MobileLinks from "./MobileLinks";

import Logo from "../../public/777.png";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sm:flex sm:justify-between border-b border-borderColor bg-background sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-50">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-6 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="ml-4 lg:ml-0">
              <Image src={Logo} alt="777tabletennis" height={50} />
            </Link>
          </div>
          {/* Sheet / Burger Menu */}
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 md:hidden w-6" />
            </SheetTrigger>
            <SheetContent className="min-w-full pt-14 flex justify-center">
              <div className="w-28">
                <MobileLinks />
              </div>
            </SheetContent>
          </Sheet>
          <Links />
        </div>
      </Container>
    </header>
  );
};

export default Header;
