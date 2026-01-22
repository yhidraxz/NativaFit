import React from "react";

export function ReusableHero({
  title,
  subtitle,
  backgroundImage,
  height = "h-[520px]",
  customDivCss = "",
  buttonText,
  onClick,
}) {
  return (
    <section
      className={`relative w-full ${height} bg-cover bg-center`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 bg-black/60 ${customDivCss}`} />

      {/* Conteúdo */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-gray-300 text-lg mb-10">{subtitle}</p>

          {/* CTA */}
          {buttonText && (
            <button
              onClick={onClick}
              className="w-full bg-white text-black py-3 rounded-lg font-bold"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
