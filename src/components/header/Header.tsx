import { NextPage } from "next";
import Link from "next/link";
import { css } from "@emotion/react";

const classes = {
    // ヘッダー
    header:css`
      height  : 12vh;
      width: 85vw;
      background-color: #B5CDDE;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media(max-width: 1000px){
        width: 100vw;
      }
    `,
    h1:css`
        font-size: 2rem;
        margin-left: 2rem;
    `,
    mypage:css`
      text-align: center;
      display: inline-flex;
      align-items: center;
      margin: 15px;
    `,
    accounticon:css`
      display: inline-flex;
      align-items: center;
      padding:0 10px;
    `,
    login:css`
        padding:0 10px;
    `,
    logout:css`
        padding:0 10px;
    `,
}

const TopContent = () => {
    return (
        <div>
            <header css={classes.header}>
                <h1 css={classes.h1}>HOME</h1>

                <div css={classes.mypage}>
                  <div css={classes.accounticon}>アカウント</div>
                  <div css={classes.login}>
                    <Link href={"auth/Login"}>ログイン</Link>
                  </div>
                  <div css={classes.logout}>ログアウト</div>
                </div>
                
            </header>

        </div>
    );
}

export default TopContent;