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
              Utara with a strong interest in Data Science and Web Development.
              My quick learning ability and eagerness to learn new things have
              consistently driven my professional growth. Known for a
              well-organized person and my excellent time management, I
              effectively balance multiple responsibilities and consistently
              meet deadlines. I am committed to leveraging my skills to
              contribute to innovative tech solutions and advance my career in
              the field of technology.
            </Text>
          </Flex>
        </Grid.Col>
      </Grid>
    </div>
  );
}
