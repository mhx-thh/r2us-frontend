import Link from "next/link";
import React, { FC } from "react";
import { useAppSelector } from "redux/hooks";
import { selectStatus, selectToken } from "redux/userSlice";
import Header from "../components/Header/header";
import SideBar from "../components/SideBar";

const TogglePage: FC = () => {
  const token = useAppSelector(selectToken);
  const status = useAppSelector(selectStatus);
  return (
    <React.Fragment>
      <Link href="/login">
        <a>Login </a>
      </Link>
      <Link href="/user">
        <a>User </a>
      </Link>
      {status === "logined" && <div>{token}</div>}

    </React.Fragment>
  );
};

export default TogglePage;
