import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";

export default function Hero() {
    return (

        <section className="relative bg-slate-900 h-[500px] md:h-[650px] flex items-center">

            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="https://maintenance-minio.kdminhaoficina.com.br/blog/2022/11/2.jpg"
                    alt="Chave de carro na mão"
                    className="w-full h-full object-cover object-top opacity-20 animate-fade-in"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark-main via-slate-900/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-dark-main/50 via-transparent to-dark-main/80"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white mt-10">

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-2xl animate-slide-up">
                    Trancou a chave ou <br className="md:hidden" /> perdeu o controle? <br />
                    <span className="text-brand bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand-hover text-glow-subtle">
                        Nós chegamos rápido.
                    </span>
                </h1>

                <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto font-medium drop-shadow animate-slide-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
                    Especialista em abertura de automóveis, chaves codificadas e presenciais. Atendimento 24h em toda a região.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 animate-slide-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>

                    <a href="/agendar" className="group flex items-center justify-center gap-3 bg-brand hover:bg-brand-hover text-white px-8 py-5 rounded-full font-bold text-lg md:text-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(43,109,252,0.5)] hover:shadow-[0_0_30px_rgba(43,109,252,0.8)] border border-brand-hover/50">
                        <FaCalendarAlt className="" /> Agende agora
                    </a>

                    <a href="https://wa.me/" target="_blank" className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-600/90 text-white px-8 py-5 rounded-full font-bold text-lg md:text-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(22,163,74,0.4)] hover:shadow-[0_0_30px_rgba(22,163,74,0.6)] border border-green-500/50">
                        <FaWhatsapp size={28} /> Orçamento no Whatsapp
                    </a>

                </div>
            </div>
        </section>
    );
}