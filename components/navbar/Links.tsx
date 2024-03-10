import Link from "next/link";
import { Button } from "../ui/button";
import NavLink from "./NavLink";
import { navLinks } from "./navLinks.js";

// TEMPORARY
const session = true;
const isAdmin = true;

const Links = () => {
  return (
    <nav className="mx-5 hidden items-center space-x-2 lg:space-x-3 md:flex">
      {navLinks.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: "Create", path: "/create" }} />}
          <Button variant="ghost">Logout</Button>
        </>
      ) : (
        <>
          <NavLink item={{ title: "Sign In", path: "/signin" }} />
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-pink-500"
          >
            <Link href="/signup">Sign Up</Link>
          </Button>
        </>
      )}
    </nav>
  );
};

export default Links;
