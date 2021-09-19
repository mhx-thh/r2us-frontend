import React, { useEffect, useState } from "react";

import style from "../userpage/style.module.css";
import UserHeader from "../userheader/header";
import Sidebar from "../Sidebar/UserSidebar";
import { user } from "lib/models";
import Swal from "sweetalert2";

import InputField from "components/user/userpage/inputfield";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

import userApi from "api/userApi";

import { useRouter } from "next/router";

type AppProps = {
  user: user;
};

const UserPage = function ({ user }: AppProps) {
  const [userData, setUserData] = useState(user);
  const token = useAppSelector(selectToken);
  const router = useRouter();
  const path = router.asPath;
  const [flag, setFlag] = useState(false);
  const [userDataUpdate, setUserDataUpdate] = useState({
    familyName: userData.familyName,
    givenName: userData.givenName,
    studentCardNumber: userData.studentCardNumber,
    bio: userData.bio,
    email: userData.email,
  });

  useEffect(() => {
    async function getUser() {
      try {
        const res = await userApi.getInfo(token);
        const data = res?.data?.data;
        setUserData(data);
        setUserDataUpdate({
          familyName: data.familyName,
          givenName: data.givenName,
          studentCardNumber: data.studentCardNumber,
          bio: data.bio,
          email: data.email,
        });
      } catch (error) {
        Swal.fire("Đã xảy ra lỗi", "", "error");
        console.log(error);
      }
    }
    getUser();
  }, [flag]);

  const [active, setActive] = useState(false);

  const handleChangeFamilyName = (e) => {
    setUserDataUpdate({
      ...userDataUpdate,
      familyName: e.target.value,
    });
  };
  const handleChangeGivenName = (e) => {
    setUserDataUpdate({
      ...userDataUpdate,
      givenName: e.target.value,
    });
  };
  const handleChangeStudentCardNumber = (e) => {
    setUserDataUpdate({
      ...userDataUpdate,
      studentCardNumber: e.target.value,
    });
  };
  const handleChangeBio = (e) => {
    setUserDataUpdate({
      ...userDataUpdate,
      bio: e.target.value,
    });
  };

  const ClickUpdate = () => {
    setActive(!active);
  };

  const ClickCancel = () => {
    setActive(false);
    setUserDataUpdate({
      familyName: userData.familyName,
      givenName: userData.givenName,
      studentCardNumber: userData.studentCardNumber,
      bio: userData.bio,
      email: userData.email,
    });
  };

  const ClickSubmit = async () => {
    try {
      Swal.fire({
        title: "Đang cập nhập dữ liệu",
        icon: "info",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      await userApi.patchUser(
        {
          studentCardNumber: userDataUpdate.studentCardNumber,
          bio: userDataUpdate.bio,
          familyName: userDataUpdate.familyName,
          givenName: userDataUpdate.givenName,
        },
        token
      );
      setActive(false);
      setFlag(!flag);
      Swal.fire("Cập nhập thành công", `Đã cập nhập thông tin`, "success");
      // router.push("/user");
    } catch (error) {
      Swal.fire("Đã xảy ra lỗi", "", "error");
      console.log(error);
    }
  };

  const ClickChangePhoto = () => {
    Swal.fire({
      title: `Nhập đường dẫn của hình ảnh`,
      text: " ",
      icon: "info",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Xác nhận",
      showLoaderOnConfirm: true,
    }).then(async function (result) {
      if (result.isConfirmed) {
        try {
          Swal.fire({
            title: "Đang lấy dữ liệu",
            icon: "info",
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
            },
          });
          await userApi.patchUser(
            {
              photo: result.value,
            },
            token
          );
          setUserData({
            ...userData,
            photo: result.value,
          });
          Swal.fire({
            icon: "success",
            title: "Đã cập nhập avatar thành công",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          Swal.fire("Đã xảy ra lỗi", "", "error");
          console.log(error);
        }
      }
    });
  };
  return (
    <div>
      <UserHeader user={userData} />
      <Sidebar param={path} />
      <div className="h-[12px]"></div>
      <hr></hr>
      <div className="pl-48 grid grid-cols-12">
        {/* User field */}
        <div className="pt-16 flex col-span-6">
          <div className="flex-grow">
            <div onChange={handleChangeFamilyName}>
              <InputField
                name="Họ"
                editable={active}
                data={userDataUpdate.familyName}
                multiline={false}
              />
            </div>
            <div onChange={handleChangeGivenName}>
              <InputField
                name="Tên"
                editable={active}
                data={userDataUpdate.givenName}
                multiline={false}
              />
            </div>
            <div onChange={handleChangeStudentCardNumber}>
              <InputField
                name="MSSV"
                editable={active}
                data={userDataUpdate.studentCardNumber}
                multiline={false}
              />
            </div>
            <div>
              <InputField
                name="Email"
                editable={false}
                data={userDataUpdate.email}
                multiline={false}
              />
            </div>
            <div onChange={handleChangeBio}>
              <InputField
                name="Mô tả"
                editable={active}
                data={userDataUpdate.bio}
                multiline={true}
              />
            </div>
          </div>
        </div>
        <div className="relative w-52 h-48 bg-white shadow-md rounded-2xl left-48 top-28">
          <div className="text-base leading-6 font-semibold text-indigo-500 pl-4 pt-3 tracking-normal">
            Ảnh đại diện
          </div>
          <img
            src={userData.photo}
            width="80"
            className="rounded-full m-auto my-3"
          />
          <button
            onClick={ClickChangePhoto}
            className=" ml-16 p-2 shadow-sm border border-blue-500 rounded-xl tracking-normal mb-12 hover:bg-blue-600 hover:text-white"
          >
            Cập nhập
          </button>
          <div className={style.pbutton}>
            {!active ? (
              <button className={style.button__update} onClick={ClickUpdate}>
                Chỉnh sửa
              </button>
            ) : (
              <div className="flex">
                <button className={style.button__submit} onClick={ClickSubmit}>
                  Xác nhận
                </button>
                <button className={style.button__cancel} onClick={ClickCancel}>
                  Quay lại
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
