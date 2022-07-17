import { NextPage } from "next";
import LayoutAuth from "../Layout/LayoutAuth";

const pageProps = {
  name: "新規登録",
  desc: "ユーザー新規登録用ページ",
};

const Login: NextPage = () => {
  return (
    <LayoutAuth siteName={pageProps.name} desc={pageProps.desc}>
      <h1>{pageProps.name}</h1>
    </LayoutAuth>
  );
};

export default Login;
