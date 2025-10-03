import React from "react";

export function HeroSection() {
  return (
    <div className="relative h-screen w-full bg-cover bg-center text-white bg-[url('/MobHeroSection.webp')]">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-4 bg-black z-20">
        {/* Logo + Name */}
        <div className="flex items-center space-x-6">
          <img src="/witLogo.png" alt="WIT Logo" className="h-8 w-auto" />
          <span className="font-bold text-lg tracking-wide">W I T</span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="bg-white text-black px-4 py-2 font-medium text-sm">
            Entre em contato
          </button>
          <div className="text-2xl font-bold cursor-pointer">☰</div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-xl z-10">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8 mt-8">
          UM NOVO CONCEITO EM CUIDADO COM A SAÚDE
        </h1>
        <p className="text-base mb-8">
          para quem nunca se identificou com academias tradicionais, mas deseja
          cuidar de seu corpo e saúde de forma segura e personalizada.
        </p>
        <button className="bg-white text-black px-6 py-3 font-semibold text-sm w-fit">
          Marcar experiência exclusiva
        </button>
      </div>

      {/* Bottom Right Circle Arrow */}
      <div className="absolute bottom-6 right-6 z-10">
        <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-lg">
          ↓
        </div>
      </div>
    </div>
  );
}
