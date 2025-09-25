"use client";
import React from "react";
import { motion } from "framer-motion";
export default function TripCard({ image, descrip,package_info,destination, price, days, onBook }) {
  return (
    <article className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <motion.div
      initial={{ opacity: 0, y: 30 }}       // start faded & slightly down
      whileInView={{ opacity: 1, y: 0 }}    // animate in when visible
      viewport={{ once: true, amount: 0.2 }} // trigger only once
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}           // small zoom on hover
      className="relative bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
    >
      {/* Image wrapper */}
      <div className="relative h-48 sm:h-56 md:h-44 lg:h-52 overflow-hidden">
        <img
          src={image}
          alt={`Photo of ${destination}`}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Price badge */}
        <div
  className="absolute top-3 right-3 
             text-white font-semibold 
             px-3 py-1 rounded-lg shadow-sm backdrop-blur-sm
             bg-gradient-to-r from-pink-500 to-orange-400"
>
  {price} DZ
</div>
    <div
     className="absolute bottom-3 right-3 
     text-white font-semibold 
     px-3 py-1 rounded-lg shadow-sm backdrop-blur-sm
     bg-gradient-to-r from-pink-500 to-orange-400"
    >
      {package_info}
    </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3
            className="
              relative text-lg font-medium text-gray-800
              transition-colors duration-300
              group-hover:text-pink-600 group-hover:font-bold
            "
          >
            {destination}
            {/* Underline */}
            <span
              className="
                absolute left-0 -bottom-1 h-0.5 w-full bg-pink-600
                scale-x-0 group-hover:scale-x-100
                transition-transform duration-300 origin-left
              "
            ></span>
          </h3>
          <span className="text-sm text-gray-500">
            {days} {days > 1 ? "days" : "day"}
          </span>
        </div>

        <p className="text-sm text-gray-600">
          {descrip}.
        </p>

        <div className="mt-2 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            From <span className="font-medium text-gray-800">{price} DZ</span>
          </div>
          <button
            onClick={onBook}
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-3 py-2 rounded-lg transition"
            aria-label={`Book trip to ${destination}`}
          >
            Book
          </button>
        </div>
      </div>
      </motion.div>
    </article>
  );
}
