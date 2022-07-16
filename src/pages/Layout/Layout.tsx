import { css } from "@emotion/react";
import { NextPage } from "next";
import Head from "next/head";
import { ReactNode, useState } from "react";
import SideNav from "../../components/header/SideNav";
import Headers from "../../components/header/Header";

export type Props = {
  siteName: string;
  desc: string;
  bgDesign: string;
  children: ReactNode;
};

const classes = {
  layout: css`
    display: flex;
    width: 100%;
    /* min-height: 100vh;
    background-size: cover;
    background-position: 0% 20%; */
  `,
  sideNav: css`
    height: 100vh;
    min-width: 300px;
    position: fixed;
    z-index: 10;
    @media (max-width: 1000px) {
      display: none;
    }
  `,
  sideNavBase: css`
    height: 100vh;
    min-width: 300px;
    position: relative;
    z-index: 10;
    @media (max-width: 1000px) {
      display: none;
    }
  `,
  container: css`
    width: 100%;
    height: 100%;
  `,
  content: css`
    min-height: 90vh;
    width: 100%;
    background-size: cover;
    background-position: bottom center;
    /*background-image : url("./homepink.jpg"); */

    @media (max-width: 1000px) {
      width: 100vw;
    }
  `,
  headerBase: css`
  color: #eee;
  height: 10vh;
  width: 100%;
  position: relative;
  `,
  footer: css`
    position: absolute;
    z-index: 1;
    bottom: 1%;
    right: 3%;
  `,
};

const Layout: NextPage<Props> = ({ siteName, desc, bgDesign, children }) => {
  const color = {
    red: "#f00",
    blue: "#00f",
  };

  // const [clr, setClr] = useState("#0f0")

  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div
        css={classes.layout}
        // style={{ backgroundImage: `${bgDesign}` }}
      >
        <div css={classes.sideNavBase}></div>
        <div css={classes.sideNav}>
          <SideNav></SideNav>
        </div>
        <div css={classes.container}>
          <Headers name={siteName} />
          <div css={classes.headerBase}></div>
          <main
            css={classes.content}
            style={{ backgroundImage: `${bgDesign}` }}
          >
            {children}
          </main>
        </div>
      </div>

      <footer css={classes.footer}>
        <p>&copy; 2022 Dr.Brown All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Layout;
