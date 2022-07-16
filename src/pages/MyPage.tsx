import { css } from "@emotion/react";
import { NextPage } from "next";
import Layout from "./Layout/Layout";

const pageProps = {
  name: "MYPAGE",
  desc: "あなたの情報をまとめているよ",
  bgImg: "url('./bgImg/room.jpg')",
};

const classes = {};

const MyPage: NextPage = () => {
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

export default MyPage;
