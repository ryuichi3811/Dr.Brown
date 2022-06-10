import { NextPage } from "next";
import Link from "next/link";
import NavList from "./NavList";

const Nav: NextPage = () => {
  return (
    <nav>
      {/* ロゴ */}
      <h1>
        <Link href={"/"}>Dr.Brown</Link>
      </h1>

      <ul>
        <NavList pageName="トップ" pageLink="/" />
        <NavList pageName="セルフチェック" pageLink="/SelfCheck" />
        <NavList pageName="ブラウンチェック" pageLink="/BrownCheck" />
        <NavList pageName="過去の記録" pageLink="/MyBorwnLog" />
        <NavList pageName="マイページ" pageLink="/MyPage" />
      </ul>
    </nav>
  );
};

export default Nav;
