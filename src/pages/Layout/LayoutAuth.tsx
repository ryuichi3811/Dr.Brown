import { ClassNames, css } from "@emotion/react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export type Props = {
  siteName: string;
  desc: string;
  children: ReactNode;
};

const classes = {
  layoutLogin: css`
    width: 55%;
    min-height: 100vh;
    background-image: url("/bgImg/login.jpg");
    background-position: left;
    background-size: cover;
  `,
  layoutSignUp: css`
    width: 55%;
    min-height: 100vh;
    background-image: url("/bgImg/signUp.jpg");
    background-position: left;
    background-size: cover;
  `,
  container: css`
    width: 45%;
    height: 100vh;
    background-color: #fff;
    position: fixed;
    z-index: 1;
    right: 0;
    padding-right: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  logo: css`
    width: 300px;
    height: 150px;
    background-image: url("/logo/logo1.jpg");
    background-size: cover;
    background-position: center;
  `,
  h1: css`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 30px;
  `,
  content: css`
    width: 70%;
    height: 65vh;
    background-color: #eee;
    border: #e0e0e0 2px solid;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  footer: css`
    position: absolute;
    width: 300px;
    height: 16px;
    bottom: 1%;
    left: 1%;
  `,
};

const LayoutAuth: NextPage<Props> = ({ siteName, desc, children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main
        css={
          router.pathname == "/Auth/Login"
            ? classes.layoutLogin
            : classes.layoutSignUp
        }
      >
        <div css={classes.container}>
          <div css={classes.logo}></div>
          <div
            css={classes.content}
            style={
              router.pathname == "/Auth/Login"
                ? { height: "60vh" }
                : { height: "80vh" }
            }
          >
            <h1 css={classes.h1}>{siteName}</h1>
            {children}
          </div>
        </div>
      </main>
      <footer css={classes.footer}>
        <p>&copy; 2022 Dr.Brown All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default LayoutAuth;
