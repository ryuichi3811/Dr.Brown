import { NextPage } from "next";
import Link from "next/link";
import { css } from "@emotion/react";

const classes= {
    mobileNav:css`
      @media(min-width: 781px){
        display: none;
      }
      @media(max-width: 780px){
        height: 8vh;
        position: fixed;
        display: block;
        background: #ffffff;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
        display: flex;
        justify-content: space-around;
        flex-direction: column-reverse;
        opacity: 0.88;
    }
    `,
    mobileNavUl:css`
    @media(max-width: 780px){
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: space-evenly;
    }
    `,
    mobileNavLi:css`
      @media(max-width: 780px){
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        height: 50px;
        color: #000000;
      }  
    `,
    mobileNavSpan:css`
      font-size: 12px;
      line-height: 1.2;
    `,
    homeImg:css`
      @media(max-width: 780px){
        height: 8vh;
        width: 8vw;
        background-image: url("icon/home.jpg");
        background-repeat: no-repeat;
        background-size: contain;
        display: block;
        text-align: contain;
      }
    `,
    cameraImg:css`
    @media(max-width: 780px){
        height: 8vh;
        width: 8vw;
        background-image: url("icon/camera2.jpg");
        background-repeat: no-repeat;
        background-size: contain;
      }
    `,
    selfImg:css`
    @media(max-width: 780px){
        height: 8vh;
        width: 8vw;
        background-image: url("icon/monshin2.jpg");
        background-repeat: no-repeat;
        background-size: contain;
    }
    `,
    pastImg:css`
    @media(max-width: 780px){
        height: 8vh;
        width: 8vw;
        background-image: url("icon/past2.jpg");
        background-repeat: no-repeat;
        background-size: contain;
    }
    `,
    
}

const MobileBottomNav = () => {
    return (
        <div>
        
          <div css={classes.mobileNav}>
            <ul css={classes.mobileNavUl}>
              <Link href="./"><li css={classes.mobileNavLi}><div css={classes.homeImg}></div><span css={classes.mobileNavSpan}>HOME</span></li></Link>
              <Link href="./BrownCheck"><li css={classes.mobileNavLi}><div css={classes.cameraImg}></div><span css={classes.mobileNavSpan}>撮影する</span></li></Link>
              <Link href="./SelfCheck"><li css={classes.mobileNavLi}><div css={classes.selfImg}></div><span css={classes.mobileNavSpan}>問診する</span></li></Link>
              <Link href="./MyBorwnLog"><li css={classes.mobileNavLi}><div css={classes.pastImg}></div><span css={classes.mobileNavSpan}>過去の診断</span></li></Link>
            </ul>
          </div>

        </div>
    );
}

export default MobileBottomNav;