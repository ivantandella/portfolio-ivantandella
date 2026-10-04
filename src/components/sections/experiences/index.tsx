import SectionTitle from "@/components/section-title";
import MyTimeline from "@/components/my-timeline";
import FadeUp from "@/components/fade-up";
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
        <MyTimeline experiences={experiences} />
      </FadeUp>
    </section>
  );
}
