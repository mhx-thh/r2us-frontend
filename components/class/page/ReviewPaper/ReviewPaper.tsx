import React, { useEffect, useState } from "react";

import ResourceItem from "components/Resource/ResourceItem";
import useClickOutside from "components/clickOutside/clickOutside";
import PopUp from "components/class/PopUp/popup";
import ResourceEditModal from "components/Resource/ResourceEditModal";

import style from "../groupPage.module.css";
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
  const [flag, setFlag] = useState(false);

  const token = useAppSelector(selectToken);

  useEffect(() => {
    async function fetchResources() {
      try {
        const res = await GroupAPI.getResources();
        const data = res?.data?.data?.result;
        setOutlineArray(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchResources();
  }, [flag, props.outline]);

  // Outline Item
  const Outline = function (props: outlineType) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    return (
      <div className={style.document}>
        {(props.role === "provider" || props.role === "member") && (
          <div>
            <button className={style.document__button} onClick={handleOpen}>
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
        <div className={style.document__document}>
          <ResourceItem aresource={props.outlineData} />
        </div>
      </div>
    );
  };

  //  Dropdown function
  const DropdownResource = function ({ close, data }: any) {
    const ref = useClickOutside(() => {
      close(0);
    });

    const [update, setUpdate] = useState(false);
    const handleUpdate = () => {
      setUpdate(true);
    };

    const ClickDelete = async () => {
      try {
        await GroupAPI.deleteResource(data.id, token);
        setFlag(!flag);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <div ref={ref} className="absolute my-8 -mx-24">
        <ul className="w-28 text-base leading-6 font-normal shadow rounded-xl bg-white">
          {data.status === "pending" && props.role === "provider" && (
            <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200 ">
              <button>Duyệt</button>
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
  };

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
        {/* Accepted Resource */}
        <div className={style.documentsection}>
          {outlineArray.map((data) =>
            data.classId._id === props.id.classId &&
            data.classId.courseId._id === props.id.courseId &&
            data.classId.instructorId.id === props.id.instructorId &&
            data.classId.academicId._id === props.id.academicId &&
            data.resourceType === "Review Paper" &&
            data.status === "accept" ? (
              <Outline key={data._id} outlineData={data} role={props.role} />
            ) : (
              <div key={data._id}></div>
            )
          )}
        </div>

        {/* Check role */}
        {/* {props.role === "provider" && ( */}
        <div>
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
              data.resourceType === "Review Paper" &&
              data.status === "pending" ? (
                <Outline key={data._id} outlineData={data} role={props.role} />
              ) : (
                <div key={data._id}></div>
              )
            )}
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default OutlinePage;
