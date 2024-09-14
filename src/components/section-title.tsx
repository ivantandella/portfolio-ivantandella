import { MAIN_COLOR_WHITE } from "@/constants/colors";
import { Title } from "@mantine/core";

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Title c={MAIN_COLOR_WHITE} ta={"center"} mb={50}>
      {children}
    </Title>
  );
}
