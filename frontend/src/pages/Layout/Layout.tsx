import { css } from "@emotion/react";
import { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";

export type Props ={
    siteName: string;
    desc: string;
    children: ReactNode;
}

const classes = {
    footer: css`
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 5%;
    `
}

const Layout: NextPage<Props> = ({siteName, desc, children}) => {
    return (
        <>
            <Head>
                <title>{siteName}</title>
                <meta name="description" content={desc} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            {children}

            <footer css={classes.footer}>
                <p>&copy; 2022 Dr.Brown All Rights Reserved.</p>
            </footer>
        </>
    );
}

export default Layout;