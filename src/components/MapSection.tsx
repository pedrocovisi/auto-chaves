import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

export default function MapSection() {
  return (
    <section className="py-20 border-t">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Onde Estamos
          </h2>
          <p className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-brand" />
            Venha tomar um café conosco enquanto preparamos sua chave.
          </p>
        </div>

        <div className="w-full h-[400px] bg-brand rounded-2xl overflow-hidden shadow-lg relative">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.9504207671307!2d-47.1790034!3d-22.7300841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c895c23478e6b3%3A0x42fc83d82f3dba3!2sAUTO%20CHAVES%20PAULINIA!5e0!3m2!1spt-BR!2sbr!4v1767660775290!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

        <div className="text-center mt-8">
          <a
            href="https://maps.app.goo.gl/NrrEtDTe8BzTFYgx8"
            target="_blank"
            className="inline-block border-2 border-brand font-bold py-3 px-8 rounded-full hover:bg-brand-hover hover:border-brand-hover hover:text-white hover:scale-105 transition-all duration-300"
          >
            ABRIR NO GPS
          </a>
        </div>

      </div>
    </section>
  );
}