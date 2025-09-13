"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ServiceCard from "./serviceCard";
import { FaPlane,FaHotel, FaMapMarkedAlt,FaPassport } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServicesSection() {
  const services = [
    {
      name: "Flight Booking",
      icon: FaPlane,
      image: "/img/category/icon1.png",
      description: "Book flights worldwide with competitive prices and flexible schedules.",
      hoverSvg:"/img/category/shape.svg",
    },
    {
      name: "Hotel Reservation",
      icon: FaMapMarkedAlt,
      image: "/img/category/icon3.png",
      description: "Find and book the best hotels with top amenities and great locations.",
      hoverSvg:"/img/category/shape.svg",
    },
    {
      name: "Tour Packages",
      icon: FaHotel,
      image: "/img/category/icon2.png",
      description: "Explore custom tour packages designed for your dream destinations.",
      hoverSvg:"/img/category/shape.svg",
    },
    {
      name: "Passport Visa & Migrations",
      icon: FaPassport,
      image: "/img/category/icon4.png",
      description: "Explore custom tour packages designed for your dream destinations.",
      hoverSvg:"/img/category/shape.svg",
    },
  ];

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-6 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-3 mb-10"
      >
        <h2 className="text-3xl font-bold text-orange-600">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide high-quality services tailored to meet your needs and help
          your business grow.
        </p>
      </motion.div>

      {/* Carousel */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3000, // 3s per slide
          disableOnInteraction: false, // keeps autoplay after user interaction
        }}
        loop={false} // infinite loop
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10 mySwiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
