"use client";
import React from "react";
import TripCard from "./TripCard";

const sampleTrips = [
  {
    id: 1,
    image: "/img/dest/dest1.jpg",
    destination: "Paris, France",
    price: "899",
    days: 5,
  },
  {
    id: 2,
    image: "/img/dest/dest2.jpg",
    destination: "Rome, Italy",
    price: "749",
    days: 4,
  },
  {
    id: 3,
    image: "/img/dest/dest3.jpg",
    destination: "Marrakech, Morocco",
    price: "599",
    days: 3,
  },
  {
    id: 4,
    image: "/img/image1.jpg",
    destination: "Tokyo, Japan",
    price: "1199",
    days: 7,
  },
  {
    id: 5,
    image: "/img/images.jpg",
    destination: "New York City, USA",
    price: "999",
    days: 6,
  },
];

export default function TripsList({ trips = sampleTrips }) {
  const handleBook = (trip) => {
    // replace with your booking logic (modal, route navigation, API call...)
    alert(`Booked trip to ${trip.destination} — ${trip.days} days — $${trip.price}`);
  };

  return (
    <section id="trips" className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Popular Trips</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Pick your next destination — curated trips with great prices and flexible dates.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trips.map((t) => (
          <TripCard
            key={t.id}
            image={t.image}
            destination={t.destination}
            price={t.price}
            days={t.days}
            onBook={() => handleBook(t)}
          />
        ))}
      </div>
    </section>
  );
}
