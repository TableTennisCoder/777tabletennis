import Link from "next/link";
import { Button } from "../ui/button";
import NavLink from "./NavLink";
import { navLinks } from "./navLinks.js";

// ADD BETTER TYPE HERE
import { TSession } from "@/types/types";
import { handleLogout } from "@/lib/authActions";

const Links = ({ session }: { session: any }) => {
  return (
    <nav className="mx-5 hidden items-center space-x-2 lg:space-x-3 md:flex">
      {navLinks.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
      {session?.user ? (
        <>
          <NavLink item={{ title: "Profile", path: "/profile" }} />
          {session.user.isAdmin && (
            <NavLink item={{ title: "AdminPanel", path: "/admin" }} />
          )}
          {(session.user?.isAuthor || session.user?.isAdmin) && (
            <NavLink item={{ title: "Create", path: "/create" }} />
          )}
          <form action={handleLogout}>
            <Button variant="ghost">Logout</Button>
          </form>
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
