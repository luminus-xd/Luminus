import { Navbar, Switch, Text, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import React from "react";
import { FaGithub, FaRegMoon, FaTwitter } from "react-icons/fa";

const Header = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Navbar variant="sticky" maxWidth="fluid" isCompact={{ "@xsMax": true }}>
      <Navbar.Brand>
        <Text
          h1
          size={36}
          css={{
            textGradient: isDark
              ? "60deg, $yellow600 -20%, $red600 100%"
              : "30deg, $black 0%, $black 100%",
            marginBottom: 0,
            "@xsMax": {
              fontSize: 28,
            },
          }}
          weight="bold"
          color="inherit"
        >
          Luminus
        </Text>
      </Navbar.Brand>
      <Navbar.Content gap="$lg">
        <Navbar.Item>
          <a
            id="twitter-icon"
            href="https://twitter.com/Midnight_dev2"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter
              color={isDark ? "#FFF" : "#000"}
              size={28}
              title="twitter"
            />
          </a>
        </Navbar.Item>
        <Navbar.Item>
          <a
            id="github-icon"
            href="https://github.com/luminus-xd"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              color={isDark ? "#FFF" : "#000"}
              size={28}
              title="GitHub"
            />
          </a>
        </Navbar.Item>
        <Navbar.Item>
          <Switch
            checked={isDark}
            size={{ "@sm": "lg" }}
            color="secondary"
            shadow
            name="theme"
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            iconOn={
              <FaRegMoon
                size={24}
                color={isDark ? "#FFF" : "#000"}
                title="テーマ切り替え"
              />
            }
          />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default Header;
