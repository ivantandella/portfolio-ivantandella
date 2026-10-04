import Navbar from "@/components/common/navbar";
import CertificateSection from "@/components/sections/certificates";
import ExperiencesSection from "@/components/sections/experiences";
import HomeSection from "@/components/sections/home";
import ProjectSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import SocialsSection from "@/components/sections/socials";
import AntigravityParticles from "@/components/particles";

export default function App() {
  return (
    <main>
      {/* Particles float above all content via z-index: 50, pointer-events: none */}
      <AntigravityParticles />
      <Navbar />
      <div style={{ overflowX: "hidden", position: "relative" }}>
        <HomeSection />
        <ExperiencesSection />
        <ProjectSection />
        <CertificateSection />
        <SkillsSection />
        <SocialsSection />
      </div>
    </main>
  );
}
