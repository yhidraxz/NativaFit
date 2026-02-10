import React from "react";

export function HeroSection1() {
  return (
    <div className="relative h-[710px] w-full bg-cover bg-center text-white ml:bg-[url('/nativaAparelhosPC.jpeg')] bg-[url('/nativaAparelhos.jpg')]">
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-end mb-8 px-6 max-w-xl z-10">
        <div className="bg-base-100 w-[280px] ml:w-[400px] p-6 py-10">
          <h1 className="text-2xl md:text-6xl font-display font-bold leading-tight mb-4">
            A Nativa Fit é <br />
            Para você <br />
            que quer: <br />
          </h1>
          <ul className="text-gray-300 text-base space-y-2 list-disc list-inside marker:text-green-500 mb-6">
            <li>Segurança e conforto em cada treino</li>
            <li>Saúde, bem-estar e mais disposição</li>
            <li>Profissionais capacitados de verdade</li>
            <li>Resultados reais: menos gordura e mais força</li>
          </ul>

          <a
            href="https://wa.me/5591992487292?text=Oi!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20nativa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold text-lg w-fit underline cursor-pointer"
          >
            Falar com um Atendente
          </a>
        </div>
      </div>
    </div>
  );
}
