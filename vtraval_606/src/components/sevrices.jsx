"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ServiceCard from "./serviceCard";
import { FaPlane,FaHotel, FaMapMarkedAlt,FaPassport,FaBus } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState,useEffect} from "react";

export default function ServicesSection() {

  const [services,setServices] = useState ([
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
  ]);


  function ServiceIcon({ name }) {
    const lower = name.toLowerCase();

    if (lower.includes("trip")) {
      return FaPlane ;
    } else if (lower.includes("hotel")) {
      return FaHotel ;
    } else if (lower.includes("visa")) {
      return FaPassport 
    } else if (lower.includes("transport") || lower.includes("bus")) {
      return FaBus;
    } else {
      return FaMapMarkedAlt;
    }
  }
  useEffect(()=>{
    fetch("/api/services/",{
      headers: { "Accept": "application/json" },
  }) // your backend URL
    .then((res) => res.json())
    .then((data) => {
     // console.log(JSON.stringify(data))
     const mapped = data.map(item => {
      var file;
      if(item.images.length > 0)
      {
        file=item.images[0].file
      }
      else
      {
        file="/img/category/icon4.png"
      }
      console.log('type '+typeof(item.id_cat.nom_categorie) )

      const lower = item.id_cat.nom_categorie.toLowerCase();
      var icons=FaMapMarkedAlt
    if (lower.includes("trip")|| lower.includes("summer") || lower.includes("travel") || lower.includes("flight") || lower.includes("flights")) {
      icons = FaPlane ;
    } else if (lower.includes("hotel")|| lower.includes("booking") || lower.includes("book")) {
      icons = FaHotel ;
    } else if (lower.includes("visa")) {
      icons = FaPassport 
    } else if (lower.includes("transport") || lower.includes("bus")) {
      icons = FaBus;
    } else {
      icons = FaMapMarkedAlt;
    }
    
      return ({
      id:item.id_service,
      name: item.nom_service,
      image: file,
      icon:icons,
      description:item.descrip_service,
      hoverSvg:"/img/category/shape.svg",
      })});
      setServices(mapped)
    })
    .catch((err) => console.error(err));
  },[])

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
        <h2 className="text-3xl font-bold text-pink-600">Our Services</h2>
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
            <ServiceCard {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
