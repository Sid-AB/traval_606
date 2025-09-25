"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { id: 1, name: "Car A", img: "/img/dest/dest1.jpg", desc: "A fast sports car with sleek design." },
  { id: 2, name: "Car B", img: "/img/dest/dest2.jpg", desc: "Perfect for family trips and comfort." },
  { id: 3, name: "Car C", img: "/img/dest/dest3.jpg", desc: "Compact and efficient city car." },
  { id: 4, name: "Car D", img: "/img/dest/dest2.jpg", desc: "Luxury sedan with modern tech." },
  { id: 5, name: "Car E", img: "/img/dest/dest1.jpg", desc: "Off-road SUV built for adventure." },
];

export default function Carousel3D() {
  const [angle, setAngle] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const radius = 300;
  const step = 360 / cards.length;

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev - step);
    }, 3000);
    return () => clearInterval(interval);
  }, [step]);

  // Swipe/drag end handler
  const handleDragEnd = (_, info) => {
    if (info.offset.x > 50) {
      setAngle((prev) => prev + step);
    } else if (info.offset.x < -50) {
      setAngle((prev) => prev - step);
    }
  };

  // Active card detection
  const activeIndex = ((-Math.round(angle / step)) % cards.length + cards.length) % cards.length;

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center perspective-[1200px] overflow-hidden">
      <motion.div
        className="relative w-[400px] h-[400px] transform-style-preserve-3d transition-transform duration-1000"
        style={{ transform: `rotateY(${angle}deg)` }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
      >
        {cards.map((card, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={card.id}
              onClick={() => isActive && setSelectedCard(card)}
              className={`absolute w-[200px] h-[250px] rounded-2xl overflow-hidden flex flex-col items-center justify-center border cursor-pointer transition-all duration-500 ${
                isActive
                  ? "scale-110 shadow-2xl z-20 bg-pink-100"
                  : "scale-90 opacity-80 z-10 bg-white"
              }`}
              style={{
                transform: `rotateY(${step * i}deg) translateZ(${radius}px)`,
              }}
            >
              <Image
                src={card.img}
                alt={card.name}
                width={200}
                height={150}
                className="object-cover"
              />
              <p className="mt-2 text-lg font-semibold">{card.name}</p>
            </div>
          );
        })}
      </motion.div>

      {/* Controls */}
      <div className="absolute bottom-6 flex gap-4">
        <button
          onClick={() => setAngle((prev) => prev + step)}
          className="px-4 py-2 bg-pink-500 text-white rounded-lg"
        >
          ◀ Prev
        </button>
        <button
          onClick={() => setAngle((prev) => prev - step)}
          className="px-4 py-2 bg-pink-500 text-white rounded-lg"
        >
          Next ▶
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedCard.img}
                alt={selectedCard.name}
                width={400}
                height={250}
                className="rounded-lg object-cover"
              />
              <h2 className="mt-4 text-2xl font-bold">{selectedCard.name}</h2>
              <p className="mt-2 text-gray-600">{selectedCard.desc}</p>
              <button
                onClick={() => setSelectedCard(null)}
                className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
