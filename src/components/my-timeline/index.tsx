import { Spoiler, Timeline } from "@mantine/core";
import type { ExperienceType } from "@/utils/data/experiences";
import { ACCENT_CYAN } from "@/constants/colors";
import {
  timelineContainer,
  bulletIcon,
  bulletImage,
  cardWrapper,
  headerRow,
  positionTitle,
  companyName,
  dateBadge,
  descriptionContent,
} from "./styles.css";

type MyTimelineProps = {
  experiences: ExperienceType;
};

export default function MyTimeline(props: MyTimelineProps) {
  const { experiences } = props;

  return (
    <div className={timelineContainer}>
      <Timeline bulletSize={36} lineWidth={2} color="cyan">
        {experiences.map((experience, index) => (
          <Timeline.Item
            key={index}
            bullet={
              <div className={bulletIcon}>
                <img
                  src={experience.image}
                  alt={experience.company}
                  className={bulletImage}
                />
              </div>
            }
          >
            <div className={cardWrapper}>
              <div className={headerRow}>
                <div>
                  <h3 className={positionTitle}>{experience.position}</h3>
                  <div className={companyName}>{experience.company}</div>
                </div>
                <div className={dateBadge}>{experience.date}</div>
              </div>

              <Spoiler
                maxHeight={90}
                showLabel="See detail ..."
                hideLabel="Hide"
                mt={14}
                styles={{
                  control: {
                    color: ACCENT_CYAN,
                    fontSize: "14px",
                    fontWeight: 600,
                    marginTop: "8px",
                  },
                }}
              >
                <div
                  className={descriptionContent}
                  dangerouslySetInnerHTML={{ __html: experience.description }}
                />
              </Spoiler>
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}
