import { NextPage } from "next";
import Link from "next/link";
import { css } from "@emotion/react";
import PersonIcon from "@mui/icons-material/Person";
import MobileBottomNav from "./MobileBottomNav";
import MenuIcon from '@mui/icons-material/Menu';

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
    margin-left: 10%;
    letter-spacing: 1.8px;
  `,
  myPage: css`
    text-align: center;
    display: inline-flex;
    align-items: center;
    position: fixed;
    right: 3%;
    @media (max-width: 481px) {
      display: none;
    }
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
  MenuIcon:css`
  @media(min-width: 480px){
    display: none;
  }
  text-align: center;
  margin: 0 0 0 15%;
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
            <PersonIcon style={{ fontSize: "50px", color: "#CDE9FE" }} />
          </div>
        </Link>
        
        <div css={classes.login}>
          <Link href={"/Auth/Login"}>ログイン</Link>
        </div>
        <div css={classes.logout}>ログアウト</div>
        
      </div>
      
      <div css={classes.MenuIcon}><MenuIcon style={{ fontSize: "50px", color: "#CDE9FE" }} /></div>
      
      <MobileBottomNav />
    </header>
  );
};

export default TopContent;
