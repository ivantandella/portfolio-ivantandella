import { MAIN_COLOR_BLACK, MAIN_COLOR_WHITE } from "@/constants/colors";
import { Burger, Flex, Group, Menu, Text } from "@mantine/core";
import NavMenu from "./nav-menu";
import { useDisclosure } from "@mantine/hooks";
import { Sections } from "@/constants/sections";

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
          <NavMenu href={`#${Sections.HOME}`}>Home</NavMenu>
          <NavMenu href={`#${Sections.CERTIFICATES}`}>Certificates</NavMenu>
          <NavMenu href={`#${Sections.PROJECTS}`}>Projects</NavMenu>
          <NavMenu href={`#${Sections.CONTACTS}`}>Contacts</NavMenu>
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

            <Menu.Dropdown mt={10}>
              <Menu.Item onClick={toggle}>
                <a href={`#${Sections.HOME}`}>Home</a>
              </Menu.Item>
              <Menu.Item onClick={toggle}>
                <a href={`#${Sections.CERTIFICATES}`}>Certificates</a>
              </Menu.Item>
              <Menu.Item onClick={toggle}>
                <a href={`#${Sections.PROJECTS}`}>Projects</a>
              </Menu.Item>
              <Menu.Item onClick={toggle}>
                <a href={`#${Sections.CONTACTS}`}>Contact</a>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Flex>
    </div>
  );
}
