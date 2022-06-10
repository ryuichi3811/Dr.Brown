import { NextPage } from "next";
import Nav from "../../components/nav/Nav";
import LayoutAuth from "../Layout/LayoutAuth";

const siteName = "新規登録"
const desc = "新規登録を行うページです。"

const Login: NextPage = () => {
    return (
        
        <LayoutAuth siteName={siteName} desc={desc} pageName="login">
            <Nav/>
            <h1>{siteName}</h1>
            <p>ログイン</p>
        </LayoutAuth>
    );
}

export default Login;