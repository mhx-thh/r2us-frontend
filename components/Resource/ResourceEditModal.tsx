import React, { useState } from "react";

import GroupAPI from "api/groupAPI";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

import { ResourceType } from "lib/models";

import { useRouter } from "next/router";
import Swal from "sweetalert2";

type AppProps = {
  resource: ResourceType;
};

const ResourceEditModal = function (props: AppProps) {
  const eresource = props.resource;
  const token = useAppSelector(selectToken);
  const router = useRouter();
  const title =
    props.resource.resourceType === "Resources"
      ? "document"
      : props.resource.resourceType === "Examination Paper"
      ? "exam"
      : "outline";

  const initData = {
    resourceType: eresource.resourceType,
    resourceLink: eresource.resourceLink,
    resourceDescription: eresource.resourceDescription,
    resourceName: eresource.resourceName,
  };
  const [data, setData] = useState(initData);

  const handleChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    setData({
      ...data,
      [name]: val,
    });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      await GroupAPI.patchResource(data, eresource._id, token);
      Swal.fire("Lưu thành công", "Đã chỉnh sửa tài liệu !", "success");
      router.push(`/group/${props.resource.classId.slug}/${title}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSend}>
      <div className="absolute text-base leading-6 font-medium bg-indigo-200 w-full left-0 top-0 h-80 rounded-t-2xl tracking-normal">
        {/* Title */}
        <div className="flex px-16 mt-16 mb-8 tracking-normal">
          <img src="/icons/resource.svg" width="37" />
          <div>
            <div className="mx-8 mr-56 w-full">
              <input
                className="w-full px-2 text-2xl leading-9 font-medium text-indigo-500 bg-indigo-100 border border-solid rounded-xl border-2 border-solid border-indigo-500"
                value={data.resourceName}
                name="resourceName"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Teacher */}
        <div className="flex px-56 ml-0 m-3">
          <img className="my-2" width="20" src="/icons/teacher.svg" />
          <div className="mx-8 py-1 my-1">
            {eresource.classId.instructorId.instructorName}
          </div>
        </div>

        {/* course */}
        <div className="flex px-56 pb-3">
          <img className="my-1" width="20" src="/icons/course.svg" />
          <div className="mx-8 my-1">
            {eresource.classId.courseId.courseName}
          </div>
        </div>

        {/* class */}
        <div className="flex px-56">
          <img className="my-3" width="20" src="/icons/destination_group.svg" />
          <div className="px-8 my-3 w-11/12">{eresource.classId.className}</div>
        </div>

        {/* Link */}
        <div className="absolute top-72 my-3 flex mx-36 w-8/12 h-12 bg-white shadow-xl rounded-3xl items-center content-center self-center z-10">
          <div className="w-full text-base font-medium ">
            <input
              className=" p-5 w-full rounded-3xl h-12 bg-indigo-50 border-2 border-solid border-indigo-500"
              placeholder="Nhập link tài liệu"
              name="resourceLink"
              onChange={handleChange}
              value={data.resourceLink}
            />
          </div>
        </div>

        {/* SchoolYear */}
        <div className="mx-44 mt-16 pt-8 bg-white text-lg leading-6  font-medium text-indigo-500">
          {eresource.classId.academicId.schoolyear}, học kì{" "}
          {eresource.classId.academicId.semester}
        </div>

        {/* Review */}
        <div className="absolute px-2.5 ml-40 mt-4 h-44">
          <textarea
            className="bg-indigo-50 box-border rounded-lg items-end resize-none h-44 border-2 border-solid border-indigo-500 "
            placeholder="Mô tả môn học tại đây"
            name="resourceDescription"
            onChange={handleChange}
            value={data.resourceDescription}
            rows={7}
            cols={65}
          />
        </div>

        {/* Avatar */}
        <div className="float-right mr-8 -mt-16 py-6 relative -top-4">
          <img
            src={`${eresource.userId.photo}`}
            width="50"
            className="rounded-full"
          />
          <img className="ml-3 my-10" width="25" src="/icons/heart.svg" />
          <img className="ml-4 my-10" width="20" src="/icons/share_2.svg" />
          <button type="submit">
            <img className="ml-3.5" width="24" src="/icons/iconSubmit.svg" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ResourceEditModal;
