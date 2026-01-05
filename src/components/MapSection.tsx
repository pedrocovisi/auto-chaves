import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

export default function MapSection() {
  return (
    <section className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Onde Estamos
          </h2>
          <p className="text-slate-600 flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-yellow-500" />
            Venha tomar um café conosco enquanto preparamos sua chave.
          </p>
        </div>

        {/* Container do Mapa com sombra e bordas arredondadas */}
        <div className="w-full h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-lg relative">
          
          {/* O IFRAME DO GOOGLE MAPS */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197586021203!2d-46.65205462444747!3d-23.561349561592656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709400000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500" // Efeito preto e branco que fica colorido ao passar o mouse
          ></iframe>

        </div>

        {/* Botão para abrir no Waze/Maps nativo */}
        <div className="text-center mt-8">
            <a 
                href="https://maps.google.com" 
                target="_blank" 
                className="inline-block border-2 border-slate-800 text-slate-800 font-bold py-3 px-8 rounded-full hover:bg-slate-800 hover:text-white transition"
            >
                ABRIR NO GPS
            </a>
        </div>

      </div>
    </section>
  );
}