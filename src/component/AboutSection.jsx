import { useState } from "react";

const images = [
  { id: 1, src: "/imgWit.webp", alt: "Ambiente Wit Boutique" },
  { id: 2, src: "/imgWit2.webp", alt: "Ambiente Wit Boutique" },
  { id: 3, src: "/imgWit3.webp", alt: "Ambiente Wit Boutique" },
];

export function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // detect which slide is in view
  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.clientWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-20 bg-black text-white">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10 bg-silver-gradient bg-clip-text text-transparent">
        NOSSA ESTRUTURA
      </h2>

      {/* Carousel */}
      <div
        className="flex overflow-x-auto scrollbar-hide gap-[5vw] px-[15vw] snap-x snap-mandatory"
        onScroll={handleScroll}
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative flex-shrink-0 w-[80vw] h-[350px] snap-center rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation Dots (same as VideoCarouselSection) */}
      <div className="p-6 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white w-6" : "bg-gray-600"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
