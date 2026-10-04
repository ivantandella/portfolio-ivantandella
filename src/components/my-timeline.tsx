import { Spoiler, Text, Timeline } from "@mantine/core";
import type { ExperienceType } from "@/utils/data/experiences";
import { ACCENT_COLOR } from "@/constants/colors";
import { UNIVERSAL_WIDTH } from "@/constants/sections";

type MyTimelineProps = {
  experiences: ExperienceType;
};

export default function MyTimeline(props: MyTimelineProps) {
  const { experiences } = props;

  return (
    <div style={{ maxWidth: UNIVERSAL_WIDTH, margin: "auto" }}>
      <Timeline bulletSize={40} lineWidth={2}>
        {experiences.map((experience, index) => (
          <Timeline.Item
            key={index}
            bullet={
              <img
                src={experience.image}
                alt={experience.company}
                width={32}
                height={32}
              />
            }
            title={
              <Text size="lg" fw={500} c="white">
                {experience.position}
              </Text>
            }
          >
            <Text c="white">{experience.company}</Text>
            <Text size="sm" c="dimmed">
              {experience.date}
            </Text>

            <Spoiler
              maxHeight={0}
              showLabel="See detail ..."
              hideLabel="Hide"
              mt={10}
              styles={(theme) => ({
                control: {
                  color: ACCENT_COLOR,
                  fontSize: theme.fontSizes.sm,
                },
              })}
            >
              <div
                style={{ textAlign: "justify", color: "#ababab" }}
                dangerouslySetInnerHTML={{ __html: experience.description }}
              />
            </Spoiler>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}
