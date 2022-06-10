import type { NextPage } from "next";
import Layout from "./Layout/Layout";
import Link from "next/link";
import Nav from "../components/nav/Nav";

const siteName = "セルフチェック";
const desc = "問診機能のページ";

const SelfCheck: NextPage = () => {
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

export default SelfCheck;
