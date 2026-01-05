import React from 'react';
import { FaCar, FaHome, FaKey } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCar className="text-4xl text-yellow-500 mb-4" />,
      title: "Abertura de Automovéis",
      description: "Esqueceu a chave dentro? Abrimos seu carro sem danificar a porta ou a pintura. Atendimento rápido para emergências."
    },
    {
      icon: <FaKey className="text-4xl text-yellow-500 mb-4" />,
      title: "Chaves Codificadas",
      description: "Cópia e programação de chaves com chip e transponder para todas as marcas nacionais e importadas."
    },
    {
      icon: <FaHome className="text-4xl text-yellow-500 mb-4" />,
      title: "Residencial e Comercial",
      description: "Instalação de fechaduras, travas de segurança e abertura de portas residenciais. Sua casa mais segura."
    }
  ];

  return (
    <section className="py-20 bg-slate-50" id="servicos">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
          Nossos Serviços
        </h2>
        
        {/* Grid: 1 coluna no celular, 3 no computador */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border-b-4 border-yellow-500">
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 text-center mb-2">{service.title}</h3>
              <p className="text-slate-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}