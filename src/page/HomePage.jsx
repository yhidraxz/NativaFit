import { HeroSection } from "../component/heroSection.jsx";
import { HeroSection1 } from "../component/heroSection1.jsx";
import { NavBar } from "../component/NavBar.jsx";
import { BulletSection } from "../component/bulletSection.jsx";
import { AboutSection } from "../component/AboutSection.jsx";
import { VideoSection } from "../component/VideoSection.jsx";
import { Location } from "../component/Location.jsx";
import { Footer } from "../component/Footer.jsx";
import { TeamVideoSection } from "../component/TeamVideoSection.jsx";
import { VideoCarouselSection } from "../component/VideoCarousel.jsx";

export function Home() {
  return (
    <div className="text-base-light-100">
      <NavBar />
      <HeroSection />
      <HeroSection1 />
      <AboutSection />
      <section className="relative w-full bg-base-100">
        {/* Heading section */}
        <div className="py-4 md:px-20 text-center bg-black/80">
          <h2 className="text-3xl md:text-4xl font-medium bg-silver-gradient bg-clip-text text-transparent">
            Nós NÃO Somos uma academia..
          </h2>
        </div>

        <VideoSection />
      </section>
      <section id="beneficios">
        <BulletSection />
      </section>
      {/* <section>
        <TeamVideoSection />
      </section> */}
      <section>
        <VideoCarouselSection />
      </section>
      <section id="formulario">
        <Location />
      </section>
      <Footer />
    </div>
  );
}
