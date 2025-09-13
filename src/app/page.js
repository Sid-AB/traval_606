import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/headers";
import Hero from "@/components/head_def";
import CompetitorsSection from "@/components/parterns";
import ServicesSection from "@/components/sevrices";
import EventsSection from "@/components/events";
import TripsList from "@/components/Trips";
export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ServicesSection />
      <EventsSection />
      <TripsList />
      <CompetitorsSection />
      <Footer />
    </main>
  );
}
