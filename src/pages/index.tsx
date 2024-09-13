import WaveDown from "@/components/assets/wave-down";
import WaveUp from "@/components/assets/wave-up";
import Navbar from "@/components/navbar";
import CertificateSection from "@/components/sections/certificate-section";
import HomeSection from "@/components/sections/home-section";
import ProjectSection from "@/components/sections/project-section";
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
        <HomeSection />
        <WaveDown />
        <CertificateSection />
        <WaveUp />
        <ProjectSection />
        <WaveDown />
        <SocialsSection />
      </main>
    </>
  );
}
