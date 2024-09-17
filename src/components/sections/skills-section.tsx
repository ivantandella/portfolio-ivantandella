import { MAIN_COLOR_GREY } from "@/constants/colors";
import SectionTitle from "../section-title";
import { Card, Flex, Image, Title } from "@mantine/core";
import { skills } from "@/utils/data/skills";
import { Sections } from "@/constants/sections";

export default function SkillsSection() {
  return (
    <div
      style={{ marginTop: -50, backgroundColor: MAIN_COLOR_GREY }}
      id={Sections.SKILL}
    >
      <SectionTitle>Tech Stack</SectionTitle>
      <Flex
        direction={"row"}
        gap={"md"}
        wrap={"wrap"}
        justify={"center"}
        maw={1024}
        mx={"auto"}
      >
        {skills.map((skill) => (
          <Card key={skill.title} radius={10} className="skill-card">
            <Flex
              direction={"column"}
              gap={"md"}
              align={"center"}
              justify={"space-between"}
              h={"100%"}
            >
              <Flex
                direction={"column"}
                gap={"md"}
                w={100}
                h={100}
                justify={"center"}
              >
                <Image src={skill.image} alt={skill.title} w={100} h={100} />
              </Flex>
              <Title order={4}>{skill.title}</Title>
            </Flex>
          </Card>
        ))}
      </Flex>
    </div>
  );
}
