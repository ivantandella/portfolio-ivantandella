import {
  ACCENT_COLOR,
  MAIN_COLOR_BLACK,
  MAIN_COLOR_WHITE,
} from "@/constants/colors";
import { Button, Card, Grid, GridCol, Image } from "@mantine/core";

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
};

export default function ProjectCard(props: ProjectCardProps) {
  const { project } = props;
  return (
    <Card
      bg={MAIN_COLOR_BLACK}
      c={MAIN_COLOR_WHITE}
      radius={10}
      className="project-card"
    >
      <Grid>
        <GridCol span={{ base: 12 }}>
          <div className="project-image">
            <Image src={project.image} alt={project.title} />
          </div>
        </GridCol>
        <GridCol span={{ base: 12 }}>
          <div className="project-text">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Button
              color={ACCENT_COLOR}
              pos={"relative"}
              bottom={0}
              onClick={() => window.open(project.link, "_blank")}
            >
              View
            </Button>
          </div>
        </GridCol>
      </Grid>
    </Card>
  );
}
