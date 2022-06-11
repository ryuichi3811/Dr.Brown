import { css } from "@emotion/react";
import { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";

export type Props ={
    siteName: string;
    desc: string;
    pageName: string;
    children: ReactNode;
}

const classes = {
    footer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    `
}

const Layout: NextPage<Props> = ({siteName, desc, pageName, children}) => {
    return (
        <>
            <Head>
                <title>{siteName}</title>
                <meta name="description" content={desc} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <main className={pageName}>
                {children}
            </main>

            <footer css={classes.footer}>
                <p>&copy; 2022 Dr.Brown All Rights Reserved.</p>
            </footer>
        </>
    );
}

export default Layout;