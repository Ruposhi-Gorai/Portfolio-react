import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import '../../assets/css/home.css'

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className=" fixed top-0 left-0 w-full bg-[#000000] shadow-md z-50 border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-2xl font-semibold text-teal-400 drop-shadow-[0_0_10px_#14b8a6]">
          {"{RG}"}
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-8 text-lg">
          {menuItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={600}
                spy={true}
                offset={-60} // to consider navbar height
                className="cursor-pointer hover:text-teal-400 hover:border-b"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden focus:outline-none">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-[#000000e3] text-white h-screen px-4 py-6 flex flex-col gap-4">
          {menuItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={600}
                offset={-60}
                className="block hover:text-teal-400 p-4 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
