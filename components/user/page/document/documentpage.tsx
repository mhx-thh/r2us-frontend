import GroupAPI from "api/groupAPI";
import userApi from "api/userApi";
import CreateResource from "components/class/CreateResource/createResource";
import PopUp from "components/class/PopUp/popup";
import ResourceItem from "components/Resource/ResourceItem";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import style from "./style.module.css";

const DocumentPage = function () {
  const token = useAppSelector(selectToken);
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
    getData();
  }, []);
  const [addDoc, setAddDoc] = useState(0);
  const ClickpopupDoc = () => {
    setAddDoc(1);
  };
  const userRole = "admin";

  const [create, setCreate] = useState(false);
  const handleClick = () => {
    setCreate(true);
  };

  const [resource, setResource] = useState([]);
  useEffect(() => {
    async function fetchResource() {
      try {
        const res = await GroupAPI.getResources();
        const data = res?.data?.data?.result;
        setResource(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchResource();
  }, []);

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
            <CreateResource data={data} />
          </PopUp>
        )}

        {/* Document */}
        <div className={style.documentsection}>
          {data.map((val, key) => (
            <ResourceItem aresource={val} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
