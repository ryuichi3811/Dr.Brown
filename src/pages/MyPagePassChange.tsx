import type { NextPage } from "next";
import Layout from "./Layout/Layout";
import Link from "next/link";
import { css } from "@emotion/react";
import MyPageUserPassChange from "../components/myPage/MyPageUserPassChange";

const classes = {
}

const pageProps = {
  name: "MYPAGECondition",
  desc: "あなたの情報をまとめているよ",
  bgImg: "url('./bgImg/room.jpg')",
};


const MyPagePassChange: NextPage = () => {
  return (

      <Layout
        siteName={pageProps.name}
        desc={pageProps.desc}
        bgDesign={pageProps.bgImg}
      >
      
      <MyPageUserPassChange />
      
      </Layout>
  );
};

export default MyPagePassChange;
