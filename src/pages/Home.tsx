import { css } from "@emotion/react";
import { NextPage } from "next";
import Layout from "./Layout/Layout";

const pageProps = {
  name: "Home",
  desc: "トップページ",
  bgImg: "url('./bgImg/homepink.jpg')",
};

const classes = {};

const Home: NextPage = () => {
  return (
    <Layout
      siteName={pageProps.name}
      desc={pageProps.desc}
      bgDesign={pageProps.bgImg}
    >
      enter
    </Layout>
  );
};

export default Home;
