import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useAppDispatch } from "redux/hooks";
import { getInfoAsync } from "redux/userSlice";
import UserHeader from "../userheader/header";
import Footer from "components/user/footer/footer";

interface Props {
  title: string;
  desc: string;
  icon: string;
  children: React.ReactNode;
}

const LayoutUser = ({ title, desc, icon, children }: Props) => {
  const router = useRouter();
  //   const dispatch = useAppDispatch();
  //   useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     const { pathname } = router;
  //     if (pathname === "/login/cb" || pathname === "/login") return;
  //     if (!token) {
  //       Swal.fire({
  //         timer: 2000,
  //         icon: "warning",
  //         title: "Chưa đăng nhập",
  //         text: "Bạn chưa từng đăng nhập vào hệ thống nè",
  //       });
  //       return;
  //     }
  //     dispatch(getInfoAsync(token));
  //   }, []);
  const url = process.env.NEXT_PUBLIC_WEB_URL;
  const path = router.asPath;
  // TODO replace logo svg

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
      <UserHeader param={path} />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default LayoutUser;
