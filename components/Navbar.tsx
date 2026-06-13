"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "services", label: "Services" },
    { href: "vision", label: "Vision" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
  ];
  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  return (
    <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-bold text-xl text-white hover:text-teal-400 transition duration-200">
          Sammey<span style={{ color: "#00FFC6" }}>.</span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-sm text-gray-400 hover:text-white transition duration-200">{link.label}</button>
          ))}
          <a href="mailto:sammeyengitech@gmail.com" className="text-sm font-medium px-5 py-2 rounded-lg border border-white/20 text-white hover:border-teal-400 hover:text-teal-400 transition duration-200">Start a Project</a>
        </div>
        <button className="md:hidden text-gray-400 hover:text-white transition duration-200 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="w-5 h-5" />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 bg-gray-950 border-t border-white/10">
          {links.map((link) => (
            <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-gray-400 hover:text-white transition duration-200 text-sm font-medium py-1 text-left">{link.label}</button>
          ))}
          <a href="mailto:sammeyengitech@gmail.com" className="border border-white/20 text-white px-5 py-3 rounded-lg text-sm font-medium hover:border-teal-400 hover:text-teal-400 transition duration-200 text-center">Start a Project</a>
        </div>
      )}
    </nav>
  );
}
