"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Agendar', href: '/agendar' },
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md text-white shadow-lg sticky top-0 z-50 border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <span className="text-2xl font-bold text-brand text-glow">
              AUTO<span className="text-brand-red text-glow-red">CHAVES</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-8 font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative transition-all duration-300 py-1 ${isActive
                      ? 'text-brand text-glow-subtle font-bold'
                      : 'text-slate-300 hover:text-white'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand animate-fade-in"></span>
                  )}
                </Link>
              );
            })}
          </div>

          <a
            href="https://wa.me/"
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