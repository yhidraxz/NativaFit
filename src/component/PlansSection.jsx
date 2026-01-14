import { ProjectPlansSection } from "./ProjectPlansSection.jsx";
import { ReusableHero } from "./ReusableHero.jsx";

export function PlansSection() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-white mb-2">
          Planos que se adaptam a você
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
          },
        ]}
      />{" "}
      <ReusableHero
        title={"Projeto Família"}
        subtitle={
          "Traga a família pra um estilo de vida saudável e ganhe 5% de desconto em qualquer plano!"
        }
        backgroundImage="./familiaAndando.jpg"
        customDivCss={
          "bg-gradient-to-b from-black/0 via-base-100/30 to-base-100"
        }
      />
      <ReusableHero
        title={"Projeto Brothers"}
        subtitle={
          "Traga seus amigos juntos e paguem o preço do anual em pagamentos mensais (limite máximo de 6 pessoas)"
        }
        backgroundImage="./amigosTreino.jpg"
        customDivCss={
          "bg-gradient-to-t from-base-100/0 via-base-100/20 to-base-100"
        }
        buttonText={"Quero projeto Família/Brothers"}
      />
    </div>
  );
}
