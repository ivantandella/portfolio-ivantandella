import { Sections } from "@/constants/sections";
import { Socials } from "@/utils/data/socials";
import { InView } from "react-intersection-observer";
import Button from "@/components/common/button";
import {
  sectionWrapper,
  contentContainer,
  subtitleText,
  titleText,
  descriptionText,
  buttonGroup,
  copyrightText,
} from "./styles.css";

export default function SocialsSection() {
  return (
    <footer id={Sections.SOCIALS} className={sectionWrapper}>
      <div className={contentContainer}>
        <div className={subtitleText}>Connect</div>

        <InView threshold={0.5}>
          {({ inView, ref }) => (
            <h2
              ref={ref}
              className={`connect ${titleText}${inView ? " hithere" : ""}`}
            >
              Let's Connect!
            </h2>
          )}
        </InView>

        <p className={descriptionText}>
          Feel free to reach out for collaborations, job opportunities, or just a quick tech chat!
        </p>

        <div className={buttonGroup}>
          {Socials.map((social) => {
            const isPrimary = social.title.toLowerCase() === "linkedin";
            return (
              <Button
                key={social.title}
                variant={isPrimary ? "primary" : "secondary"}
                href={social.link}
                target="_blank"
                leftIcon={social.icon}
              >
                {social.title}
              </Button>
            );
          })}
        </div>

        <p className={copyrightText}>
          © {new Date().getFullYear()} Ivan Tandella. Crafted with React, Mantine & Vanilla Extract.
        </p>
      </div>
    </footer>
  );
}
