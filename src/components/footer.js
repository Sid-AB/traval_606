"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Events", href: "/events" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo + Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-bold text-green-500">MySite</h2>
          <p className="text-sm text-gray-400">
            Delivering quality services and events with passion.
          </p>
        </motion.div>

        {/* Useful Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-2"
        >
          <h3 className="text-lg font-semibold text-white">Useful Links</h3>
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="hover:text-green-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col space-y-3"
        >
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-green-400">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom text */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MySite. All rights reserved.
      </div>
    </footer>
  );
}
