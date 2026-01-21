import React from "react";

export function HeroSection() {
  return (
    <div className="relative h-[710px] w-full bg-cover bg-center text-white bg-[url('/nativaFrente.jpg')]">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-4 bg-base-100 z-20">
        {/* Logo + Name */}
        <div className="flex items-center space-x-2">
          <img
            src="/logoNativaSem.png"
            alt="NativaFit Logo"
            className="h-8 w-auto"
          />
          <span className="font-bold text-lg tracking-wide">NativaFit</span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold cursor-pointer">☰</div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-xl z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 mt-12">
          Qualidade de vida <br /> Estética e <br /> Saúde
        </h1>
        <p className="text-lg mb-8">
          Estrutura moderna, profissionais presentes e treinos direcionados para
          gerar resultado real.
        </p>
        <button
          onClick={() =>
            document
              .querySelector("#projetos")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-white text-black px-6 py-3 font-semibold text-lg w-fit"
        >
          Começar Agora
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
