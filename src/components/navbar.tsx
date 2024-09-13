import { MAIN_COLOR_BLACK, MAIN_COLOR_WHITE } from "@/constants/colors";
import { Burger, Flex, Group, Menu, Text } from "@mantine/core";
import NavMenu from "./nav-menu";
import { useDisclosure } from "@mantine/hooks";

export default function Navbar() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <div style={{ position: "fixed", width: "100%", zIndex: 999 }}>
      <Flex
        bg={MAIN_COLOR_BLACK}
        h={70}
        align={"center"}
        justify={"space-between"}
        px={50}
        c={MAIN_COLOR_WHITE}
      >
        <Text size="lg" fw={"bold"}>
          Ivan's Portfolio
        </Text>

        <Group visibleFrom="sm" gap={40}>
          <NavMenu href="#home">Home</NavMenu>
          <NavMenu href="#">Certificates</NavMenu>
          <NavMenu href="#">Projects</NavMenu>
          <NavMenu href="#">Contacts</NavMenu>
        </Group>

        <Group hiddenFrom="sm">
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Burger
                opened={opened}
                onClick={toggle}
                aria-label="Toggle navigation"
                color="white"
              />
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item onClick={() => toggle()}>
                <a href="#home">Home</a>{" "}
              </Menu.Item>
              <Menu.Item onClick={() => toggle()}>
                <a href="#">Projects</a>{" "}
              </Menu.Item>
              <Menu.Item onClick={() => toggle()}>
                <a href="#">Certification</a>
              </Menu.Item>
              <Menu.Item onClick={() => toggle()}>
                <a href="#">Contact</a>{" "}
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Flex>
    </div>
  );
}
