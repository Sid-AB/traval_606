"use client";
import { motion } from "framer-motion";

export default function CompetitorsSection() {
  const comparison = [
    {
      feature: "Pricing",
      us: "Affordable & Transparent",
      competitors: "Hidden fees, expensive",
    },
    {
      feature: "Innovation",
      us: "Always up-to-date with latest tech",
      competitors: "Slow to adapt",
    },
    {
      feature: "Customer Support",
      us: "24/7 Live Chat & Phone",
      competitors: "Limited support hours",
    },
    {
      feature: "Customization",
      us: "Fully tailored solutions",
      competitors: "One-size-fits-all",
    },
    {
      feature: "Scalability",
      us: "Built to grow with your business",
      competitors: "Struggles with large scale",
    },
  ];

  return (
    <section id="competitors" className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-3 mb-10"
      >
        <h2 className="text-3xl font-bold text-green-600">Why Choose Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See how we compare against others in the industry.
        </p>
      </motion.div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-lg rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-green-600 text-white text-left">
              <th className="py-4 px-6">Feature</th>
              <th className="py-4 px-6">Our Company</th>
              <th className="py-4 px-6">Competitors</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="even:bg-gray-50 hover:bg-gray-100 transition"
              >
                <td className="py-4 px-6 font-medium text-gray-800">
                  {row.feature}
                </td>
                <td className="py-4 px-6 text-gray-700">{row.us}</td>
                <td className="py-4 px-6 text-gray-500">{row.competitors}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
