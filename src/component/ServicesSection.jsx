// ServicesSection.jsx
import { FaUsers, FaClipboardCheck, FaUserClock } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import React from "react";

export function ServicesSection() {
  const services = [
    {
      icon: <FaUsers />,
      title: "Aulas coletivas",
      text: "Dança, localizada, funcional e outras modalidades para manter o corpo ativo e motivado.",
    },
    {
      icon: <GiWeightLiftingUp />,
      title: "Musculação",
      text: "Treinos estruturados para saúde, força, estética e evolução contínua.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Avaliação física",
      text: "Avaliação antropométrica para entender seu corpo e direcionar o treino corretamente.",
    },
    {
      icon: <FaUserClock />,
      title: "Free Time",
      text: "Não quer treinar sozinho? Sem problemas! agende um horário com um de nossos personais disponíveis.",
    },
  ];

  return (
    <div className="relative bg-black flex flex-col py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          O que oferecemos
        </h3>
        <p className="text-gray-400 max-w-xl mb-10">
          Estrutura, método e acompanhamento para cuidar da sua saúde de forma
          completa.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="card bg-zinc-900 border border-zinc-800 p-4 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex-none w-11 h-12 rounded-lg bg-zinc-800 text-white flex items-center justify-center text-xl">
                  {s.icon}
                </div>

                <div>
                  <h4 className="font-semibold text-white">{s.title}</h4>
                  <p className="text-sm text-gray-400 mt-1">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-lg font-semibold bg-white text-black"
          >
            Falar com um atendente
          </a>
        </div>
      </div>
    </div>
  );
}
