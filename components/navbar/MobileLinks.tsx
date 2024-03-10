import NavLink from "./NavLink";
import { navLinks } from "./navLinks.js";

const MobileLinks = () => {
  return (
    <nav className="w-full flex flex-col gap-6">
      {navLinks.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
    </nav>
  );
};

export default MobileLinks;
