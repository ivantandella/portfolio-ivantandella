import { MAIN_COLOR_BLACK } from "@/constants/colors";
import SectionTitle from "../section-title";
import MyTimeline from "../my-timeline";
import { experiences } from "@/utils/data/experiences";
import { Sections } from "@/constants/sections";

export default function ExperiencesSection() {
  return (
    <div
      style={{
        marginTop: -10,
        paddingBottom: 40,
        backgroundColor: MAIN_COLOR_BLACK,
      }}
      id={Sections.EXPERIENCE}
    >
      <SectionTitle>Experiences</SectionTitle>

      <MyTimeline experiences={experiences} />
    </div>
  );
}
