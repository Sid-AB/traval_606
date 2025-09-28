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
    nom_package:"",
    date_debut_package: "2025-10-01",
    date_fin_package: "2025-10-08",
    duree: "7 days",
    prix_package: 120000,
    description_package:"A comfortable roundtrip with hotel and guided tours included. Perfect for families and groups.",
    description_package_ar:"A comfortable roundtrip with hotel and guided tours included. Perfect for families and groups.",
  
  service: [
    { id_service: 1, nom_service: "Hotel (4*)", descrip_service: "Breakfast included", prix_service: 40000,id_cat:[],id_type:[] },
    { id_service: 2, nom_service: "Guided Tours", descrip_service: "City + Museums", prix_service: 20000 ,id_cat:[],id_type:[]},
    { id_service: 3, nom_service: "Airport Transfer", descrip_service: "Private car both ways", prix_service: 8000 ,id_cat:[],id_type:[]},
    { id_service: 4, nom_service: "Meals Package", descrip_service: "3 meals/day", prix_service: 15000 ,id_cat:[],id_type:[]},
  ],
  images : [
    "/img/trip1.jpg",
    "/img/trip2.jpg",
    "/img/trip3.jpg",
    "/img/trip4.jpg",
  ],
  vols:[]
})

  const next = () => setIndex((i) => (i + 1) % trip.images.length);
  const prev = () => setIndex((i) => (i - 1 + trip.images.length) % images.length);
  const [agency,setAgency]=useState({
    name: "Hanawy Tours",
    logoUrl: "/img/logo.jpg",
    footerText: "© 2025 Hanawy Tours — All rights reserved",
  },)

  const [totalServices,setTotalservices] =useState(0);
  const [Totafilght,setTotalflight] = useState( 0)
  const [grandTotal,setGrandTotal] = useState(0);

  // Recharts data (services breakdown)
  const [existSevice,setExistservice]=useState(false)
  const [existVol,setExistvol]=useState(false)
  const [existImg,setExistimg]=useState(false)
  const [chartData,setChartdata] = useState({ name:"", value: 0 });
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
        setTrip(data[0])

        if(data[0].service.length > 0)
            {
            setTotalservices(data[0].service.reduce((s, a) => s + parseFloat(a.prix_service), 0));
            setChartdata(data[0].service.map((s) => ({ name: s.nom_service, value: s.prix_service })));
            setExistservice(true)
            }
            else
            {
            setTotalservices(0)
            setChartdata({ name:"", value: 0 })
            setExistservice(false)
            }
            if(data[0].vols !== null && data[0].vols !== undefined)
            {
            setTotalflight( parseFloat(data[0].vols.prix_vol))
            setExistvol(true)
            }
            else
            {
            setTotalflight(0)
            setExistvol(false)
            }
            if(data[0].images.length == 0)
            {
                setExistimg(false)
            }
        setGrandTotal(parseFloat(data[0].prix_package) + totalServices + Totafilght);

         setLoading(false);
    }).catch(()=>{
        setExistimg(false)
        setExistservice(false)
        setExistvol(false)
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
          <h2 className="text-2xl font-semibold mb-3">{existVol ??(trip.vols.nom_vol)} - {trip.nom_package}</h2>
          <p className="text-sm text-gray-600 mb-4">{trip.description_package}</p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-pink-500" />
              <div>
                <div className="text-xs text-gray-500">Destination</div>
                <div className="font-medium">{existVol ??(trip.vols.nom_vol)}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-indigo-500" />
              <div>
                <div className="text-xs text-gray-500">Departure</div>
                <div className="font-medium">{trip.date_debut_package}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-yellow-500" />
              <div>
                <div className="text-xs text-gray-500">Duration</div>
                <div className="font-medium">{trip.duree}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Plane  className="w-5 h-5 text-green-500" />
              <div>
                <div className="text-xs text-gray-500">Airline</div>
                <div className="font-medium">Air Algerie</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Tag className="w-5 h-5 text-pink-600" />
              <div>
                <div className="text-xs text-gray-500">Price (flight)</div>
                <div className="font-semibold text-lg">DZD {existVol ?(trip.vols.prix_vol):('00.00')}</div>
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
                src={agency.logoUrl} alt="agency logo"/>
            </div>

        </div>

        {/* Center: Services */}
        <div className="md:col-span-4 bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Included Services</h3>

         {existSevice ? ( <div className="space-y-3">
            {trip.service.map((s) => (
              <motion.div
                key={s.id_service}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="border rounded-lg p-3 flex justify-between items-start"
              >
                <div>
                  <div className="font-medium">{s.nom_service}</div>
                  <div className="text-sm text-gray-500"><b>{s.id_cat.nom_categorie}</b>{s.id_cat.description_categorie}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Price</div>
                  <div className="font-semibold">DZD {s.prix_service.toLocaleString()}</div>
                </div>
              </motion.div>
            ))}
          </div>):(<div className="space-y-3"><motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="border rounded-lg p-3 flex justify-between items-start"
              >
                <h1>No Services Are Included</h1>
              </motion.div> </div>)}

          <div className="mt-6">
            <div className="text-sm text-gray-500">Services total</div>
            <div className="font-bold text-lg">DZD {totalServices.toLocaleString()}</div>

            {existSevice ??(<div className="mt-4 h-48">
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
            </div>)}
          </div>
        </div>

        {/* Right: Photos carousel */}
        <div className="md:col-span-4 bg-white rounded-xl shadow p-4 flex flex-col">
          <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg">
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={existImg ?(trip.images[index]):1}
                src={existImg ?("http://127.0.0.1:8000"+trip.images[index].file):'agency.logoUrl'}
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
            {existImg ?(trip.images.map((p, i) => (
              <button
                key={p}
                onClick={() => setIndex(i)}
                className={`h-16 rounded overflow-hidden border transition-transform transform hover:scale-105 ${
                  i === index ? "ring-2 ring-pink-400" : ""
                }`}
              >
                <img src={existImg ? ("http://127.0.0.1:8000"+p.file):(agency.logoUrl)} alt={`thumb-${i}`} className="w-full h-full object-cover" />
              </button>
            ))):(
                 <button
                key={0}
                onClick={() => setIndex(0)}
                className={`h-16 rounded overflow-hidden border transition-transform transform hover:scale-105 ${
                  0 === index ? "ring-2 ring-pink-400" : ""
                }`}
              >
                <img src={agency.logoUrl} alt={`thumb-${0}`} className="w-full h-full object-cover" />
              </button>
            )}
          </div>

          <div className="mt-4 text-center text-sm text-gray-500">
            <Info className="inline-block mr-2" /> Click thumbnails to change photo
          </div>
        </div>
      </div>

      {/* Bottom area: footer + logo */}
      <div className="mt-8 bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">{agency.footerText}</div>
        <div className="flex items-center gap-4">
          <img src={agency.logoUrl} alt="agency logo" className="w-24 h-24 object-contain rounded" />
          <div className="text-right">
            <div className="font-semibold">{agency.name}</div>
            <div className="text-xs text-gray-500">Contact: service@hanawytours.dz</div>
          </div>
        </div>
      </div>
    </div>
  );
}
