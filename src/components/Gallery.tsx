"use client";

import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStore } from 'react-icons/fa';

const images = [
    {
        url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2000&auto=format&fit=crop",
        caption: "Tecnologia de ponta em chaves presenciais"
    },
    {
        url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2000&auto=format&fit=crop",
        caption: "Especialistas em todas as marcas e modelos"
    },
    {
        url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2000&auto=format&fit=crop",
        caption: "Atendimento profissional e garantido"
    }
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <section className="bg-dark-surface py-16 border-t border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center mb-12 animate-slide-up">
                    <div className="inline-block p-3 rounded-full bg-slate-800 mb-4 text-brand">
                        <FaStore size={30} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Conheça Nosso <span className="text-brand text-glow-subtle">Espaço</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Visite nosso espaço físico equipado com tecnologia de ponta para melhor atender você.
                        Ambiente climatizado e cafézinho te esperando!
                    </p>
                </div>

                <div className="relative group max-w-4xl mx-auto h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700 animate-fade-in">

                    <div
                        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
                        className="w-full h-full bg-center bg-cover duration-500 ease-out transition-all"
                    >
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                            <p className="text-white text-xl font-bold text-center">
                                {images[currentIndex].caption}
                            </p>
                        </div>
                    </div>

                    <div
                        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-brand hover:scale-110 transition-all border border-white/20"
                        onClick={prevSlide}
                    >
                        <FaChevronLeft size={24} />
                    </div>

                    <div
                        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-brand hover:scale-110 transition-all border border-white/20"
                        onClick={nextSlide}
                    >
                        <FaChevronRight size={24} />
                    </div>

                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {images.map((_, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className={`transition-all duration-300 cursor-pointer rounded-full shadow-md ${currentIndex === slideIndex ? "p-1.5 bg-brand w-8" : "p-1.5 bg-white/50 w-2 hover:bg-white"}`}
                            ></div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
