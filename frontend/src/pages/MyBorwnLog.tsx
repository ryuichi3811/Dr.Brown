import type { NextPage } from "next";
import Layout from "./Layout/Layout";
import Link from "next/link";
import Header from "../components/header/Header";

const siteName = "過去の記録";
const desc = "ミッキーの今までの結果を一覧にしてるページ";

// ユーザーのログインのアカウントに飛ばしてから表示されるページなので、
// lacalhost:3000/uuid/MyBrownLog
// なお、これだけでなくメインページはおもにこの流れです。

const MyBorwnLog: NextPage = () => {
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

export default MyBorwnLog;
