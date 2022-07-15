import { css } from "@emotion/react";
import { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";
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
  `,
  sideNav: css`
    width: 25vw;
    min-width: 240px;
    @media (max-width: 1000px) {
      display: none;
    }
  `,
  container: css``,
  content: css`
    height: 88vh;
    width: 85vw;
    /*background-image : url("./homepink.jpg"); */
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 1000px) {
      width: 100vw;
    }
  `,
  footer: css`
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 5%;
  `,
};

const Layout: NextPage<Props> = ({ siteName, desc, bgDesign, children }) => {
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div css={classes.layout}>
        <div css={classes.sideNav}>
          <SideNav></SideNav>
        </div>
        <div css={classes.container}>
          <Headers />
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
