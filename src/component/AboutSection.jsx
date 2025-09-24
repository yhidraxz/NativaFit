export function AboutSection() {
  return (
    <section className="relative w-full py-20 px-6 md:px-20 bg-black">
      {/* Overlays */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-6 bg-silver-gradient bg-clip-text text-transparent">
        {" "}
        Nossa estrutura{" "}
      </h2>
      <div className="relative max-w-6xl mx-auto">
        {/* Imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/imgWit.webp"
              alt="Ambiente Wit Boutique"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/imgWit2.webp"
              alt="Ambiente Wit Boutique"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl sm:col-span-2 md:col-span-1">
            <img
              src="/imgWit3.webp"
              alt="Ambiente Wit Boutique"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
