"use client";

import Link from "next/link";
import { Button } from "../ui/button";

import { usePathname } from "next/navigation";

type NavItem = {
  title: string;
  path: string;
};

type NavLinkProps = {
  item: NavItem;
};

const NavLink = ({ item }: NavLinkProps) => {
  const pathName = usePathname();

  return (
    <Button
      asChild
      variant="link"
      className={`${pathName === item.path && "bg-[#1A2434]"}, text-textColor`}
    >
      <Link href={item.path}>{item.title}</Link>
    </Button>
  );
};

export default NavLink;
