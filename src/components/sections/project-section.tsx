import { MAIN_COLOR_GREY } from "@/constants/colors";
import { Sections } from "@/constants/sections";
import { projects } from "@/utils/data/projects";
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "../project-card";
import SectionTitle from "../section-title";

export default function ProjectSection() {
  return (
    <div
      id={Sections.PROJECTS}
      style={{
        marginTop: -50,
        backgroundColor: MAIN_COLOR_GREY,
        paddingBottom: 50,
      }}
    >
      <SectionTitle>Projects</SectionTitle>
      <div className="project-container">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectCards, Autoplay]}
          style={{ maxWidth: 1024 }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
