import { Sections } from "@/constants/sections";
import { Socials } from "@/utils/data/socials";
import Button from "@/components/common/button";
import FadeUp from "@/components/common/fade-up";
import {
  sectionWrapper,
  contentContainer,
  subtitleText,
  titleText,
  descriptionText,
  buttonGroup,
  copyrightText,
} from "./styles.css";

export default function Footer() {
  return (
    <footer id={Sections.SOCIALS} className={sectionWrapper}>
      <div className={contentContainer}>
        <FadeUp>
          <div className={subtitleText}>Connect</div>
          <h2 className={titleText}>Let's Connect!</h2>
        </FadeUp>

        <FadeUp delay={150}>
          <p className={descriptionText}>
            Feel free to reach out for collaborations, job opportunities, or
            just a quick tech chat!
          </p>
        </FadeUp>

        <FadeUp delay={300}>
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
        </FadeUp>

        <p className={copyrightText}>
          © {new Date().getFullYear()} Ivan Tandella
        </p>
      </div>
    </footer>
  );
}
