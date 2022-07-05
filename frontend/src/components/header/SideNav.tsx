import { css } from "@emotion/react";
import Link from "next/link";


const classes = {
    nav: css`
        width: 6vw;
        margin: 0 auto;
        min-width: 100px;
    `,
    ul:css`
        margin-top: 4rem;
        text-align: left;
        list-style: none;
        padding: 0;
    `,
    li:css`
        margin-bottom: 1rem;
        width: 6rem;
        display: inline-flex;
        align-items: center;
    `,
    h2:css`
        font-size: 1.4rem;
        border-bottom: 2px solid #000;
        text-align: center;
    `,
    camera:css`
        height: 1.5vw;
        width: 1.5vw;
        background-image: url("camera2.png");
        background-repeat: no-repeat;
        background-size: contain;
    `
}


const SideNav = () => {
    return (
        <div>

        <nav css={classes.nav}>

          
          <ul css={classes.ul}>
            <Link href="./"><li css={classes.li}>HOME</li></Link>
          </ul>

          
          <ul css={classes.ul}>

            <h2 css={classes.li}><div css={classes.h2}>診断</div></h2>

            {/* <li css={classes.li}><NavList pageName="セルフチェック" pageLink="/SelfCheck" /></li>
            <li css={classes.li}><NavList pageName="ブラウンチェック" pageLink="/BrownCheck" /></li>
            <li css={classes.li}><NavList pageName="過去の記録" pageLink="/MyBorwnLog" /></li> */}
            
            <Link href="./BrownCheck"><li css={classes.li}><div css={classes.camera}></div>撮影する</li></Link>
            <Link href="./SelfCheck"><li css={classes.li}>問診する</li></Link>
            <Link href="./MyBorwnLog"><li css={classes.li}>過去の診断</li></Link>
          </ul>


          
          <ul css={classes.ul}>
                
                <h2 css={classes.li}><div css={classes.h2}>トピック</div></h2>

            </ul>
            
        </nav>



      </div>
    );
}

export default SideNav;