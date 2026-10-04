import Header from "@/components/common/header";
import Particles from "@/components/common/particles";
import CertificateSection from "@/components/sections/certificates";
import ExperiencesSection from "@/components/sections/experiences";
import HomeSection from "@/components/sections/home";
import ProjectSection from "@/components/sections/projects";
import TechStackSection from "@/components/sections/tech-stack";
import SocialsSection from "@/components/sections/socials";

export default function App() {
  return (
    <main>
      <Particles count={80} />
      <Header />
      <div style={{ overflowX: "hidden", position: "relative" }}>
        <HomeSection />
        <ExperiencesSection />
        <ProjectSection />
        <CertificateSection />
        <TechStackSection />
        <SocialsSection />
      </div>
    </main>
  );
}
