import { PrimaryButton } from "./primaryButton";

export function Location() {
  return (
    <section className="py-12 bg-gradient-to-b from-black/95 to-base-100 w-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-medium text-primary text-primary bg-gold-gradient bg-clip-text text-transparent mb-4">
          Onde Estamos
        </h2>
        <p className="text-lg text-base-light-100 mb-6">
          A NativaFit está localizada na Av. Nezeazeno Ferreira, em frente ao
          posto Ajuruteua, no Bairro do Perpétuo Socorro, em Bragança, Pará.
        </p>
        <div className="relative w-full h-96 mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.40437311823!2d-46.7727904!3d-1.0434954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92aedf137d79781b%3A0x11691c69f95b43f!2sNativafit%20academia!5e0!3m2!1spt-BR!2sBR!4v1700000000000"
            className="absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-lg"
            allowFullScreen=""
            loading="lazy"
            title="Localização do WIT Boutique"
          ></iframe>
        </div>
        <div className="text-center">
          <div className="mt-8 flex justify-center">
            <a
              href="https://wa.me/5591993255856?text=Oi!%20Gostaria%20de%20agendar%20uma%20experi%C3%AAncia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-4/5 text-lg px-6 py-2.5 font-semibold text-[#232323] shadow-md"
              style={{
                background:
                  "linear-gradient(135deg, #fff1b8 0%, #f6e27a 20%, #d4af37 45%, #b8860b 65%, #e7c74d 80%, #fff8d0 100%)",
              }}
            >
              Agendar Experiência Exclusiva
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
