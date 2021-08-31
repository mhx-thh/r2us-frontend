import PopUp from "components/user/PopUp/popup";
import DocForm from "components/user/ShowDoc/DocForm";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
type documentinfo = {
  name: string;
  src: string;
  description: string;
};

const UserDocument = function () {
  const [data, setData] = useState({
    name: "A",
    src: "B",
    description: "C",
  });

  const [openDoc, setOpenDoc] = useState(0);
  const ClickpopupDoc = () => {
    setOpenDoc(1);
  };

  console.log(data);

  return (
    <div>
      <div className={style.decuong}>đề cương</div>
      <div className={style.document}>
        <div className="rounded cursor-pointer  wrap" onClick={ClickpopupDoc}>
          <div className="text-center">
            <div className={style.text}>cảm nhận </div>
          </div>
          <div className="text-center wrap">
            <div className={style.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
              >
                <path
                  d="M9 0.999977C6.87827 0.999977 4.84344 1.84283 3.34315 3.34312C1.84285 4.84341 1 6.87825 1 8.99998C1 10.892 1.402 12.13 2.5 13.5L9 21L15.5 13.5C16.598 12.13 17 10.892 17 8.99998C17 6.87825 16.1571 4.84341 14.6569 3.34312C13.1566 1.84283 11.1217 0.999977 9 0.999977V0.999977Z"
                  stroke="#6366F1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
            </div>

            <div className={style.class}>KTLT</div>
          </div>
          <div className="text-center wrap">
            <div className={style.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.875 7.875C8.91929 7.875 9.92081 7.46016 10.6592 6.72173C11.3977 5.98331 11.8125 4.98179 11.8125 3.9375C11.8125 2.89321 11.3977 1.89169 10.6592 1.15327C9.92081 0.414843 8.91929 0 7.875 0C6.83071 0 5.82919 0.414843 5.09077 1.15327C4.35234 1.89169 3.9375 2.89321 3.9375 3.9375C3.9375 4.98179 4.35234 5.98331 5.09077 6.72173C5.82919 7.46016 6.83071 7.875 7.875 7.875ZM10.5 3.9375C10.5 4.63369 10.2234 5.30137 9.73115 5.79366C9.23887 6.28594 8.57119 6.5625 7.875 6.5625C7.17881 6.5625 6.51113 6.28594 6.01884 5.79366C5.52656 5.30137 5.25 4.63369 5.25 3.9375C5.25 3.24131 5.52656 2.57363 6.01884 2.08134C6.51113 1.58906 7.17881 1.3125 7.875 1.3125C8.57119 1.3125 9.23887 1.58906 9.73115 2.08134C10.2234 2.57363 10.5 3.24131 10.5 3.9375ZM15.75 14.4375C15.75 15.75 14.4375 15.75 14.4375 15.75H1.3125C1.3125 15.75 0 15.75 0 14.4375C0 13.125 1.3125 9.1875 7.875 9.1875C14.4375 9.1875 15.75 13.125 15.75 14.4375ZM14.4375 14.4323C14.4362 14.1094 14.2354 13.1381 13.3455 12.2483C12.4897 11.3925 10.8793 10.5 7.875 10.5C4.86938 10.5 3.26025 11.3925 2.4045 12.2483C1.51463 13.1381 1.31512 14.1094 1.3125 14.4323H14.4375Z"
                  fill="#6366F1"
                />
              </svg>{" "}
            </div>

            <div className={style.class}>ten giao vien</div>
          </div>
          <div className="text-center wrap">
            <div className={style.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
              >
                <path
                  d="M3.0802 17.7778H16.8623V2.22222C16.8623 1.63285 16.6685 1.06762 16.3236 0.650874C15.9787 0.234126 15.5109 0 15.0232 0H3.06917C1.9602 0 0.310547 0.887778 0.310547 3.33333V18.8889C0.310547 21.3344 1.9602 22.2222 3.06917 22.2222H16.8623V20H3.0802C2.65537 19.9867 2.14963 19.7833 2.14963 18.8889C2.14963 17.9944 2.65537 17.7911 3.0802 17.7778ZM4.90825 4.44444H13.1841V6.66667H4.90825V4.44444Z"
                  fill="#6366F1"
                />
              </svg>{" "}
            </div>

            <div className={style.class}>ten giao vien</div>
          </div>
          {openDoc === 1 && (
            <PopUp closepopup={setOpenDoc}>
              <DocForm />
            </PopUp>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDocument;
