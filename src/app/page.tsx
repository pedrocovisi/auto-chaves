import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";

export default function Home() {
  return (
    <main className="bg-dark-main">
      <Navbar />

      <div className="flex-grow">
        <Hero />
        <Services />
        <Gallery />
        <MapSection />


      </div>

      <Footer />
    </main>
  );
}