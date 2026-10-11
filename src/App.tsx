import Header from "@/components/common/header";
import Particles from "@/components/common/particles";
import ExperiencesSection from "@/components/sections/experiences";
import HomeSection from "@/components/sections/home";
import ProjectSection from "@/components/sections/projects";
import TechStackSection from "@/components/sections/tech-stack";
import Footer from "@/components/sections/footer";

export default function App() {
  return (
    <main>
      <Particles />
      <Header />
      <div style={{ overflowX: "hidden", position: "relative" }}>
        <HomeSection />
        <ExperiencesSection />
        <ProjectSection />
        {/* <CertificateSection /> */}
        <TechStackSection />
        <Footer />
      </div>
    </main>
  );
}
