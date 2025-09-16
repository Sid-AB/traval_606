import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/headers";
import Hero from "@/components/head_def";
import CompetitorsSection from "@/components/parterns";
import ServicesSection from "@/components/sevrices";
import EventsSection from "@/components/events";
import TripsList from "@/components/Trips";
import Partners from "@/components/collabor";
import WhatsAppButton from "@/components/contactFloating";
export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ServicesSection />
      
      <TripsList />
      <Partners />
      <CompetitorsSection />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
