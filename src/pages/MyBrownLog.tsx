import { css } from "@emotion/react";
import { NextPage } from "next";
import Layout from "./Layout/Layout";

const pageProps = {
  name: "過去の診断",
  desc: "あなたの過去の診断結果を見てみるよ。",
  bgImg: "url('./bgImg/homesilver.jpg')",
};

const classes = {};

const MyBrownLog: NextPage = () => {
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

export default MyBrownLog;
