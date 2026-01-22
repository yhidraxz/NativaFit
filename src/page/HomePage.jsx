import { HeroSection } from "../component/heroSection.jsx";
import { HeroSection1 } from "../component/heroSection1.jsx";
import { BulletSection } from "../component/bulletSection.jsx";
import { ServicesSection } from "../component/ServicesSection.jsx";
import { VideoSection } from "../component/VideoSection.jsx";
import { Location } from "../component/Location.jsx";
import { PlansSection } from "../component/PlansSection.jsx";
import { Footer } from "../component/Footer.jsx";
import { TeamVideoSection } from "../component/TeamVideoSection.jsx";
import { VideoCarouselSection } from "../component/VideoCarousel.jsx";

export function Home() {
  return (
    <div className="text-base-light-100">
      {" "}
      <HeroSection />
      <HeroSection1 />
      <section className="relative w-full bg-base-100">
        {/* Heading section */}
        <div className="py-4 md:px-20 text-center bg-black/80">
          <h2 className="text-3xl md:text-4xl font-display font-medium">
            Mexa o corpo. <br />
            Cuide da sua saúde.
          </h2>
        </div>

        <VideoSection />
      </section>
      <section id="beneficios">
        <BulletSection />
      </section>
      <section>
        <ServicesSection />
      </section>
      {/* <section>
        <TeamVideoSection />
      </section> */}
      <section id="formulario">
        <Location />
      </section>
      <section id="projetos">
        <PlansSection />
      </section>
      {/* <section>
        <VideoCarouselSection />
      </section> */}
      <Footer />
    </div>
  );
}
