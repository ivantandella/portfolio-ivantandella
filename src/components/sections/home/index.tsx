import { Sections, UNIVERSAL_WIDTH } from "@/constants/sections";
import { Assets } from "@/constants/assets";
import { Grid } from "@mantine/core";
import Button from "@/components/common/button";
import {
  homeContainer,
  headlineText,
  cyanAccent,
  whiteText,
  subText,
  badgeRow,
  heroBadge,
  badgeIcon,
  buttonRow,
  avatarContainer,
  avatarImage,
} from "./styles.css";

const heroTechStack = [
  { title: "React", icon: Assets.Skills.React },
  { title: "React Native", icon: Assets.Skills.React },
  { title: "Next.js", icon: Assets.Skills.NextJS },
  { title: "Expo", icon: Assets.Skills.Expo },
  { title: "JS", icon: Assets.Skills.JavaScript },
  { title: "TS", icon: Assets.Skills.TypeScript },
];

export default function HomeSection() {
  return (
    <section id={Sections.HOME} className={homeContainer}>
      <Grid
        maw={UNIVERSAL_WIDTH}
        w="100%"
        px={{ base: 24, sm: 50 }}
        align="center"
      >
        <Grid.Col span={{ base: 12, md: 7 }} order={{ base: 2, md: 1 }}>
          <div>
            <h1 className={headlineText}>
              <span className={cyanAccent}>FRONTEND ENGINEER,</span>
              <br />
              <span className={whiteText}>
                building web and mobile apps people love to use.
              </span>
            </h1>
            <p className={subText}>
              Frontend engineer at a software development company, shipping
              production apps with React, Next.js, React Native, and TypeScript.
            </p>

            <div className={badgeRow}>
              {heroTechStack.map((tech) => (
                <div key={tech.title} className={heroBadge}>
                  <img src={tech.icon} alt={tech.title} className={badgeIcon} />
                  <span>{tech.title}</span>
                </div>
              ))}
            </div>

            <div className={buttonRow}>
              <Button variant="primary" href={`#${Sections.PROJECTS}`}>
                VIEW PROJECTS
              </Button>
              <Button variant="secondary" href={`#${Sections.SOCIALS}`}>
                GET IN TOUCH
              </Button>
            </div>
          </div>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }} order={{ base: 1, md: 2 }}>
          <div className={avatarContainer}>
            <img
              src={Assets.Profile}
              alt="Ivan Tandella"
              className={avatarImage}
            />
          </div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
