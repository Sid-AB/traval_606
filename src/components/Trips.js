"use client";
import React ,{useState,useEffect}from "react";
import TripCard from "./TripCard";

const sampleTrips = [
  {
    id: 1,
    image: "/img/dest/dest1.jpg",
    destination: "Paris, France",
    descrip:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, praesentium.',
    price: "899",
    package_info:'package_info',
    days: 5,
  },
  {
    id: 2,
    image: "/img/dest/dest2.jpg",
    destination: "Rome, Italy",
    descrip:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, praesentium.',
    price: "749",
    package_info:'package_info',
    days: 4,
  },
  {
    id: 3,
    image: "/img/dest/dest3.jpg",
    destination: "Marrakech, Morocco",
    descrip:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, praesentium.',
    price: "599",
    package_info:'package_info',
    days: 3,
  },
  {
    id: 4,
    image: "/img/image1.jpg",
    destination: "Tokyo, Japan",
    descrip:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, praesentium.',
    price: "1199",
    package_info:'package_info',
    days: 7,
  },
  {
    id: 5,
    image: "/img/images.jpg",
    destination: "New York City, USA",
    descrip:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, praesentium.',
    price: "999",
    package_info:'package_info',
    days: 6,
  },
];

export default function TripsList() {
  const [alltrips,setAlltrips]=useState(sampleTrips)
  const handleBook = (trip) => {
    // replace with your booking logic (modal, route navigation, API call...)
    alert(`Booked trip to ${trip.destination} — ${trip.days} days — $${trip.price}`);
  };
  

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/packages/",{
      headers: { "Accept": "application/json" },
  }) // your backend URL
    .then((res) => res.json())
    .then((data) => {
     // console.log(JSON.stringify(data))
     const mapped = data.map(item => {
      var file;
      if(item.images.length > 0)
      {
        file="http://127.0.0.1:8000"+item.images[0].file
      }
      else
      {
        file="/img/dest/dest2.jpg"
      }
      return ({
      id: item.id_package,
      image: file,
      descrip:item.description_package,
      destination: item.vols.nom_vol,
      price: item.prix_package,
      package_info:item.nom_package,
      days: item.duree,
    })});
    setAlltrips(mapped)
    })
    .catch((err) => console.error(err));
  },[])


  return (
    <section id="trips" className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Popular Trips</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Pick your next destination — curated trips with great prices and flexible dates.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {alltrips.map((t) => (
          <TripCard
            key={t.id}
            image={t.image}
            descrip={t.descrip}
            destination={t.destination}
            price={t.price}
            package_info={t.package_info}
            days={t.days}
            onBook={() => handleBook(t)}
          />
        ))}
      </div>
    </section>
  );
}
