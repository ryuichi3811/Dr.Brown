import { css } from "@emotion/react";
import { NextPage } from "next";
import Layout from "./Layout/Layout";

const pageProps = {
  name: "健康診断",
  desc: "あなたの健康リスクを調べてみるよ。",
  bgImg: "url('./bgImg/hospital.jpg')",
};

const classes = {};

const HealthCheck: NextPage = () => {
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

export default HealthCheck;
