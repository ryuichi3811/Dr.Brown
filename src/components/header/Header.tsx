import { NextPage } from "next";
import Link from "next/link";
import { css } from "@emotion/react";
import PersonIcon from "@mui/icons-material/Person";

export type Props = {
  name: string;
};

const classes = {
  // ヘッダー
  header: css`
    color: #eee;
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 10;
    @media (max-width: 1000px) {
      width: 100vw;
    }
  `,
  headerCover: css`
    height: 100%;
    width: 100%;
    background-color: #5899C1;
    opacity: 0.95;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -10;
    @media (max-width: 1000px) {
      width: 100vw;
    }
  `,
  h1: css`
    font-size: 2.5rem;
    margin-left: 8rem;
    letter-spacing: 1.8px;
  `,
  myPage: css`
    text-align: center;
    display: inline-flex;
    align-items: center;
    position: fixed;
    right: 3%;
  `,
  accountIcon: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
  `,
  login: css`
    padding: 0 10px;
  `,
  logout: css`
    padding: 0 10px;
  `,
};

const TopContent: NextPage<Props> = ({ name }) => {
  return (
    <header css={classes.header}>
      <div css={classes.headerCover}></div>
      <h1 css={classes.h1}>{name}</h1>

      <div css={classes.myPage}>
        <Link href="./MyPage">
          <div css={classes.accountIcon}>
            <PersonIcon style={{ fontSize: "80px", color: "#CDE9FE" }} />
            <p style={{marginTop: "-10px"}}>マイページ</p>
          </div>
        </Link>
        <div css={classes.login}>
          <Link href={"auth/Login"}>ログイン</Link>
        </div>
        <div css={classes.logout}>ログアウト</div>
      </div>
    </header>
  );
};

export default TopContent;
