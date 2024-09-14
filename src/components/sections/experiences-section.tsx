import { MAIN_COLOR_BLACK } from "@/constants/colors";
import SectionTitle from "../section-title";
import MyTimeline from "../my-timeline";
import { experiences } from "@/utils/data/experiences";

export default function ExperiencesSection() {
  return (
    <div style={{ marginTop: -10, backgroundColor: MAIN_COLOR_BLACK }}>
      <SectionTitle>Experiences</SectionTitle>

      <MyTimeline experiences={experiences} />
    </div>
  );
}
