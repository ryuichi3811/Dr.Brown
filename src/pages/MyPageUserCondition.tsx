import type { NextPage } from "next";
import Layout from "./Layout/Layout";
import { css } from "@emotion/react";
import MyPageUserCondition from "../components/myPage/MyPageUserCondition";

const pageProps = {
  name: "MYPAGE",
  desc: "あなたの情報をまとめているよ",
  bgImg: "url('./bgImg/room.jpg')",
};

const classes = {
 }


const MyPagePassChange: NextPage = () => {
  return (
    <Layout
      siteName={pageProps.name}
      desc={pageProps.desc}
      bgDesign={pageProps.bgImg}
    >
    
    <MyPageUserCondition />
    
    </Layout>
  );
};

export default MyPagePassChange;
