"use client";
import React from "react";

export default function TripCard({ image, destination, price, days, onBook }) {
  return (
    <article className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      {/* Image wrapper */}
      <div className="relative h-48 sm:h-56 md:h-44 lg:h-52 overflow-hidden">
        <img
          src={image}
          alt={`Photo of ${destination}`}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Price badge */}
        <div className="absolute top-3 right-3 bg-white/90 text-gray-900 font-semibold px-3 py-1 rounded-lg shadow-sm backdrop-blur-sm">
          ${price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3
            className="
              relative text-lg font-medium text-gray-800
              transition-colors duration-300
              group-hover:text-orange-600 group-hover:font-bold
            "
          >
            {destination}
            {/* Underline */}
            <span
              className="
                absolute left-0 -bottom-1 h-0.5 w-full bg-orange-600
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, praesentium.
        </p>

        <div className="mt-2 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            From <span className="font-medium text-gray-800">${price}</span>
          </div>
          <button
            onClick={onBook}
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium px-3 py-2 rounded-lg transition"
            aria-label={`Book trip to ${destination}`}
          >
            Book
          </button>
        </div>
      </div>
    </article>
  );
}
