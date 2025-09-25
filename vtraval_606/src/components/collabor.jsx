"use client";
import { motion } from "framer-motion";

const partners = [
  { id: 1, icon: "/img/partner/1.png", name: "Partner 1" },
  { id: 2, icon: "/img/partner/2.png", name: "Partner 2" },
  { id: 3, icon: "/img/partner/3.png", name: "Partner 3" },
  { id: 4, icon: "/img/partner/3.png", name: "Partner 4" },
];

export default function Partners() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Our Partners</h2>

        {/* Row list of partner cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {partners.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md flex items-center justify-center p-6 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <img
                src={p.icon}
                alt={p.name}
                className="h-16 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}