import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";

export default function Hero() {
    return (
        // A section define a altura da capa (h-[600px] no desktop)
        <section className="relative bg-slate-900 h-[500px] md:h-[650px] flex items-center">

            {/* --- IMAGEM DE FUNDO ESCURECIDA --- */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="https://maintenance-minio.kdminhaoficina.com.br/blog/2022/11/2.jpg"
                    alt="Chave de carro na mão"
                    className="w-full h-full object-cover object-top opacity-10 md:opacity-20" // Opacidade baixa para escurecer a foto
                />
                {/* Um gradiente extra para garantir que o topo fique legível perto da navbar */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/60"></div>
            </div>

            {/* --- CONTEÚDO DO TEXTO E BOTÕES --- */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white mt-10">

                {/* Título Principal (H1) */}
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-lg">
                    Trancou a chave ou <br className="md:hidden" /> perdeu o controle? <br />
                    <span className="text-brand">Nós chegamos rápido.</span>
                </h1>

                {/* Subtítulo (P) */}
                <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto font-medium drop-shadow">
                    Especialista em abertura de automóveis, chaves codificadas e presenciais. Atendimento 24h em toda a região.
                </p>

                {/* BOTÕES DE AÇÃO PRINCIPAIS */}
                {/* No celular ficam um embaixo do outro (flex-col), no PC ficam lado a lado (sm:flex-row) */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">

                    {/* Botão de Ligar (Vermelho - Emergência) */}
                    <a href="" className="group flex items-center justify-center gap-3 bg-brand hover:bg-brand-hover text-white px-8 py-5 rounded-full font-bold text-lg md:text-xl transition-all hover:scale-105 shadow-lg shadow-blue-900/50">
                        <FaCalendarAlt className="" /> Agende agora
                    </a>

                    {/* Botão de Zap (Verde) */}
                    <a href="https://wa.me/" target="_blank" className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-full font-bold text-lg md:text-xl transition-all hover:scale-105 shadow-lg shadow-green-900/50">
                        <FaWhatsapp size={28} /> Orçamento no Whatsapp
                    </a>

                </div>
            </div>
        </section>
    );
}