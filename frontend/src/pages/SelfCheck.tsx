import type { NextPage } from "next";
import Layout from "./Layout/Layout";
import Link from "next/link";
import Header from "../components/header/Header";

const siteName = "セルフチェック";
const desc = "問診機能のページ";

const SelfCheck: NextPage = () => {
  return (
    <Layout siteName={siteName} desc={desc}>
      <Header />
      <h1>{siteName}</h1>
      <div>
        <Link href={"auth/Login"}>ログイン</Link>
      </div>
    </Layout>
  );
};

export default SelfCheck;
