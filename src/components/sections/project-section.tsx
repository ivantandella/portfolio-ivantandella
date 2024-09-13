import { MAIN_COLOR_GREY, MAIN_COLOR_WHITE } from "@/constants/colors";
import { Sections } from "@/constants/sections";
import { Title } from "@mantine/core";

export default function ProjectSection() {
  return (
    <div
      id={Sections.PROJECTS}
      style={{
        height: "400px",
        marginTop: -50,
        backgroundColor: MAIN_COLOR_GREY,
      }}
    >
      <Title c={MAIN_COLOR_WHITE} ta={"center"} mb={20}>
        Projects
      </Title>
    </div>
  );
}
