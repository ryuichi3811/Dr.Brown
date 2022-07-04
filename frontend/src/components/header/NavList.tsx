import { css } from "@emotion/react";
import { NextPage } from "next";
import Link from "next/link";

export type Props = {
  pageName: string;
  pageLink: string;
};

const classes = {
  li : css`
    text-align: center;
    margin-right: 3%;
    width: 170px;
    &:last-child {
      margin-right: 0;
    }
  `
}

const NavList: NextPage<Props> = ({ pageName, pageLink }) => {
  return (
    <li css={classes.li}>
      <Link href={pageLink}>{pageName}</Link>
    </li>
  );
};

export default NavList;
