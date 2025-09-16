"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { name: "Home", href: "home" },
    { name: "Services", href: "services" },
   // { name: "Events", href: "events" },
    { name: "Trips", href: "trips" },
    { name: "Contact Us", href: "contact" },
  ];

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Compute opacity between 50px–200px
  const opacity = scrollY < 50 ? 0 : scrollY < 200 ? (scrollY - 50) / 150 : 1;

  // Header background style
  const bgStyle =
    scrollY < 50
      ? "bg-transparent"
      : scrollY < 200
      ? `bg-white/70 backdrop-blur-md`
      : "bg-white shadow-md";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
      style={{
        backgroundColor:
          scrollY < 200
            ? `rgba(255, 255, 255, ${opacity})`
            : "rgba(255, 255, 255, 1)",
        backdropFilter: scrollY >= 50 ? "blur(10px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex text-2xl font-bold transition-colors ${
            scrollY > 150 ? "text-pink-400" : "text-orange-400"
          }`}
        >
            <motion.img
              src="/img/logo.jpg"
              alt="Hero Logo"
              className="w-8 h-8 rounded-2xl shadow-lg object-cover"/>
         <p className="px-2"> HanaWyTours</p>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={`#${link.href}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative font-medium transition-colors ${
                active === link.href
                  ?  scrollY < 200 ?"text-white":"text-pink-400"
                  : scrollY > 150
                  ? "text-gray-800 hover:text-pink-600"
                  : "text-black hover:text-pink-400"
              }`}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
        >
          <span
            className={`w-6 h-0.5 transition-all ${
              scrollY > 150 ? "bg-gray-800" : "bg-black"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 transition-all ${
              scrollY > 150 ? "bg-gray-800" : "bg-black"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 transition-all ${
              scrollY > 150 ? "bg-gray-800" : "bg-black"
            }`}
          ></span>
        </button>
      </div>

      {/* Overlay + Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`fixed top-16 left-0 right-0 z-50 md:hidden flex flex-col space-y-4 px-6 py-6 ${
                scrollY > 150
                  ? "bg-black/90 backdrop-blur-md text-gray-800"
                  : "bg-black/90 text-white"
              }`}
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  className={`font-medium ${
                    active === link.href ? "text-green-500" : ""
                  } hover:text-green-400`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
