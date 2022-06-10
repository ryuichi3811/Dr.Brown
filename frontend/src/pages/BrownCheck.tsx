import type { NextPage } from "next";
import Layout from "./Layout/Layout";
import Link from "next/link";
import Nav from "../components/nav/Nav";

const siteName = "ブラウンチェック";
const desc = "ミッキーを撮影し、画像判定結果を出すところ。";

const BrownCheck: NextPage = () => {
  return (
    <Layout siteName={siteName} desc={desc}>
      <Nav />
      <h1>{siteName}</h1>
      <div>
        <Link href={"Auth/Login"}>ログイン</Link>
      </div>
    </Layout>
  );
};

export default BrownCheck;
