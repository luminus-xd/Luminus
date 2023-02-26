import { Button, Text } from "@nextui-org/react";
import React from "react";
import { FaTwitter } from "react-icons/fa";

const SectionContact = () => {
  return (
    <section>
      <Text h2>Contact</Text>
      <Button
        icon={<FaTwitter color="#FFF" size={21} title="twitter" />}
        color="secondary"
        shadow
        onClick={() => {
          window.open("https://twitter.com/Midnight_dev2");
        }}
      >
        Twitter
      </Button>
    </section>
  );
};

export default SectionContact;
