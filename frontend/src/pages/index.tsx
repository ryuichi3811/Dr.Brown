import type { NextPage } from "next";
import Layout from "./Layout/Layout";
import axios from "axios";
import useSWR from "swr";
import Link from "next/link";
import Header from "../components/header/Header";
import { css } from "@emotion/react";

const siteName = "トップ";
const desc = "トップページ";

const url = "http://localhost:8000";

const classes = {
  main: css`
  height: 100vh;
  background-image: url("/homepink.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  `,
  h1: css`
    font-size: 5rem;
  `
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Home: NextPage = () => {
  // データ取得
  const { data, error } = useSWR(url, fetcher);
  if (error) return <div>読み込みに失敗しました。</div>;
  if (!data) return <div>少々お待ちください。。。</div>;
  console.log(data)
  
  return (
    <Layout siteName={siteName} desc={desc}>
      <Header />

      <main css={classes.main}>
        <h1 css={classes.h1}>{siteName}</h1>
        <div>
          <Link href={"auth/Login"}>ログイン</Link>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
