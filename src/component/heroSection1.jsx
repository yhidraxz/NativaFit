import React from "react";

export function HeroSection1() {
  return (
    <div className="relative h-[710px] w-full bg-cover bg-center text-white bg-[url('/PH2.jpg')]">
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-end mb-8 px-6 max-w-xl z-10">
        <div className="bg-base-100 w-[280px] p-6 py-10">
          <h1 className="text-2xl md:text-6xl font-bold leading-tight mb-4">
            Cansado de <br />
            Começar <br />
            E parar? <br />
          </h1>
          <p className="text-lg mb-6">
            O problema não é falta de força de vontade. É falta de
            acompanhamento, adaptação e um ambiente que te puxe pra frente.
          </p>
          <p className="text-white font-semibold text-lg w-fit underline">
            Ver Benefícios
          </p>
        </div>
      </div>
    </div>
  );
}
