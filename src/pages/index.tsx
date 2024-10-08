import WaveDown from "@/components/assets/wave-down";
import WaveUp from "@/components/assets/wave-up";
import Navbar from "@/components/navbar";
import CertificateSection from "@/components/sections/certificate-section";
import ExperiencesSection from "@/components/sections/experiences-section";
import HomeSection from "@/components/sections/home-section";
import ProjectSection from "@/components/sections/project-section";
import SkillsSection from "@/components/sections/skills-section";
import SocialsSection from "@/components/sections/socials-section";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Ivan Tandella</title>
        <meta name="description" content="Ivan Tandella's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div
          style={{
            display: "absolute",
            inset: 0,
            overflowX: "hidden",
          }}
        >
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
    </>
  );
}
