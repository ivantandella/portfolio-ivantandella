import SectionTitle from "@/components/common/section-title";
import Timeline from "./timeline";
import FadeUp from "@/components/common/fade-up";
import { experiences } from "@/utils/data/experiences";
import { Sections } from "@/constants/sections";
import { sectionWrapper } from "./styles.css";

export default function ExperiencesSection() {
  return (
    <section id={Sections.EXPERIENCE} className={sectionWrapper}>
      <FadeUp>
        <SectionTitle subtitle="CAREER">Experiences</SectionTitle>
      </FadeUp>
      <FadeUp delay={200}>
        <Timeline experiences={experiences} />
      </FadeUp>
    </section>
  );
}
