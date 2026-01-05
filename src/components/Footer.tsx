import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Coluna 1: Logo e Sobre */}
          <div>
            <span className="text-2xl font-bold text-yellow-500 tracking-tighter block mb-4">
              AUTO<span className="text-white">CHAVES</span>
            </span>
            <p className="text-sm leading-relaxed mb-4">
              Sua solução rápida e confiável para problemas com chaves automotivas e residenciais. 
              Atendemos sempre com excelência e equipamentos de última geração.
            </p>
          </div>

          {/* Coluna 2: Endereço */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Onde Estamos</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-yellow-500 mt-1" />
                <span>
                  Av. Principal da Cidade, 1234<br />
                  Bairro Centro - Cidade/UF<br />
                  CEP: 00000-000
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos e Redes */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Fale Conosco</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaPhone className="text-yellow-500" />
                <a href="tel:+5511999999999" className="hover:text-white transition">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-500" />
                <a href="mailto:contato@autochaves.com" className="hover:text-white transition">
                  contato@autochaves.com
                </a>
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className="mt-6 flex gap-4">
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-yellow-500 hover:text-slate-900 transition">
                <FaWhatsapp size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-yellow-500 hover:text-slate-900 transition">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Linha final de Copyright */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Auto Chaves. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}