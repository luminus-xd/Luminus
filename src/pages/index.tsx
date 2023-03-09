import { Container, Grid, Spacer } from "@nextui-org/react";
import type { InferGetStaticPropsType, NextPage } from "next";
import SideNav from "src/components/SideNav";
import { client } from "src/libs/client";
import type { Blog, Cms } from "src/types/blog";

import BlogSection from "../components/BlogSection";
import SectionContact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionProfile from "../components/Profile";

export const getStaticProps = async () => {
  const blog: Cms = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: blog.contents,
    },
  };
};

type Props = {
  blogs: Blog[];
};

const Top: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
}: Props) => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Spacer y={3} />
        <Container css={{ maxWidth: 1280 }}>
          <Grid.Container wrap="nowrap" gap={0} css={{ gap: 20 }}>
            <Grid direction="column" xs={12} sm={9}>
              <SectionProfile />
              <Spacer y={2} />
              <BlogSection blogs={blogs} />
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
