import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaCar, FaKey, FaHome, FaMotorcycle, FaUnlock, FaShieldAlt } from "react-icons/fa";

export default function ServicesPage() {
    const services = [
        {
            icon: <FaCar className="text-5xl text-brand mb-6" />,
            title: "Abertura de Veículos",
            description: "Esqueceu a chave dentro? Realizamos a abertura técnica de carros nacionais e importados sem danificar fechaduras, portas ou pintura. Atendimento de emergência 24h.",
            details: ["Abertura sem danos", "Atendimento rápido", "Todas as marcas"]
        },
        {
            icon: <FaKey className="text-5xl text-brand mb-6" />,
            title: "Chaves Codificadas",
            description: "Confecção e codificação de chaves com transponder (chip) para veículos de todas as montadoras. Chaves canivete, presenciais (start-stop) e convencionais.",
            details: ["Chaves Canivete", "Chaves Presenciais", "Cópias Simples"]
        },
        {
            icon: <FaHome className="text-5xl text-brand mb-6" />,
            title: "Chaveiro Residencial",
            description: "Instalação e troca de fechaduras, travas de segurança, olho mágico e abertura de portas residenciais. Garantia de segurança para sua casa ou apartamento.",
            details: ["Instalação de Fechaduras", "Cópias de Chaves", "Travas de Segurança"]
        },
        {
            icon: <FaMotorcycle className="text-5xl text-brand mb-6" />,
            title: "Chaves para Motos",
            description: "Confecção de chaves para motocicletas de todas as cilindradas. Chaves codificadas e magnéticas para Honda, Yamaha, Kawasaki, BMW, entre outras.",
            details: ["Chaves Magnéticas", "Confecção pelo miolo", "Todas as marcas"]
        },
        {
            icon: <FaUnlock className="text-5xl text-brand mb-6" />,
            title: "Aberturas em Geral",
            description: "Abertura de cadeados, cofres, arquivos e móveis de escritório. Perdeu a chave ou o segredo? Nós resolvemos seu problema com discrição e profissionalismo.",
            details: ["Cofres", "Cadeados", "Móveis de Escritório"]
        },
        {
            icon: <FaShieldAlt className="text-5xl text-brand mb-6" />,
            title: "Instalação de Segurança",
            description: "Consultoria e instalação de dispositivos de segurança mecânica. Fechaduras auxiliares, travas tetra e sistemas reforçados para proteger seu patrimônio.",
            details: ["Travas Tetra", "Fechaduras Auxiliares", "Olho Mágico"]
        }
    ];

    return (
        <main className="bg-dark-main min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-grow">
                {/* Header da Página */}
                <div className="bg-slate-900 py-16 text-center border-b border-slate-800">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Nossos <span className="text-brand">Serviços</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto px-4 text-lg">
                        Confira a lista completa de soluções que oferecemos. Tecnologia de ponta e profissionais qualificados para atender sua necessidade.
                    </p>
                </div>

                {/* Lista de Serviços */}
                <section className="py-16 md:py-24 max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-[#25282A] p-8 rounded-2xl shadow-lg border border-slate-800 hover:border-brand-hover hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-center text-white mb-4">{service.title}</h3>
                                <p className="text-slate-300 text-center leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-2 border-t border-slate-700 pt-4">
                                    {service.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-center text-slate-400 text-sm bg-slate-900/50 py-1 px-3 rounded-full w-fit mx-auto">
                                            • {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* CTA Final */}
                    <div className="mt-20 text-center bg-gradient-to-r from-slate-900 to-slate-800 p-10 rounded-3xl shadow-2xl border border-slate-700">
                        <h2 className="text-3xl font-bold text-white mb-6">Não encontrou o que precisa?</h2>
                        <p className="text-slate-300 mb-8 text-lg">
                            Entre em contato conosco pelo WhatsApp. É provável que possamos ajudar você!
                        </p>
                        <a
                            href="https://wa.me/"
                            target="_blank"
                            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-lg shadow-green-900/20"
                        >
                            Falar com Especialista
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
