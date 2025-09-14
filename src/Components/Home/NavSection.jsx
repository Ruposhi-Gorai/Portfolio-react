import { useState } from "react";
import { Menu, X } from "lucide-react"; // for icons

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbg text-white  fixed top-0 left-0 w-full max-w-full overflow-x-hidden z-50 border-b border-gray-800 ">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-2xl font-semibold text-teal-400 drop-shadow-[0_0_10px_#14b8a6] ">{"{RG}"}</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-8 text-lg">
          <li><a href="#home" className="hover:text-teal-400 hover:border-b">Home</a></li>
          <li><a href="#about" className="hover:text-teal-400 hover:border-b">About</a></li>
          <li><a href="#about" className="hover:text-teal-400 hover:border-b">Skills</a></li>
          <li><a href="#projects" className="hover:text-teal-400 hover:border-b">Projects</a></li>
          <li><a href="#contact" className="hover:text-teal-400 hover:border-b">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-[#20203de3] h-screen  px-4 py-6">
          <li><a href="#home" className="block hover:text-teal-400 p-4">Home</a></li>
          <li><a href="#about" className="block hover:text-teal-400 p-4">About</a></li>
          <li><a href="#projects" className="block hover:text-teal-400 p-4">Projects</a></li>
          <li><a href="#contact" className="block hover:text-teal-400 p-4">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
