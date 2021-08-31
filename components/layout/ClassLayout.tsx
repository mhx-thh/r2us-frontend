import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { useAppSelector } from "redux/hooks";
import { selectUser } from "redux/userSlice";
import Title from "components/class/Title/Title";
import Sidebar from "components/class/Sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
  initTitle: any;
}

const LayoutClass = ({ initTitle, children }: Props) => {
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
      <Title data={initTitle} />
      <Sidebar param={path} id={initTitle.slug} />
      <hr></hr>
      {children}
    </React.Fragment>
  );
};

export default LayoutClass;
