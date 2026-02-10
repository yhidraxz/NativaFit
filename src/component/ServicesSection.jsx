// ServicesSection.jsx
import { FaUsers, FaClipboardCheck, FaUserClock } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import React from "react";

export function ServicesSection() {
  const services = [
    {
      icon: <FaUsers />,
      emoji: "🤝",
      title: "Aulas coletivas",
      text: "Dança, localizada, funcional e outras modalidades para manter o corpo ativo e motivado.",
    },
    {
      icon: <GiWeightLiftingUp />,
      emoji: "💪",
      title: "Musculação",
      text: "Treinos estruturados para saúde, força, estética e evolução contínua.",
    },
    {
      icon: <FaClipboardCheck />,
      emoji: "📊",
      title: "Avaliação física",
      text: "Avaliação antropométrica para entender seu corpo e direcionar o treino corretamente.",
    },
    {
      icon: <FaUserClock />,
      emoji: "⏱️",
      title: "Free Time",
      text: "Agende um horário com um de nossos personais e treine com acompanhamento exclusivo.",
    },
  ];

  return (
    <section className="relative bg-black flex flex-col py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <span className="block w-12 h-1 bg-white mb-3"></span>
          <h3 className="font-display text-5xl font-bold uppercase text-white">
            O que oferecemos
          </h3>
        </div>
        <p className="text-gray-400 max-w-xl mb-14">
          Estrutura, método e acompanhamento para cuidar da sua saúde de forma
          completa.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="
                bg-zinc-900 border border-zinc-800 p-5 rounded-2xl
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-2xl hover:border-zinc-700
              "
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="
                    flex-none w-12 h-12 rounded-xl
                    bg-zinc-800 text-white
                    flex items-center justify-center text-xl
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                >
                  {s.icon}
                </div>

                {/* Text */}
                <div>
                  <h4
                    className="
                      text-white text-sm md:text-base
                      font-extrabold uppercase tracking-wide
                      mb-1
                    "
                  >
                    {s.emoji} {s.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://wa.me/5591992487292?text=Oi!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20nativa"
            target="_blank"
            rel="noopener noreferrer"
            className="
    px-8 py-4 rounded-xl
    font-bold text-black
    bg-white
    transition-all duration-200
    hover:scale-95 hover:opacity-90
  "
          >
            Falar com um atendente
          </a>
        </div>
      </div>
    </section>
  );
}
