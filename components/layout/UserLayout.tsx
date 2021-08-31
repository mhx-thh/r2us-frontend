import React from "react";

import Footer from "components/footer/FooterComponent";
import Sidebar from "components/user/Sidebar/UserSidebar";
import UserHeader from "components/user/userheader/header";

import Head from "next/head";
import { useRouter } from "next/router";

import { useAppSelector } from "redux/hooks";
import { selectUser } from "redux/userSlice";

interface Props {
  children: React.ReactNode;
}

const LayoutUser = ({ children }: Props) => {
  const user = useAppSelector(selectUser);
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_WEB_URL;
  const path = router.asPath;

  const title = `R2us | ${user.familyName} ${user.givenName}`;
  const desc = "user";
  const icon = "icons/logo.svg";

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" property="og:description" content={desc} />
        <meta name="image" property="og:image" content={`${url}/home.png`} />
        <link rel="icon" type="image/svg+xml" href={icon} />
        <link rel="mask-icon" href={icon} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:url" content={`${url}${path}`} />
        <link rel="canonical" href={`${url}${path}`} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <UserHeader user={user} />
      <Sidebar param={path} />
      <hr></hr>
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default LayoutUser;
