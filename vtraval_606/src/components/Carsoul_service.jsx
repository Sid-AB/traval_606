"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ServicesCarousel() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our <span className="text-orange-600">Services</span>
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/services/service1.jpg"
                alt="Service 1"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Web Development</h3>
                <p className="text-gray-600 text-sm">
                  Modern websites built with Next.js & Tailwind.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/services/service2.jpg"
                alt="Service 2"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Event Management</h3>
                <p className="text-gray-600 text-sm">
                  Full-service event planning with creative ideas.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/services/service3.jpg"
                alt="Service 3"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Digital Marketing</h3>
                <p className="text-gray-600 text-sm">
                  Boost your brand with SEO & social media strategies.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
