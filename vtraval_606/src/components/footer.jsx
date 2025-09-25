"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram ,FaTiktok ,FaHeadphones ,FaHome ,FaMailBulk } from "react-icons/fa";

export default function Footer() {
  const links = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Events", href: "#events" },
    { name: "Contact Us", href: "#contact" },
  ];
  const phone=["659 30 55 77","770 67 63 92","770 19 54 09","43 43 04 04"]
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
          <h2 className="text-2xl font-bold text-pink-500">HanaWyTours</h2>
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
              to={link.href}
              className="hover:text-pink-400 transition-colors"
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
            <a href="https://www.facebook.com/profile.php?id=100057628712187" className="hover:text-pink-400" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://tiktok.com/@Hanawy.tours" className="hover:text-pink-400" target="_blank">
              <FaTiktok />
            </a>
            <a href="https://instagram.com/Hanawytours" className="hover:text-pink-400" target="_blank">
              <FaInstagram />
            </a>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-lg font-semibold text-white">Contacts US</p>
          <FaHeadphones className="text-xl"/> 
          {phone.map((e, index) => (
            <a 
              key={index} 
              href={`phoneto:`+e }
              className="hover:text-pink-400 flex items-center"
            >
              <p className="px-1">+213 {e}</p>
            </a>
          ))}
            
            <a href="#" className="hover:text-pink-400 flex ">
              <FaHome className="text-3xl"/><p className="px-1">Local N°01 lot de propriete N°02.section 073, REMCHT-TLEMCEN (13000)</p>
            </a>
            <a href="mailto:service@hanawytours.dz" className="hover:text-pink-400 flex ">
              <FaMailBulk className="text-xl"/><p className="px-1">service@hanawytours.dz</p>
            </a>
        </div>
        </motion.div>
      </div>
          
      {/* Bottom text */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SIDAB. All rights reserved.
      </div>
    </footer>
  );
}
