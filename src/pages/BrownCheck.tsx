import type { NextPage } from "next";
import Layout from "./Layout/Layout";
import Link from "next/link";
import Header from "../components/header/Header";

const siteName = "ブラウンチェック";
const desc = "ミッキーを撮影し、画像判定結果を出すところ。";

const BrownCheck: NextPage = () => {
  return (
    <Layout siteName={siteName} desc={desc}>
      <Header/>
      <h1>{siteName}</h1>
      <div>
        <Link href={"Auth/Login"}>ログイン</Link>
      </div>
    </Layout>
  );
};

export default BrownCheck;
