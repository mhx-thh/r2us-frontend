import React, { FC } from "react";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import Swal from "sweetalert2";

import { useAppSelector } from "redux/hooks";
import { selectToken, selectStatus } from "redux/userSlice";
import ClassDocument from "components/class";

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
    // <ClassDocument />
  );
};

export default TogglePage;
