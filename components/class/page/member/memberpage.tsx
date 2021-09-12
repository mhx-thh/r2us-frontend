import { memberType } from "lib/models";
import React from "react";
import MemberSection from "./membersection";
import style from "./style.module.css";

type AppProps = {
  members: Array<memberType>;
  role: string;
};

const MemberPage = function (props: AppProps) {
  return (
    <div className={style.page}>
      <div className={style.grid}>
        <div className={style.grid_left}>
          <div className="bg-indigo-50 relative right-28 top-16 rounded-r-3xl pl-32">
            <div className="relative -top-12">
              <MemberSection
                title="Quản trị viên"
                role="provider"
                members={props.members}
              />
            </div>
          </div>
          {/* Check role */}
          {props.role === "provider" && (
            <div className="pl-4 pt-8">
              <MemberSection
                title="Yêu cầu"
                role="member"
                members={props.members}
              />
            </div>
          )}
        </div>
        <div className={style.grid_right}>
          <MemberSection
            title="Thành viên"
            role="member"
            members={props.members}
          />
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
