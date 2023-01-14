import type { NextPage } from "next";

import Footer from "../components/_footer";
import Header from "../components/_header";
import Hero from "../components/_hero";
import SectionProfile from "../components/_profile";

const Top: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionProfile />
      </main>
      <Footer />
    </>
  );
};

export default Top;
