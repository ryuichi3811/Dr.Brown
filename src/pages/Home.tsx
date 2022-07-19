import { css } from "@emotion/react";
import axios from "axios";
import { NextPage } from "next";
import useSWR from "swr";
import Layout from "./Layout/Layout";

const pageProps = {
  name: "HOME",
  desc: "トップページ",
  bgImg: "url('./bgImg/homepink.jpg')",
};

const classes = {};


const url = 'http://localhost:8000/users/';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Home: NextPage = () => {

  const { data, error } = useSWR(url, fetcher);
  if (error) return <div>読み込みに失敗しました。</div>;
  if (!data) return <div>少々お待ちください。。。</div>;
  console.log(data)

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
