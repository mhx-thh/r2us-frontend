import React, { FC } from "react";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import Swal from "sweetalert2";

import { useAppSelector } from "redux/hooks";
import { selectToken, selectStatus } from "redux/userSlice";
import SideBar from "./class/SideBar";
import Information from "./class/Information";
import Item from "./class";

const TogglePage: FC = () => {
  const token = useAppSelector(selectToken);
  const status = useAppSelector(selectStatus);
  return (
    <React.Fragment>
      {/* <Link href="/login">
        <a>Login </a>
      </Link>
      <Link href="/user">
        <a>User </a>
  </Link>*/}
      {/* <Link href="/class">
        <Item />
      </Link> */}
      {/* {status === "logined" && <div>{token}</div>} */}
    </React.Fragment>
  );
};

export default TogglePage;
