import { MAIN_COLOR_BLACK, MAIN_COLOR_WHITE } from "@/constants/colors";
import { Sections } from "@/constants/sections";
import { Flex, Grid, GridCol, Text } from "@mantine/core";
import { Socials } from "@/utils/data/socials";
import { InView } from "react-intersection-observer";

export default function SocialsSection() {
  return (
    <Grid
      id={Sections.SOCIALS}
      mt={-10}
      pb={50}
      bg={MAIN_COLOR_BLACK}
      px={100}
      c={MAIN_COLOR_WHITE}
    >
      <GridCol span={{ base: 12, sm: 6 }}>
        <Flex
          direction={"column"}
          align={"center"}
          justify={"center"}
          h={"100%"}
        >
          <InView threshold={0.5}>
            {({ inView, ref }) => (
              <h1 ref={ref} className={inView ? "hithere connect" : " connect"}>
                Let's <br /> Connect!
              </h1>
            )}
          </InView>
        </Flex>
      </GridCol>
      <GridCol span={{ base: 12, sm: 6 }}>
        {Socials.map((social) => (
          <Grid key={social.title} align="center">
            <GridCol span={4} ta={"right"}>
              {social.icon}
            </GridCol>
            <GridCol span={8}>
              <Text size="xl">
                <a href={social.link}>{social.username}</a>{" "}
              </Text>
            </GridCol>
          </Grid>
        ))}
      </GridCol>
    </Grid>
  );
}
