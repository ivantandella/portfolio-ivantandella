import React, { useRef, useState } from "react";
import SectionTitle from "@/components/section-title";
import { skills } from "@/utils/data/skills";
import { Sections } from "@/constants/sections";
import {
  sectionWrapper,
  flexContainer,
  skillCard,
  skillIconImg,
  skillTitleText,
} from "./styles.css";

function MagneticSkillCard({ title, image }: { title: string; image: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * 0.3;
    const distanceY = (e.clientY - centerY) * 0.3;

    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={skillCard}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 && position.y === 0 ? "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)" : "transform 0.1s ease-out",
      }}
    >
      <img src={image} alt={title} className={skillIconImg} />
      <div className={skillTitleText}>{title}</div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id={Sections.SKILL} className={sectionWrapper}>
      <SectionTitle subtitle="EXPERTISE">Tech Stack</SectionTitle>

      <div className={flexContainer}>
        {skills.map((skill) => (
          <MagneticSkillCard
            key={skill.title}
            title={skill.title}
            image={skill.image}
          />
        ))}
      </div>
    </section>
  );
}
