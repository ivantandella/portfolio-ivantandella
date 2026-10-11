import { Title, Text } from "@mantine/core";
import { container, subtitleText, titleText } from "./styles.css";

type SectionTitleProps = {
  children: React.ReactNode;
  subtitle?: string;
};

export default function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className={container}>
      {subtitle && <Text className={subtitleText}>{subtitle}</Text>}
      <Title order={2} className={titleText}>
        {children}
      </Title>
    </div>
  );
}
