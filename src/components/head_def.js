"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <img
          src="/img/hero/hero-bg.svg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 bg-black"
      ></motion.div>
      </div>

       {/* Hero Content */}
       <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl">
             {/* Right: Title + Subtitle */}
             <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center md:text-left text-white flex flex-col gap-6"
          >

            <h1 className="hero-title text-4xl md:text-6xl font-bold leading-tight text-black hero-title">
              Welcome to <span className="text-orange-400" >HanaWyTours</span>
            </h1>
            <p className="text-lg md:text-xl max-w-xl text-black">
              We provide the best services to grow your business and make your
              events unforgettable.
            </p>
            <div className="mt-4">
              <a
                href="#services"
                className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-medium transition"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
          {/* Left: Floating Image / Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src="/img/hero/hero-img.png"
              alt="Hero Logo"
              className="w-full h-full rounded-2xl object-cover "
            />
          </motion.div>

       
        </div>
      </div>
    </section>
  );
}
