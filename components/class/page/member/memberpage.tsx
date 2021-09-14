import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { memberType, titleGroup } from "lib/models";
import style from "./style.module.css";
import useClickOutside from "components/clickOutside/clickOutside";
import Title from "components/class/Title/Title";
import Sidebar from "components/class/Sidebar/Sidebar";

import GroupAPI from "api/groupAPI";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

import { useRouter } from "next/router";

type AppProps = {
  members: Array<memberType>;
  role: string;
  title: titleGroup;
};
type member = {
  member: memberType;
  role: string;
};

type memberSector = {
  title: string;
  members: Array<memberType>;
  role: string;
};

const MemberPage = function (props: AppProps) {
  const [memberArray, setMemberArray] = useState(props.members);
  const [role, setRole] = useState(props.role);
  const token = useAppSelector(selectToken);
  const [flag, setFlag] = useState(false);
  const router = useRouter();
  const path = router.asPath;

  useEffect(() => {
    setRole(props.role);
  }, [props.role]);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const res = await GroupAPI.getMembers(props.title._id, token);
        const data = res?.data?.data?.result;
        setMemberArray(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMembers();
  }, [flag, props.members]);

  const demoteRole = {
    role: "member",
  };
  // Function dropdown
  const DropdownMember = function ({ close, member, role }: any) {
    const ref = useClickOutside(() => {
      close(0);
    });

    const ClickDemote = async () => {
      try {
        await GroupAPI.patchRole(demoteRole, member._id, token);
      } catch (error) {
        console.log(error);
      }
      setRole("member");
    };

    const promoteRole = {
      role: "provider",
    };
    const ClickPromote = async () => {
      try {
        await GroupAPI.patchRole(promoteRole, member._id, token);
      } catch (error) {
        console.log(error);
      }
    };

    const ClickDelete = () => {
      try {
        Swal.fire({
          title: `Bạn chắc chắn muốn xóa
          ${member.userId.familyName} ${member.userId.givenName} ra khỏi lớp?`,
          text: "Bạn sẽ không thể hoàn tác lại nếu đã xóa!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Tôi chắc chắn !",
          cancelButtonText: "Không, quay lại !",
        }).then(async function (result) {
          if (result.isConfirmed) {
            await GroupAPI.deleteMember(member._id, token);
            setFlag(!flag);
            Swal.fire(
              "Xóa thành công",
              `Đã xóa ${member.userId.familyName} ${member.userId.givenName} ra khỏi lớp `,
              "success"
            );
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <div ref={ref} className="absolute my-8 -mx-24 bg-white">
        <ul className="w-32 text-base leading-6 font-normal shadow-xl rounded-xl bg-white border-2 border-solid border-blue-700">
          {role === "provider" ? (
            <li
              className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-red-300 cursor-pointer"
              onClick={ClickDemote}
            >
              Hạ chức
            </li>
          ) : (
            <li
              className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-green-200 cursor-pointer"
              onClick={ClickPromote}
            >
              Thăng chức
            </li>
          )}
          {role === "member" && (
            <li
              className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-red-300 cursor-pointer"
              onClick={ClickDelete}
            >
              Xóa thành viên
            </li>
          )}
        </ul>
      </div>
    );
  };

  // Function Member
  const Member = ({ member, role }: member) => {
    const image = member.userId.photo;
    const [open, setOpen] = useState(false);
    const ClickThreeDot = () => {
      setOpen(true);
    };
    return (
      <div className={style.member}>
        {/* Image */}
        <div className={style.member__preimg}>
          <img
            className={style.member__img}
            src={image}
            alt={`${member.userId._id}`}
          />
        </div>

        {/* Text */}
        <div className={style.member__text}>
          {/* Name */}
          <div>
            <input
              disabled
              value={`${member.userId.familyName} ${member.userId.givenName}`}
              className={style.member__text__name}
            />
          </div>
          <div>
            {/* Email */}
            <input
              disabled
              value={member.userId.email}
              className={style.member__text__email}
            />
          </div>
        </div>
        {/* {props.role === "provider" && ( */}
        <div>
          <button className={style.member__button} onClick={ClickThreeDot}>
            <img src="/icons/threedot.svg" />
          </button>
          <div className="relative -top-12 left-32">
            {open === true && (
              <DropdownMember close={setOpen} member={member} role={role} />
            )}
          </div>
        </div>
        {/* )}  */}
      </div>
    );
  };

  // Function MemberSection
  const MemberSection = ({ title, members, role }: memberSector) => {
    return (
      <div className={style.section}>
        {/* Head */}
        <div className={style.section__title}>
          <div className={style.section__title__box}>
            <div className={style.section__title__text}>{title}</div>
          </div>
        </div>
        {/* Content */}
        <div className={style.section__member}>
          {members?.map(
            (val) =>
              val.role === role && (
                <Member member={val} role={val.role} key={val._id} />
              )
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Title initTitle={props.title} role={role} />
      <Sidebar param={path} id={props.title.slug} />
      <hr />
      <div className={style.page}>
        <div className={style.grid}>
          {/* Providers */}
          <div className={style.grid_left}>
            <div className="bg-indigo-50 relative right-28 top-16 rounded-r-3xl pl-32">
              <div className="relative -top-12">
                <MemberSection
                  title="Quản trị viên"
                  role="provider"
                  members={memberArray}
                />
              </div>
            </div>
          </div>
          {/* Members */}
          <div className={style.grid_right}>
            <MemberSection
              title="Thành viên"
              role="member"
              members={memberArray}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
