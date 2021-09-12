import React, { useEffect, useState } from "react";

import CreateResource from "components/Resource/ResourceCreateModal";
import PopUp from "components/class/PopUp/popup";
import ResourceItem from "components/Resource/ResourceItem";
import style from "./style.module.css";

import { useAppSelector } from "redux/hooks";
import { selectStatus, selectToken } from "redux/userSlice";

import userApi from "api/userApi";

const DocumentPage = function (props: any) {
  const token = useAppSelector(selectToken);
  const status = useAppSelector(selectStatus);

  const [create, setCreate] = useState(false);
  const handleClick = () => {
    setCreate(true);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const res = await userApi.getMyResources(token);
        const data = res?.data?.data?.result;
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    if (status === "logined") {
      getData();
    }
  }, [status]);

  const [myClass, setMyClass] = useState([]);
  useEffect(() => {
    async function fetchMyClass() {
      try {
        const res = await userApi.getMyClass(token);
        const myClass = res?.data?.data?.result;
        setMyClass(myClass);
      } catch (error) {
        console.log(error.message);
      }
    }
    if (status === "logined") {
      fetchMyClass();
    }
  }, [status]);
  return (
    <div className={style.page}>
      <div>
        {/* "Chia sẻ tài liệu button" */}
        <div className={style.buttonarea}>
          <button className={style.button} onClick={handleClick}>
            <div className={style.button__text}>Chia sẻ tài liệu</div>
            <div className={style.button__image}>
              <svg
                width="27"
                height="23"
                viewBox="0 0 27 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.60714 0.5H24.8929L26.75 2.35714V20.9286L24.8929 22.7857H2.60714L0.75 20.9286V2.35714L2.60714 0.5ZM2.60714 20.9286H24.8929V2.35714H2.60714V20.9286ZM23.0357 4.21429H4.46429V9.78572H23.0357V4.21429ZM21.1786 7.92857H6.32143V6.07143H21.1786V7.92857ZM15.6071 19.0714H23.0357V11.6429H15.6071V19.0714ZM17.4643 13.5H21.1786V17.2143H17.4643V13.5ZM11.8929 11.6429H4.46429V13.5H11.8929V11.6429ZM4.46429 17.2143H11.8929V19.0714H4.46429V17.2143Z"
                  fill="#6366F1"
                />
              </svg>
            </div>
          </button>
        </div>

        {create === true && (
          <PopUp closepopup={setCreate}>
            <CreateResource data={props.props} classgroup={data} />
          </PopUp>
        )}

        {/* Document */}
        <div className={style.documentsection}>
          <div className="w-full grid grid-cols-4 gap-11 justify-around">
            {data.map((val, key) => (
              <ResourceItem aresource={val} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
