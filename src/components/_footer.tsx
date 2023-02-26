import { Navbar, Text } from "@nextui-org/react";
import React from "react";

const Footer = () => {
  return (
    <Navbar
      variant="static"
      maxWidth="fluid"
      isCompact={{ "@mdMax": true }}
      containerCss={{ justifyContent: "flex-end" }}
    >
      <Navbar.Content gap="$lg">
        <Navbar.Item>
          <Text small>© 2023 Luminus</Text>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default Footer;
