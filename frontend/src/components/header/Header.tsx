import { css } from "@emotion/react";
import { NextPage } from "next";
import Link from "next/link";
import NavList from "./NavList";

const classes = {
  header: css`
    display: flex;
    position: absolute;
    top: 0;
    left: 10%;
  `,
  ul: css`
    display: flex;
  `
}

const Nav: NextPage = () => {
  return (
    <header css={classes.header}>
      {/* ロゴ */}
      <h1>
        <Link href={"/"}>Dr.Brown</Link>
      </h1>

      <nav>
        <ul css={classes.ul}>
          <NavList pageName="トップ" pageLink="/" />
          <NavList pageName="セルフチェック" pageLink="/SelfCheck" />
          <NavList pageName="ブラウンチェック" pageLink="/BrownCheck" />
          <NavList pageName="過去の記録" pageLink="/MyBorwnLog" />
          <NavList pageName="マイページ" pageLink="/MyPage" />
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
