"use client";
import { motion } from "framer-motion";

export default function EventsSection() {
  const events = [
    {
      year: "2025",
      title: "Tech Conference",
      description:
        "We participated in an international conference showcasing our latest innovations.",
    },
    {
      year: "2024",
      title: "Product Launch",
      description:
        "Released our flagship mobile application with great success in the market.",
    },
    {
      year: "2023",
      title: "Partnership",
      description:
        "Collaborated with leading companies to expand our cloud services portfolio.",
    },
    {
      year: "2022",
      title: "Company Founded",
      description:
        "Started our journey with a small passionate team aiming to change the tech world.",
    },
  ];

  return (
    <section id="events" className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-3 mb-10"
      >
        <h2 className="text-3xl font-bold text-green-600">Our Events</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A journey through some of our most important milestones.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l-4 border-green-500 pl-8 space-y-12">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Circle marker */}
            <span className="absolute -left-5 top-2 w-8 h-8 rounded-full bg-green-500 border-4 border-white shadow-md"></span>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <span className="text-sm text-green-600 font-semibold">
                {event.year}
              </span>
              <h3 className="text-lg font-bold text-gray-800 mt-1">
                {event.title}
              </h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
