import { NextPage } from "next";
import Link from "next/link";

export type Props = {
  pageName: string;
  pageLink: string;
};

const NavList: NextPage<Props> = ({ pageName, pageLink }) => {
  return (
    <li>
      <Link href={pageLink}>{pageName}</Link>
    </li>
  );
};

export default NavList;
