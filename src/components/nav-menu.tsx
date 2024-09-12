import { Text } from "@mantine/core";

type NavMenuProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavMenu(props: NavMenuProps) {
  const { href, children } = props;
  return (
    <Text className="nav-menu">
      <a href={href}>{children}</a>
    </Text>
  );
}
