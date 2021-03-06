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
import Swal from "sweetalert2";
import CreateResource from "components/Resource/ResourceCreateModal";

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
  const [create, setCreate] = useState(false);
  const token = useAppSelector(selectToken);

  useEffect(() => {
    async function fetchResources() {
      try {
        const res = await GroupAPI.getResources();
        const data = res?.data?.data?.result;
        setOutlineArray(data);
      } catch (error) {
        Swal.fire("Đã xảy ra lỗi", "", "error");
        console.log(error);
      }
      Swal.close();
    }
    fetchResources();
  }, [flag, props.outline, create]);

  const ClickCreate = () => {
    setCreate(!create);
  };

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

            <div className="relative -top-6">
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
    const ClickUpdate = () => {
      setUpdate(true);
    };

    const ClickDelete = () => {
      try {
        Swal.fire({
          title: "Bạn chắc chắn muốn xóa ?",
          text: "Bạn sẽ không thể hoàn tác lại nếu đã xóa!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Tôi chắc chắn !",
          cancelButtonText: "Không, quay lại !",
        }).then(async function (result) {
          if (result.isConfirmed) {
            await GroupAPI.deleteResource(data.id, token);
            Swal.fire(
              "Xóa thành công",
              "Đề cương đã được xóa khỏi lớp",
              "success"
            );
            setFlag(!flag);
          }
        });
      } catch (error) {
        Swal.fire("Đã xảy ra lỗi", "", "error");
        console.log(error);
      }
    };

    const acceptedStatus = {
      status: "accepted",
    };
    const ClickAccept = async () => {
      try {
        Swal.fire({
          title: "Đang cập nhập dữ liệu",
          icon: "info",
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
        });
        await GroupAPI.patchReview(acceptedStatus, data._id, token);
        Swal.fire({
          icon: "success",
          title: "Duyệt thành công",
          showConfirmButton: false,
          timer: 1500,
        });
        setFlag(!flag);
      } catch (error) {
        Swal.fire("Đã xảy ra lỗi", "", "error");
        console.log(error);
      }
    };

    return (
      <div ref={ref} className="absolute my-8 -mx-24">
        <ul className="w-28 text-base leading-6 font-normal shadow-xl rounded-xl bg-white border-2 border-solid border-blue-700">
          {/* {data.status === "pending" && props.role === "provider" && ( */}
          {data.status === "pending" && (
            <li
              className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-green-200 cursor-pointer"
              onClick={ClickAccept}
            >
              Duyệt
            </li>
          )}
          {/* )} */}
          <li
            className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-red-300 cursor-pointer"
            onClick={ClickDelete}
          >
            {data.status === "accepted" ? "Xóa" : "Không duyệt"}
          </li>
          {data.status === "accepted" && (
            <li
              className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200 cursor-pointer"
              onClick={ClickUpdate}
            >
              Chỉnh sửa
            </li>
          )}
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
          <button className={style.head} onClick={ClickCreate}>
            <div className={style.head__text}>Chia sẻ tài liệu</div>
            <div className={style.head__image}>
              <img src="/icons/resource.svg" />
            </div>
          </button>
        </div>
        {/* Accepted Resource */}
        <div className={style.documentsection}>
          {outlineArray.map((data) =>
            data.classId._id === props.id.classId &&
            data.classId.courseId._id === props.id.courseId &&
            data.classId.instructorId.id === props.id.instructorId &&
            data.classId.academicId._id === props.id.academicId &&
            data.resourceType === "Review Paper" &&
            data.status === "accepted" ? (
              <Outline key={data._id} outlineData={data} role={props.role} />
            ) : (
              <div key={data._id}></div>
            )
          )}
        </div>

        {/* Check role */}
        {props.role === "provider" && (
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
                  <Outline
                    key={data._id}
                    outlineData={data}
                    role={props.role}
                  />
                ) : (
                  <div key={data._id}></div>
                )
              )}
            </div>
          </div>
        )}
      </div>
      {create === true && (
        <PopUp closepopup={setCreate}>
          <CreateResource
            handleCreate={ClickCreate}
            iD={props?.id}
            resourceType="Review Paper"
          />
        </PopUp>
      )}
    </div>
  );
};

export default OutlinePage;
