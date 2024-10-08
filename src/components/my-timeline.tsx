import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ExperienceType } from "@/utils/data/experiences";
import { Spoiler } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ACCENT_COLOR } from "@/constants/colors";
import { UNIVERSAL_WIDTH } from "@/constants/sections";

type MyTimelineProps = {
  experiences: ExperienceType;
};

export default function MyTimeline(props: MyTimelineProps) {
  const { experiences } = props;
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div style={{ maxWidth: UNIVERSAL_WIDTH, margin: "auto" }}>
      <Timeline
        position={matches ? "alternate" : undefined}
        sx={
          matches
            ? undefined
            : {
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }
        }
      >
        {experiences.map((experience, index) => {
          const odd = index % 2 !== 0;
          const insetInlineStart = odd && matches ? "unset" : "0";
          const insetInlineEnd = odd && matches ? "0" : "unset";

          return (
            <TimelineItem key={index}>
              {matches && (
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="white"
                >
                  {experience.date}
                </TimelineOppositeContent>
              )}

              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <Image
                    src={experience.image}
                    alt={experience.company}
                    width={32}
                    height={32}
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: 2 }} color="white">
                <Typography variant="h6" component="span">
                  {experience.position}
                </Typography>
                <Typography>{experience.company}</Typography>
                {!matches && <Typography>{experience.date}</Typography>}

                <Spoiler
                  maxHeight={0}
                  showLabel="See detail ..."
                  hideLabel="Hide"
                  mt={10}
                  styles={(theme) => ({
                    control: {
                      color: ACCENT_COLOR,
                      fontSize: theme.fontSizes.sm,
                      insetInlineEnd: insetInlineEnd,
                      insetInlineStart: insetInlineStart,
                    },
                  })}
                >
                  <div
                    style={{ textAlign: "justify" }}
                    dangerouslySetInnerHTML={{ __html: experience.description }}
                  />
                </Spoiler>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
}
