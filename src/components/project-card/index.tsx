import type { ProjectType } from "@/utils/data/projects";
import IconGithub from "@/components/icons/icon-github";
import Button from "@/components/common/button";
import {
  cardContainer,
  mockupLaptop,
  mockupTopBar,
  mockupUrlText,
  dotRed,
  dotYellow,
  dotGreen,
  imageViewport,
  projectImgWeb,
  projectImgMobile,
  projectTitle,
  projectDescription,
  badgeGroup,
  techPill,
  buttonFlex,
  btnHalf,
} from "./styles.css";

const ExternalLinkIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

type ProjectCardProps = {
  project: ProjectType;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={cardContainer}>
      <div>
        {/* Laptop Device Frame */}
        <div className={mockupLaptop}>
          <div className={mockupTopBar}>
            <div className={dotRed} />
            <div className={dotYellow} />
            <div className={dotGreen} />
            <div className={mockupUrlText}>
              {project.title.toLowerCase().replace(/\s+/g, "")}.demo
            </div>
          </div>
          <div className={imageViewport}>
            <img
              src={project.image}
              alt={project.title}
              className={project.isMobileMockup ? projectImgMobile : projectImgWeb}
            />
          </div>
        </div>

        {/* Info */}
        <h3 className={projectTitle}>{project.title}</h3>
        <p className={projectDescription}>{project.description}</p>

        {/* Tech badges */}
        <div className={badgeGroup}>
          {project.technologies.map((tech) => (
            <span key={tech} className={techPill}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className={buttonFlex}>
        <div className={btnHalf}>
          <Button
            variant="primary"
            href={project.liveLink ?? project.link}
            target="_blank"
            fullWidth
            leftIcon={<ExternalLinkIcon />}
          >
            LIVE DEMO
          </Button>
        </div>
        <div className={btnHalf}>
          <Button
            variant="secondary"
            href={project.link}
            target="_blank"
            fullWidth
            leftIcon={<IconGithub size={16} />}
          >
            SOURCE CODE
          </Button>
        </div>
      </div>
    </div>
  );
}
