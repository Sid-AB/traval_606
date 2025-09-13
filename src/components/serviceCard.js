"use client";
import React from "react";

export default function ServiceCard({ icon: Icon, name, image, description ,hoverSvg}) {
  return (
    <article className="group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative h-50 sm:h-48 md:h-44 lg:h-52 overflow-hidden">
        <div className="flex w-full justify-center row">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        </div>
        {/* Icon Badge */}
        <div className="absolute -bottom-0 left-6 bg-orange-600 text-white p-3 rounded-xl shadow-md">
          <Icon className="w-6 h-6" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-10 flex flex-col gap-3">
        <h3
          className="
            text-lg font-semibold text-gray-800
            transition-colors duration-300
            group-hover:text-orange-600
          "
        >
          {name}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Hover SVG (bottom-left corner) */}
      <div
        className="
          absolute bottom-4 left-4
          opacity-0 translate-y-3
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-500 ease-out
          text-orange-600
        "
      >
        <img
          src={hoverSvg}
          alt={name} className="w-5 h-5" />
      </div>
    
    </article>);
}