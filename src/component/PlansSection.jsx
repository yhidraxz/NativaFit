import { useEffect, useState } from "react";
import { ProjectPlansSection } from "./ProjectPlansSection.jsx";
import { ReusableHero } from "./ReusableHero.jsx";

export function PlansSection() {
  const [familiaBg, setFamiliaBg] = useState("/familiaAndando.jpg");
  const [brothersBg, setBrothersBg] = useState("/amigosTreino.jpg");

  useEffect(() => {
    const updateBackgrounds = () => {
      const isDesktop = window.innerWidth >= 768;

      setFamiliaBg(isDesktop ? "/familiaAndandoPC.jpg" : "/familiaAndando.jpg");

      setBrothersBg(isDesktop ? "/amigosTreinoPC.jpg" : "/amigosTreino.jpg");
    };

    updateBackgrounds(); // inicial
    window.addEventListener("resize", updateBackgrounds);

    return () => window.removeEventListener("resize", updateBackgrounds);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="text-center py-12">
        <h2 className="text-3xl ml:text-5xl font-display font-bold text-white mb-2">
          Planos que se adaptam <br /> a Você
        </h2>
        <p className="text-gray-400">
          Escolha o projeto ideal para o seu momento
        </p>
      </div>

      {/* Carousel */}
      <ProjectPlansSection
        title="Projeto Visitante"
        subtitle="Para quem quer conhecer a Nativa Fit e iniciar uma rotina saudável."
        plans={[
          {
            id: 1,
            title: "Diária",
            price: "R$ 29,99 / dia",
            description: "Acesso por um dia.",
            features: [
              "Pagamento em Dinheiro, Pix ou Cartão",
              "Musculação",
              "Aulas coletivas",
            ],
            link: "https://wa.me/5591992487292?text=Ol%C3%A1!%20Gostaria%20de%20fechar%20uma%20di%C3%A1ria%20na%20Nativa",
          },
          {
            id: 2,
            title: "Mensal",
            price: "R$ 187,00 / mês",
            description: "Plano completo para evolução contínua.",
            features: [
              "Pagamento em Pix ou Cartão",
              "Musculação",
              "Treinos Montados individualmente",
              "Aeróbio",
              "Aulas coletivas",
            ],
            highlight: true,
            link: "https://wa.me/5591992487292?text=Ol%C3%A1!%20Gostaria%20de%20fechar%20um%20plano%20mensal%20na%20Nativa",
          },
          {
            id: 3,
            title: "Anual",
            price: "R$ 147,00 / mês",
            description: "Mais economia e compromisso com sua saúde.",
            features: [
              "Pagamento Recorrente em Pix ou Cartão",
              "Todas as modalidades",
              "Programa de Treino individual",
              "Melhor custo-benefício",
            ],
            link: "https://wa.me/5591992487292?text=Ol%C3%A1!%20Gostaria%20de%20fechar%20um%20plano%20anual%20na%20Nativa",
          },
        ]}
      />

      {/* Projeto Família */}
      <ReusableHero
        title="Projeto Família"
        subtitle="Traga a família pra um estilo de vida saudável e ganhe 5% de desconto em qualquer plano!"
        backgroundImage={familiaBg}
        customDivCss="bg-gradient-to-b from-black/0 via-base-100/30 to-base-100"
        buttonText="Quero projeto Família"
        buttonLink="https://wa.me/5591992487292?text=Ol%C3%A1!%20Gostaria%20de%20participar%20do%20projeto%20Fam%C3%ADlia"
      />

      {/* Projeto Brothers */}
      <ReusableHero
        title="Projeto Brothers"
        subtitle="Traga seus amigos juntos e paguem o preço do anual em pagamentos mensais (a partir de 5 pessoas)"
        backgroundImage={brothersBg}
        customDivCss="bg-gradient-to-t from-base-100/0 via-base-100/20 to-base-100"
        buttonText="Quero projeto Brothers"
        buttonLink="https://wa.me/5591992487292?text=Ol%C3%A1!%20Gostaria%20de%20participar%20do%20projeto%20Brothers"
      />
    </div>
  );
}
