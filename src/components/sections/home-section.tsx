import { MAIN_COLOR_GREY, MAIN_COLOR_WHITE } from "@/constants/colors";
import { Sections, UNIVERSAL_WIDTH } from "@/constants/sections";
import { Flex, Grid, Text, Title } from "@mantine/core";
import Image from "next/image";

export default function HomeSection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 70,
        backgroundColor: MAIN_COLOR_GREY,
      }}
    >
      <Grid id={Sections.HOME} maw={UNIVERSAL_WIDTH}>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Flex justify={"center"} h={"100%"} pt={40}>
            <Image
              width={300}
              height={300}
              src="/images/profile.jpeg"
              alt="profile"
              className="profile"
            />
          </Flex>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }} px={40}>
          <Flex
            direction={"column"}
            gap={"md"}
            justify={"center"}
            h={"100%"}
            c={MAIN_COLOR_WHITE}
          >
            <Title className="text-center">Hi,</Title>
            <Title className="text-center">
              I'm <span className="accent-color bounce2">IVAN TANDELLA</span>
            </Title>
            <Text className="text-center">
              I am an Information Technology graduate from Universitas Sumatera
              Utara with 1 year of experience in Frontend Development using
              React. Passionate about Web Development with strong
              problem-solving skills and a fast-learning mindset.
              Well-organized, detail-oriented, and able to manage time
              effectively to meet tight deadlines. Eager to contribute to
              impactful tech solutions and grow professionally in the tech
              industry.
            </Text>
          </Flex>
        </Grid.Col>
      </Grid>
    </div>
  );
}
