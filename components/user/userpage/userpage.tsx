import React, { useState } from "react";
import style from "../userpage/style.module.css";

import InputField from "components/user/userpage/inputfield";

import { useAppSelector } from "redux/hooks";
import { selectToken, selectUser } from "redux/userSlice";
import userApi from "api/userApi";
import Swal from "sweetalert2";

const UserPage = function () {
  const user = useAppSelector(selectUser);
  const token = useAppSelector(selectToken);

  const [active, setActive] = useState(false);
  console.log(user);
  const [userData, setUserData] = useState({
    familyName: user.familyName,
    givenName: user.givenName,
    studentCardNumber: user.studentCardNumber,
    dateOfBirth: user.dateOfBirth,
    photo: user.photo,
    bio: user.bio,
    email: user.email,
  });

  const ClickUpdate = () => {
    setActive(!active);
  };
  const handleChangeFamilyName = (e) => {
    setUserData({
      ...userData,
      familyName: e.target.value,
    });
  };
  const handleChangeGivenName = (e) => {
    setUserData({
      ...userData,
      givenName: e.target.value,
    });
  };
  const handleChangeStudentCardNumber = (e) => {
    setUserData({
      ...userData,
      studentCardNumber: e.target.value,
    });
  };
  const handleChangeBio = (e) => {
    setUserData({
      ...userData,
      bio: e.target.value,
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
      await userApi.patchUser({ bio: userData.bio }, token);
      Swal.fire(
        "Cập nhập thành công",
        `Đã cập nhập thông tin của bản thân`,
        "success"
      );
      setActive(false);
    } catch (error) {
      Swal.fire("Đã xảy ra lỗi", "", "error");
      console.log(error);
    }
  };
  return (
    <div className="pl-48 grid grid-cols-12">
      {/* User field */}
      <div className="pt-16 flex col-span-6">
        <div className="flex-grow">
          <div onChange={handleChangeFamilyName}>
            <InputField
              name="Họ"
              editable={active}
              data={userData.familyName}
              multiline={false}
            />
          </div>
          <div onChange={handleChangeGivenName}>
            <InputField
              name="Tên"
              editable={active}
              data={userData.givenName}
              multiline={false}
            />
          </div>
          <div onChange={handleChangeStudentCardNumber}>
            <InputField
              name="MSSV"
              editable={active}
              data={userData.studentCardNumber}
              multiline={false}
            />
          </div>
          <div>
            <InputField
              name="Email"
              editable={active}
              data={userData.email}
              multiline={false}
            />
          </div>
          <div onChange={handleChangeBio}>
            <InputField
              name="Mô tả"
              editable={active}
              data={userData.bio}
              multiline={true}
            />
          </div>
        </div>
      </div>
      <div className="relative w-52 h-48 bg-white shadow-md rounded-2xl left-48 top-28">
        <div className="text-base leading-6 font-semibold text-indigo-500 pl-4 pt-3 tracking-normal">
          Ảnh đại diện
        </div>
        <img src={user.photo} width="80" className="rounded-full m-auto my-3" />
        <button className=" ml-16 p-2 shadow-sm border border-blue-500 rounded-xl tracking-normal mb-12 hover:bg-blue-600 hover:text-white">
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
              <button className={style.button__cancel} onClick={ClickUpdate}>
                Quay lại
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
