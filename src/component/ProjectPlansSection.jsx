import { useState, useEffect, useRef } from "react";

function PlanCard({ plan, isActive }) {
  return (
    <div
      className={`w-[70vw] md:w-[320px] h-auto flex-shrink-0 snap-center
      rounded-2xl p-6 shadow-xl transition-all duration-300
      ${
        isActive
          ? "scale-105 bg-green-700 text-white"
          : "bg-zinc-900 text-white opacity-80"
      }`}
    >
      <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
      <p className="text-2xl font-extrabold mb-2">{plan.price}</p>
      <p className="text-sm text-gray-300 mb-4">{plan.description}</p>

      <ul className="space-y-2 mb-6">
        {plan.features.map((item, i) => (
          <li key={i} className="text-sm flex items-center gap-2">
            ✓ {item}
          </li>
        ))}
      </ul>

      <a
        href={plan.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <button className="w-full bg-white text-black py-3 rounded-lg font-bold">
          Falar com um Atendente
        </button>
      </a>
    </div>
  );
}

export function ProjectPlansSection({ title, subtitle, plans }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const middleIndex = Math.floor(plans.length / 2);

  // 🔹 Start scroll in the middle
  useEffect(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const firstCard = container.children[0];
    if (!firstCard) return;

    const gap = 24; // gap-6
    const cardWidth = firstCard.offsetWidth + gap;

    container.scrollTo({
      left: cardWidth * middleIndex,
      behavior: "auto",
    });

    setActiveIndex(middleIndex);
  }, [middleIndex]);

  // 🔹 Update active index based on scroll
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  return (
    <section className="bg-black flex flex-col py-24 pb-20">
      {/* Header */}
      <div className="text-center px-6 mb-14">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
          {title}
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">{subtitle}</p>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto overflow-y-hidden gap-6 px-6 snap-x snap-mandatory scrollbar-hide"
      >
        {plans.map((plan, index) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isActive={index === activeIndex}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {plans.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white w-6" : "bg-gray-600 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
