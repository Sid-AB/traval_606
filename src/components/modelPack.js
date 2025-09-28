import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock, Plane , Tag, Info } from "lucide-react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

// Example component: ModelInfo
// Props: { trip, services, photos, agency }
// - trip: { destination, departureDate, returnDate, duration, airline, price, description }
// - services: [{ id, name, description, price }]
// - photos: [url]
// - agency: { name, logoUrl, footerText }

export default function ModelInfo({ idpack,onClose }) {
  const [index, setIndex] = useState(0);
const [trip,setTrip]=useState( {
    destination: "Algiers - Oran roundtrip",
    departureDate: "2025-10-01",
    returnDate: "2025-10-08",
    duration: "7 days",
    airline: "Air Algeria",
    price: 120000,
    description:"A comfortable roundtrip with hotel and guided tours included. Perfect for families and groups.",
  
  services: [
    { id: 1, name: "Hotel (4*)", description: "Breakfast included", price: 40000 },
    { id: 2, name: "Guided Tours", description: "City + Museums", price: 20000 },
    { id: 3, name: "Airport Transfer", description: "Private car both ways", price: 8000 },
    { id: 4, name: "Meals Package", description: "3 meals/day", price: 15000 },
  ],
  photos : [
    "/img/trip1.jpg",
    "/img/trip2.jpg",
    "/img/trip3.jpg",
    "/img/trip4.jpg",
  ],
  agency : {
    name: "Hanawy Tours",
    logoUrl: "/img/logo.jpg",
    footerText: "© 2025 Hanawy Tours — All rights reserved",
  },
})

  const next = () => setIndex((i) => (i + 1) % trip.photos.length);
  const prev = () => setIndex((i) => (i - 1 + trip.photos.length) % photos.length);

  const totalServices = trip.services.reduce((s, a) => s + a.price, 0);
  const grandTotal = trip.price + totalServices;

  // Recharts data (services breakdown)
  const chartData = trip.services.map((s) => ({ name: s.name, value: s.price }));
  const COLORS = ["#3B82F6", "#F97316", "#10B981", "#F43F5E", "#A78BFA"];



const [loading, setLoading] = useState(true);
const [timeoutReached, setTimeoutReached] = useState(false);
  useEffect(()=>{
    const timer = setTimeout(() => {
      if (loading) setTimeoutReached(true);
    }, 3000);
    fetch('http://127.0.0.1:8000/api/pack/'+idpack,{
      headers: { "Accept": "application/json" },
  }) // your backend URL
    .then((res) => res.json())
    .then((data) => {
         setLoading(false);
    }).catch(()=>{
        setLoading(false);
    })

  },[idpack]
  )

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Top area */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left: Trip info */}
        <div className="md:col-span-4 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-3">{trip.destination}</h2>
          <p className="text-sm text-gray-600 mb-4">{trip.description}</p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-pink-500" />
              <div>
                <div className="text-xs text-gray-500">Destination</div>
                <div className="font-medium">{trip.destination}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-indigo-500" />
              <div>
                <div className="text-xs text-gray-500">Departure</div>
                <div className="font-medium">{trip.departureDate}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-yellow-500" />
              <div>
                <div className="text-xs text-gray-500">Duration</div>
                <div className="font-medium">{trip.duration}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Plane  className="w-5 h-5 text-green-500" />
              <div>
                <div className="text-xs text-gray-500">Airline</div>
                <div className="font-medium">{trip.airline}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Tag className="w-5 h-5 text-pink-600" />
              <div>
                <div className="text-xs text-gray-500">Price (flight)</div>
                <div className="font-semibold text-lg">DZD {trip.price.toLocaleString()}</div>
              </div>

            </div>
          </div>

          <div className="mt-6">
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg">
              Start at - DZD {grandTotal.toLocaleString()}
            </button>
          </div>

            <div className="py-2">
                <img
                src={trip.agency.logoUrl} alt="agency logo"/>
            </div>

        </div>

        {/* Center: Services */}
        <div className="md:col-span-4 bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Included Services</h3>

          <div className="space-y-3">
            {trip.services.map((s) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="border rounded-lg p-3 flex justify-between items-start"
              >
                <div>
                  <div className="font-medium">{s.name}</div>
                  <div className="text-sm text-gray-500">{s.description}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Price</div>
                  <div className="font-semibold">DZD {s.price.toLocaleString()}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <div className="text-sm text-gray-500">Services total</div>
            <div className="font-bold text-lg">DZD {totalServices.toLocaleString()}</div>

            <div className="mt-4 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" width={100} />
                  <Tooltip />
                  <Bar dataKey="value">
                    {chartData.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right: Photos carousel */}
        <div className="md:col-span-4 bg-white rounded-xl shadow p-4 flex flex-col">
          <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg">
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={trip.photos[index]}
                src={trip.photos[index]}
                alt={`photo-${index}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow"
              aria-label="previous"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow"
              aria-label="next"
            >
              ›
            </button>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-2">
            {trip.photos.map((p, i) => (
              <button
                key={p}
                onClick={() => setIndex(i)}
                className={`h-16 rounded overflow-hidden border transition-transform transform hover:scale-105 ${
                  i === index ? "ring-2 ring-pink-400" : ""
                }`}
              >
                <img src={p} alt={`thumb-${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div className="mt-4 text-center text-sm text-gray-500">
            <Info className="inline-block mr-2" /> Click thumbnails to change photo
          </div>
        </div>
      </div>

      {/* Bottom area: footer + logo */}
      <div className="mt-8 bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">{trip.agency.footerText}</div>
        <div className="flex items-center gap-4">
          <img src={trip.agency.logoUrl} alt="agency logo" className="w-24 h-24 object-contain rounded" />
          <div className="text-right">
            <div className="font-semibold">{trip.agency.name}</div>
            <div className="text-xs text-gray-500">Contact: service@hanawytours.dz</div>
          </div>
        </div>
      </div>
    </div>
  );
}
