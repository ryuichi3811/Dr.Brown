import type { NextPage } from "next";
import Layout from "./Layout/Layout";
import Link from "next/link";
import Header from "../components/header/Header";

const siteName = "マイページ";
const desc = "個人情報を載せてるところ";

// ユーザーのログインのアカウントに飛ばしてから表示されるページなので、
// lacalhost:3000/uuid/Mypage
// なお、これだけでなくメインページはおもにこの流れです。

const MyPage: NextPage = () => {
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

export default MyPage;
