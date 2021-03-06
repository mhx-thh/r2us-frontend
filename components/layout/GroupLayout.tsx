import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { titleGroup } from "lib/models";

interface Props {
  initTitle: titleGroup;
  children: React.ReactNode;
  role: string;
}

const GroupHeaderLayout = (props: Props) => {
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_WEB_URL;
  const path = router.asPath;

  const title = `R2us | ${props.initTitle.className}`;
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
      {props.children}
    </React.Fragment>
  );
};

export default GroupHeaderLayout;
