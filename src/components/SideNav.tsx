import { Link, Text } from "@nextui-org/react";

const SideNav = () => {
  return (
    <aside>
      <Text h3>Contents</Text>
      <nav aria-label="サイドナビ">
        <ul>
          <li>
            <Link href="#profile">
              <Text>Profile</Text>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <Text>Contact</Text>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
