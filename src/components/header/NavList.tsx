import { css, keyframes } from "@emotion/react";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export type Props = {
  name: string;
  link: string;
  icon: string;
};
const animations = {
  menuAfter: keyframes`
  0%{
   transform: translateX(-200px);
  }
  100%{
   transform: translateX(0);
    border-bottom: 2px #000 solid;
  }
  `,
  menuBefore: keyframes`
   0%{
    transform: translateX(-200px);
   }
   100%{
    transform: translateX(0);
    transform: rotate(-45deg);
    border-bottom: 2px #000 solid;
   }
 `,
};
const classes = {
  menu: css`
    display: flex;
    height: 50px;
    width: 200px;
    justify-content: center;
    align-items: center;
    margin-bottom: 35px;
    position: relative;
    &:last-child {
      margin-bottom: 0;
    }
    &:hover {
      cursor: pointer;
      & > div {
        font-size: 1.8rem;
      }
    }
    &:hover:after {
      position: absolute;
      width: 200px;
      height: 2px;
      bottom: -1%;
      left: 0;
      content: "";
      animation: ${animations.menuAfter} 0.13s ease forwards;
    }
    &:hover:before {
      position: absolute;
      border-left: 2px #000 solid;
      width: 2px;
      height: 80px;
      bottom: -21%;
      left: -14.5%;
      content: "";
      animation: ${animations.menuBefore} 0.13s ease forwards;
    }
  `,
  menuLocation: css`
    display: flex;
    height: 50px;
    width: 200px;
    justify-content: center;
    align-items: center;
    margin-bottom: 35px;
    position: relative;
    &::after {
      position: absolute;
      border-bottom: 2px #000 solid;
      width: 200px;
      height: 2px;
      bottom: -1%;
      left: 0;
      content: "";
    }
    &::before {
      position: absolute;
      border-left: 2px #000 solid;
      width: 2px;
      height: 80px;
      bottom: -21%;
      left: -14.5%;
      transform: rotate(-45deg);
      content: "";
    }
  `,
  icon: css`
    width: 40px;
    height: 40px;
    margin: 5px;
    margin-left: 15px;
    background-size: cover;
  `,
  menuName: css`
    width: 140px;
    padding-left: 10px;
    font-size: 1.7rem;
    letter-spacing: 1px;
    transition: 0.1s;
  `,
};

const NavList: NextPage<Props> = ({ name, link, icon }) => {
  const router = useRouter();
  return (
    <>
      <Link href={link}>
        <li css={router.pathname == link ? classes.menuLocation : classes.menu}>
          <div css={classes.icon} style={{ backgroundImage: `${icon}` }}></div>
          <div css={classes.menuName}>
            <p>{name}</p>
          </div>
        </li>
      </Link>
    </>
  );
};

export default NavList;
