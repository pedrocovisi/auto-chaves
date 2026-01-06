import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp, FaPhone, FaClock, FaCalendarAlt } from "react-icons/fa";

export default function AgendarPage() {
    return (
        <main className="bg-dark-main min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-grow">
                {/* Header */}
                <div className="bg-slate-900 py-16 text-center border-b border-slate-800">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Agende seu <span className="text-brand">Atendimento</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto px-4 text-lg">
                        Preencha o formulário abaixo ou entre em contato direto pelo WhatsApp para atendimento imediato.
                    </p>
                </div>

                <section className="py-16 max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Coluna da Esquerda: Contato Rápido */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-8">Emergência?</h2>

                            <div className="bg-brand/10 border border-brand/20 p-8 rounded-2xl mb-8">
                                <p className="text-slate-300 mb-6 text-lg">
                                    Se você está trancado para fora ou precisa de ajuda urgente, não precisa agendar! Ligue ou chame no Zap agora mesmo.
                                </p>
                                <div className="flex flex-col gap-4">
                                    <a href="https://wa.me/" target="_blank" className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl font-bold text-lg transition-transform hover:scale-105">
                                        <FaWhatsapp size={24} /> Chamar no WhatsApp
                                    </a>
                                    <a href="tel:+5511999999999" className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-xl font-bold text-lg transition-transform hover:scale-105">
                                        <FaPhone size={20} /> (11) 99999-9999
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-slate-800 p-3 rounded-full text-brand">
                                        <FaClock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Horário de Atendimento</h3>
                                        <p className="text-slate-400">Segunda a Sexta: 08h às 18h</p>
                                        <p className="text-slate-400">Sábado: 08h às 14h</p>
                                        <p className="text-brand font-bold mt-1">Plantão 24h para emergências</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-slate-800 p-3 rounded-full text-brand">
                                        <FaCalendarAlt size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Agendamento Flexível</h3>
                                        <p className="text-slate-400">Escolha o melhor horário para serviços de cópia, codificação e instalações residenciais.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Coluna da Direita: Formulário */}
                        <div className="bg-[#25282A] p-8 md:p-10 rounded-3xl shadow-xl border border-slate-800">
                            <h2 className="text-2xl font-bold text-white mb-6">Solicitar Agendamento</h2>
                            <form className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Nome Completo</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                                        placeholder="Seu nome"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-1">Telefone / WhatsApp</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                                        placeholder="(00) 00000-0000"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="date" className="block text-sm font-medium text-slate-400 mb-1">Data Preferida</label>
                                        <input
                                            type="date"
                                            id="date"
                                            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="time" className="block text-sm font-medium text-slate-400 mb-1">Horário</label>
                                        <input
                                            type="time"
                                            id="time"
                                            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-slate-400 mb-1">Tipo de Serviço</label>
                                    <select
                                        id="service"
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                                    >
                                        <option value="">Selecione o serviço...</option>
                                        <option value="automotivo">Chave Automotiva / Codificada</option>
                                        <option value="abertura">Abertura de Veículo</option>
                                        <option value="residencial">Fechadura Residencial</option>
                                        <option value="cofre">Abertura de Cofre</option>
                                        <option value="outro">Outro Serviço</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Mensagem (Opcional)</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                                        placeholder="Descreva melhor o que você precisa..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-brand hover:bg-brand-hover text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-blue-900/50 mt-4"
                                >
                                    Enviar Solicitação
                                </button>
                            </form>
                        </div>

                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
