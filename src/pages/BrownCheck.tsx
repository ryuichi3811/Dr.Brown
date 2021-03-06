import { css } from "@emotion/react";
import { NextPage } from "next";
import Layout from "./Layout/Layout";

const pageProps = {
  name: "撮影診断",
  desc: "あなたのブラウン君から健康状態を調べるよ",
  bgImg: "url('./bgImg/hospital.jpg')",
};

const classes = {};

const BrownCheck: NextPage = () => {
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

export default BrownCheck;
