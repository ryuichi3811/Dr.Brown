import { css } from "@emotion/react";
import Link from "next/link";

const classes = {
  logo: css`
    width: 100%;
    height: 12vh;
    background-image: url("../logo/logo1.jpg");
    background-size: cover;
  `,
  nav: css``,
  ul: css``,
};

const SideNav = () => {
  return (
    <>
      <div css={classes.logo}></div>
      <nav css={classes.nav}>
        <ul css={classes.ul}>
          <Link href="./BrownCheck">
            <li css={classes.li}>
              <div css={classes.camera}></div>撮影する
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default SideNav;
