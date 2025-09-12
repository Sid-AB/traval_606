"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <img
          src="/img/logo.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 bg-black"
      ></motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        {/* Logo */}
        <motion.img
          src="/img/logo.jpg"
          alt="Logo"
          className="w-32 h-32 mb-6 rounded-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to <span className="text-green-400">MySite</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          We provide the best services to grow your business and make your
          events unforgettable.
        </motion.p>
      </div>
    </section>
  );
}
