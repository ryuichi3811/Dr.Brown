import type { NextPage } from "next";
import Layout from "./Layout/Layout";
import Link from "next/link";
import Nav from "../components/nav/Nav";

const siteName = "過去の記録";
const desc = "ミッキーの今までの結果を一覧にしてるページ";

// ユーザーのログインのアカウントに飛ばしてから表示されるページなので、
// lacalhost:3000/uuid/MyBrownLog
// なお、これだけでなくメインページはおもにこの流れです。

const MyBorwnLog: NextPage = () => {
  return (
    <Layout siteName={siteName} desc={desc} pageName="myBrownLog">
      <Nav />
      <h1>{siteName}</h1>
      <div>
        <Link href={"Auth/Login"}>ログイン</Link>
      </div>
    </Layout>
  );
};

export default MyBorwnLog;
