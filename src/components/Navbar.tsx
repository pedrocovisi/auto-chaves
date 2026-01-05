import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-500">
              AUTO<span className="text-red-500">CHAVES</span>
            </span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#" className="hover:text-yellow-500 transition">Início</a>
            <a href="#" className="hover:text-yellow-500 transition">Serviços</a>
            <a href="#" className="hover:text-yellow-500 transition">Agendar</a>
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