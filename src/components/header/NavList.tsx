import { css, keyframes } from "@emotion/react";
import { NextPage } from "next";
import Link from "next/link";

export type Props = {
  name: string;
  link: string;
  icon: string;
};
const animations = {
  menuAfter: keyframes`
  0%{
    width: 0px;
  }
  100%{
    width: 200px;
    border-bottom: 2px #000 solid;
  }
  `,
  menuBefore: keyframes`
   0%{
    width: 0px;
   }
   100%{
    width: 300px;
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
      animation: ${animations.menuAfter} 0.3s ease forwards;
      animation-delay: 0.15s;
    }
    &:hover:before {
      position: absolute;
      border-left: 2px #000 solid;
      width: 2px;
      height: 65px;
      transform: rotate(-30deg);
      bottom: 143%;
      left: -18.5%;
      content: "";
      animation: ${animations.menuBefore} 0.3s ease forwards;
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
  return (
    <>
      <Link href={link}>
        <li css={classes.menu}>
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
