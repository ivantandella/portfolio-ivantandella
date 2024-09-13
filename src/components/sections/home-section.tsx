import { MAIN_COLOR_GREY, MAIN_COLOR_WHITE } from "@/constants/colors";
import { Flex, Grid, Text, Title } from "@mantine/core";
import Image from "next/image";

export default function HomeSection() {
  return (
    <Grid id="home" bg={MAIN_COLOR_GREY} pt={70}>
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
        <Flex direction={"column"} gap={"md"} justify={"center"} h={"100%"}>
          <Title c={MAIN_COLOR_WHITE} className="text-center">
            Hi,
          </Title>
          <Title c={MAIN_COLOR_WHITE} className="text-center">
            I'm <span className="accent-color">IVAN TANDELLA</span>
          </Title>
          <Text c={MAIN_COLOR_WHITE} className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            reiciendis iste ab magni nisi, excepturi dolorum veritatis nihil,
            voluptatem amet sapiente eligendi labore! Voluptates alias explicabo
            quam eius distinctio cumque.
          </Text>
        </Flex>
      </Grid.Col>
    </Grid>
  );
}
