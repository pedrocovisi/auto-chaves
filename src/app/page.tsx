import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";

export default function Home() {
  return (
    <main className="bg-dark-main">
      <Navbar />

      {/* O conteúdo principal cresce para empurrar o footer para baixo se a tela for grande */}
      <div className="flex-grow">
        <Hero />
        <Services />
        <MapSection />

        
      </div>

      <Footer />
    </main>
  );
}