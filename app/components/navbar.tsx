import Link from "next/link";
import React from "react";

type NavItemProps = {
  src: string;
  label: string;
  link: string;
};

const NavItem: React.FC<NavItemProps> = ({ src, label, link }) => (
  <Link href={link} className="group relative flex flex-col items-center cursor-pointer">
    <img
      src={src}
      alt={label}
      className="w-5 h-5 group-hover:opacity-70 transition duration-300"
    />
    <span className="absolute -bottom-8 text-xs bg-black text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-10">
      {label}
    </span>
  </Link>
);

const Navbar: React.FC = () => {
  const items: NavItemProps[] = [
    { src: "/home.svg", label: "Home", link: "/" },
    { src: "/projects.svg", label: "Projects", link: "/projects" },
    { src: "/work.svg", label: "Experience", link: "/experience" },
    { src: "/skills.svg", label: "Skills", link: "/skills" },
    { src: "/blogs.svg", label: "Blogs", link: "/blogs" },
  ];

  return (
    <div className="py-6 w-full h-1/10 flex justify-center items-center ">
      <nav className="flex items-center justify-center bg-[var(--secondary-bg-black)] rounded-xl px-6 py-3 shadow-md">
        <div className="flex space-x-8">
          {items.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
