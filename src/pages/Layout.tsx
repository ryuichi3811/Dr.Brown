import { css } from '@emotion/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { ReactNode } from 'react'
import Sidebar from '../../components/header/Sidebar'
import Header from '../../components/header/Header'


export type Props = {
  siteName: string
  desc: string
  children: ReactNode
}

const classes = {
  footer: css`
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 5%;
  `,
  backcolor: css`
    background-color: #ebf0f4;
    opacity: 0.88;
  `,
  flex: css`
    display: flex;

    @media (max-width: 1000px) {
      width: 100%;
    }
  `,
  mobileChange: css`
    @media (max-width: 1000px) {
      display: none;
    }
  `,
  container: css`
    @media (max-width: 1000px) {
      width: 100%;
    }
  `
}

const Layout: NextPage<Props> = ({ siteName, desc, children }) => {
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta name='description' content={desc} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <div css={classes.flex}>
        <div css={classes.mobileChange}>
          <Sidebar />
              </div>
              <div>
                  <Header />
                    {children}

              </div>
        
      </div>

      

      <footer css={classes.footer}>
        <p>&copy; 2022 Dr.Brown All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default Layout
