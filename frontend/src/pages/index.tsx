import type { NextPage } from "next";
import Layout from "./Layout/Layout";
import axios from "axios";
import useSWR from "swr";
import Link from "next/link";
import Nav from "../components/nav/Nav";

const siteName = "トップ";
const desc = "トップページ";

const url = "http://localhost:8000";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Home: NextPage = () => {
  // データ取得
  const { data, error } = useSWR(url, fetcher);
  if (error) return <div>読み込みに失敗しました。</div>;
  if (!data) return <div>少々お待ちください。。。</div>;
  // console.log(data)
  return (
    <Layout siteName={siteName} desc={desc}>
      <Nav />
      <h1>{siteName}</h1>
      <div>
        <Link href={"Auth/Login"}>ログイン</Link>
      </div>
      <h3>{data.test}</h3>
    </Layout>
  );
};

export default Home;
