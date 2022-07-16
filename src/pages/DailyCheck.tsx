import { css } from "@emotion/react";
import { NextPage } from "next";
import Layout from "./Layout/Layout";

const pageProps = {
  name: "今日の体調",
  desc: "あなたの今日の体調を調べるよ。",
  bgImg: "url('./bgImg/room.jpg')",
};

const classes = {};

const DailyCheck: NextPage = () => {
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

export default DailyCheck;
