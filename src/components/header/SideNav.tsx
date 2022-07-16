import { css } from "@emotion/react";
import { NextPage } from "next";
import Link from "next/link";
import NavList from "./NavList";

const menu = {
  home: {
    name: "HOME",
    link: "/Home",
    icon: "url(./icon/home.jpg)",
  },
  photo: {
    name: "撮影診断",
    link: "/BrownCheck",
    icon: "url(./icon/camera2.jpg)",
  },
  dailyCheck: {
    name: "今日の体調",
    link: "/DailyCheck",
    icon: "url(./icon/monshin2.jpg)",
  },
  healthCheck: {
    name: "健康診断",
    link: "/HealthCheck",
    icon: "url(./icon/monshin2.jpg)",
  },
  past: {
    name: "過去の診断",
    link: "/MyBrownLog",
    icon: "url(./icon/past2.jpg)",
  },
};

const classes = {
  logo: css`
    width: 100%;
    height: 12%;
    background-image: url("../logo/logo1.jpg");
    background-size: 90%;
    background-position: 50% -25%;
    background-repeat: no-repeat;
    &:hover {
      cursor: pointer;
    }
  `,
  nav: css`
    display: flex;
    justify-content: center;
    height: 88%;
  `,
  ul: css`
    margin-top: 70px;
  `,
  menuIcon: css``,
};

const SideNav: NextPage = () => {
  return (
    <>
      <Link href={"/Home"}>
        <div css={classes.logo}></div>
      </Link>
      <nav css={classes.nav}>
        <ul css={classes.ul}>
          <NavList
            name={menu.home.name}
            link={menu.home.link}
            icon={menu.home.icon}
          />
          <NavList
            name={menu.photo.name}
            link={menu.photo.link}
            icon={menu.photo.icon}
          />
          <NavList
            name={menu.dailyCheck.name}
            link={menu.dailyCheck.link}
            icon={menu.dailyCheck.icon}
          />
          <NavList
            name={menu.healthCheck.name}
            link={menu.healthCheck.link}
            icon={menu.healthCheck.icon}
          />
          <NavList
            name={menu.past.name}
            link={menu.past.link}
            icon={menu.past.icon}
          />
        </ul>
      </nav>
    </>
  );
};

export default SideNav;
