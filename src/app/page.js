import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/headers";
import Hero from "@/components/head_def";
import CompetitorsSection from "@/components/parterns";
import ServicesSection from "@/components/sevrices";
import EventsSection from "@/components/events";
export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <ServicesSection />
    <EventsSection/>
    <CompetitorsSection />
    <Footer/>
    </>
  );
}
