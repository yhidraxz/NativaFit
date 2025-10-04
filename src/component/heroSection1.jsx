import React from "react";

export function HeroSection1() {
  return (
    <div className="relative h-[710px] w-full bg-cover bg-center text-white bg-[url('/MobHeroSection.webp')]">
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-end mb-8 px-6 max-w-xl z-10">
        <div className="bg-black w-[280px] p-6 py-10">
          <h1 className="text-2xl md:text-6xl font-bold leading-tight mb-4">
            Cuidado <br />
            Personalizado. <br />
            Ambiente <br />
            Exclusivo. <br />
          </h1>
          <p className="text-lg mb-6">
            Chega de academias tradicionais, receba cuidade personalizado
            ambiente exclusivo
          </p>
          <p className="text-white font-semibold text-lg w-fit underline">
            Ver Benefícios
          </p>
        </div>
      </div>
    </div>
  );
}
