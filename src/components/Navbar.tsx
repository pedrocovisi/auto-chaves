import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-900/95 backdrop-blur-md text-white shadow-lg sticky top-0 z-50 border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-brand text-glow">
              AUTO<span className="text-brand-red text-glow-red">CHAVES</span>
            </span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-8 font-medium">
            <Link href="/" className="hover:text-brand transition">Início</Link>
            <Link href="/servicos" className="hover:text-brand transition">Serviços</Link>
            <Link href="/agendar" className="hover:text-brand transition">Agendar</Link>
          </div>

          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/" // Link real do zap
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-transform hover:scale-105"
          >
            <FaWhatsapp size={20} />
            WHATSAPP
          </a>
        </div>
      </div>
    </nav>
  );
}