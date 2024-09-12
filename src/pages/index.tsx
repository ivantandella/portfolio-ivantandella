import WaveDown from "@/components/assets/wave-down";
import WaveUp from "@/components/assets/wave-up";
import Navbar from "@/components/navbar";
import HomeSection from "@/components/sections/home-section";
import { MAIN_COLOR_BLACK } from "@/constants/colors";
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

      <div style={{ height: 2000 }}>
        <Navbar />
        <HomeSection />
        <WaveDown />
        <div
          style={{
            height: 400,
            marginTop: -10,
            backgroundColor: MAIN_COLOR_BLACK,
          }}
        ></div>
        <WaveUp />
      </div>
    </>
  );
}
