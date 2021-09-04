import React, { useState } from "react";

import ResourceItem from "components/Resource/ResourceItem";
import useClickOutside from "components/clickOutside/clickOutside";
import PopUp from "components/class/PopUp/popup";
import ResourceEditModal from "components/Resource/ResourceEditModal";

import style from "./style.module.css";
import { Id, ResourceType } from "lib/models";

import GroupAPI from "api/groupAPI";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

type outlineType = {
  outlineData: ResourceType;
  role: string;
};

type AppProps = {
  outline: Array<ResourceType>;
  id: Id;
  role: string;
};

const OutlinePage = function (props: AppProps) {
  const [outlineArray, setOutlineArray] = useState(props.outline);

  // Outline Item
  const Outline = function (props: outlineType) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };

    return (
      <div className={style.outline}>
        {props.role === "provider" && (
          <div>
            <button className={style.outline__button} onClick={handleOpen}>
              <img src="/icons/threedot.svg" />
            </button>

            <div className="absolute">
              {open === true ? (
                <DropdownResource close={setOpen} data={props.outlineData} />
              ) : (
                <div></div>
              )}
            </div>
          </div>
        )}
        <div className={style.outline__outline}>
          <ResourceItem aresource={props.outlineData} />
        </div>
      </div>
    );
  };

  //  Dropdown function
  function DropdownResource({ close, data }: any) {
    const token = useAppSelector(selectToken);
    const ref = useClickOutside(() => {
      close(0);
    });

    const [update, setUpdate] = useState(false);
    const handleUpdate = () => {
      setUpdate(true);
    };

    const ClickDelete = () => {
      GroupAPI.deleteResource(data.id, token);
      const newSelect = outlineArray.filter((items) => items !== data);
      setOutlineArray(newSelect);
    };

    return (
      <div ref={ref} className="absolute my-8 -mx-24">
        <ul className="w-28  h-28 text-base leading-6 font-normal shadow rounded-xl py-1 bg-white">
          {data.status === "accept" ? (
            <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200 ">
              <button>Duyệt</button>
            </li>
          ) : (
            <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200 ">
              <button>Thêm</button>
            </li>
          )}

          <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200 ">
            <button onClick={ClickDelete}>Xóa</button>
          </li>

          <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200">
            <button onClick={handleUpdate}>Chỉnh sửa</button>
          </li>
        </ul>

        {update === true && (
          <PopUp closepopup={close}>
            <ResourceEditModal resource={data} />
          </PopUp>
        )}
      </div>
    );
  }

  return (
    <div className={style.page}>
      <div>
        {/* Button Share Resource */}
        <div className={style.buttonarea}>
          <div className={style.head}>
            <div className={style.head__text}>Chia sẻ tài liệu</div>
            <div className={style.head__image}>
              <img src="/icons/resource.svg" />
            </div>
          </div>
        </div>
        <div className="w-64 h-96 bg-indigo-50 absolute right-0 rounded-l-3xl px-20 py-10" />
        {/* Accepted Resource */}
        <div className={style.documentsection}>
          {outlineArray.map((data) =>
            data.classId._id === props.id.classId &&
            data.classId.courseId._id === props.id.courseId &&
            data.classId.instructorId.id === props.id.instructorId &&
            data.classId.academicId._id === props.id.academicId &&
            data.resourceType === "Examination Paper" &&
            data.status === "accept" ? (
              <Outline
                key={data.resourceName}
                outlineData={data}
                role={props.role}
              />
            ) : (
              <div></div>
            )
          )}
        </div>

        {/* Request */}
        <div className={style.prebox}>
          <div className={style.box}>
            <div className={style.box__text}>Yêu cầu</div>
          </div>
        </div>

        {/* Request Resource */}
        <div className={style.documentsection}>
          {outlineArray.map((data) =>
            data.classId._id === props.id.classId &&
            data.classId.courseId._id === props.id.courseId &&
            data.classId.instructorId.id === props.id.instructorId &&
            data.classId.academicId._id === props.id.academicId &&
            data.resourceType === "Examination Paper" &&
            data.status === "pending" ? (
              <Outline
                key={data.resourceName}
                outlineData={data}
                role={props.role}
              />
            ) : (
              <div></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default OutlinePage;
