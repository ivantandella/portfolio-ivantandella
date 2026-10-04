import { Sections } from "@/constants/sections";
import { projects } from "@/utils/data/projects";
import { Grid } from "@mantine/core";
import ProjectCard from "@/components/project-card";
import SectionTitle from "@/components/section-title";
import FadeUp from "@/components/fade-up";
import { sectionWrapper, gridContainer } from "./styles.css";

export default function ProjectSection() {
  return (
    <section id={Sections.PROJECTS} className={sectionWrapper}>
      <FadeUp>
        <SectionTitle subtitle="FEATURED PROJECTS">Projects</SectionTitle>
      </FadeUp>

      <div className={gridContainer}>
        <Grid gap="xl">
          {projects.map((project, index) => (
            <Grid.Col key={project.title} span={{ base: 12, md: 6 }}>
              <FadeUp delay={index * 100}>
                <ProjectCard project={project} />
              </FadeUp>
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </section>
  );
}
