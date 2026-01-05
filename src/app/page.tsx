import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* O conteúdo principal cresce para empurrar o footer para baixo se a tela for grande */}
      <div className="flex-grow">
        <Hero />
        <Services />
        <MapSection />

        {/* Seção Extra de Chamada para Ação (CTA) antes do rodapé */}
        <section className="bg-yellow-500 py-16 text-center px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Precisa de ajuda agora?</h2>
          <p className="text-slate-900 text-lg mb-8 max-w-2xl mx-auto">
            Não fique parado na rua. Nossa equipe está pronta para te atender em qualquer lugar da cidade.
          </p>
          <a href="tel:+" className="bg-slate-900 text-white font-bold py-4 px-8 rounded-full hover:bg-slate-800 transition shadow-lg">
            CHAMAR SOCORRO
          </a>
        </section>
      </div>

      <Footer />
    </main>
  );
}