import WaveDown from "@/components/assets/wave-down";
import WaveUp from "@/components/assets/wave-up";
import Navbar from "@/components/navbar";
import CertificateSection from "@/components/sections/certificate-section";
import ExperiencesSection from "@/components/sections/experiences-section";
import HomeSection from "@/components/sections/home-section";
import ProjectSection from "@/components/sections/project-section";
import SkillsSection from "@/components/sections/skills-section";
import SocialsSection from "@/components/sections/socials-section";

export default function App() {
  return (
    <main>
      <Navbar />
      <div style={{ overflowX: "hidden" }}>
        <HomeSection />
        <WaveDown />
        <ExperiencesSection />
        <WaveUp />
        <ProjectSection />
        <WaveDown />
        <CertificateSection />
        <WaveUp />
        <SkillsSection />
        <WaveDown />
        <SocialsSection />
      </div>
    </main>
  );
}
