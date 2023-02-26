import { Container, Grid, Spacer } from "@nextui-org/react";
import type { NextPage } from "next";
import SideNav from "src/components/SideNav";

import SectionContact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionProfile from "../components/Profile";

const Top: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Spacer y={3} />
        <Container>
          <Grid.Container wrap="nowrap" gap={0} css={{ gap: 20 }}>
            <Grid direction="column" xs={12} sm={9}>
              <SectionProfile />
              <Spacer y={2} />
              <SectionContact />
            </Grid>
            <Grid xs={0} sm={3}>
              <SideNav />
            </Grid>
          </Grid.Container>
        </Container>
      </main>
      <Spacer y={3} />
      <Footer />
    </>
  );
};

export default Top;
