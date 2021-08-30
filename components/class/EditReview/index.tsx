import React, { useState } from "react";

import GroupAPI from "api/groupAPI";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

type ApiType = {
  review: string;
  reviewTitle: string;
  reviewType: string;
};

type reviewType = {
  reviewType: string;
  reviewTitle: string;
  _id: string;
  classId: {
    className: string;
    courseId: {
      courseName: string;
      facultyId: {
        facultyName: string;
      };
    };
    instructorId: {
      instructorName: string;
    };
    academicId: {
      schoolyear: string;
      semester: string;
    };
  };
  review: string;
  userId: {
    givenName: string;
    familyName: string;
    photo: string;
  };
};

type AppProps = {
  review: reviewType;
};

const EditReview = function (props: AppProps) {
  const ereview = props.review;
  const token = useAppSelector(selectToken);

  const initData = {
    review: ereview.review,
    reviewTitle: ereview.reviewTitle,
    reviewType: ereview.reviewType,
  };
  const [data, setData] = useState<ApiType>(initData);

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setData({
      ...data,
      [name]: val,
    });
  };

  const handleSend = (e) => {
    e.preventDefault();
    GroupAPI.patchReview(data, ereview._id, token);
  };

  return (
    <form onSubmit={handleSend}>
      <div className="absolute bg-indigo-200 w-full left-0 top-0 h-80 rounded-t-2xl tracking-normal text-base leading-6 font-medium">
        {/* Title */}
        <div className="flex pl-16 mt-16 mb-8 tracking-normal">
          <img src="/icons/review.svg" width="37" />
          <div>
            <div className="mx-8 mr-56 w-full">
              <input
                className="w-full text-2xl leading-9 font-medium text-indigo-500 bg-indigo-100 px-2 rounded-xl border-2 border-solid border-indigo-500"
                value={data.reviewTitle}
                name="reviewTitle"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Teacher */}
        <div className="flex px-56 ml-0 m-3">
          <img className="my-2" width="20" src="/icons/teacher.svg" />
          <div className="mx-8 py-1 my-1">
            {ereview.classId.instructorId.instructorName}
          </div>
        </div>

        {/* course */}
        <div className="flex px-56 pb-3">
          <img className="my-1" width="20" src="/icons/course.svg" />
          <div className="mx-8 my-1">{ereview.classId.courseId.courseName}</div>
        </div>

        {/* class */}
        <div className="flex px-56">
          <img className="my-3" width="20" src="/icons/destination_group.svg" />
          <div className="px-8 my-3 w-11/12">{ereview.classId.className}</div>
        </div>

        {/* Review */}
        <div className="absolute top-72 my-3 flex mx-36 w-8/12 h-52 bg-white shadow-xl rounded-3xl z-10 text-center items-center m-auto py-5">
          <textarea
            className="absolute left-0 top-0 w-full bg-indigo-50 box-border rounded-3xl resize-none h-52 border-2 border-solid border-indigo-500"
            placeholder="Mô tả môn học tại đây"
            name="review"
            value={data.review}
            onChange={handleChange}
            cols={65}
          />
        </div>

        {/* SchoolYear */}
        <div className="px-44 mt-64 bg-white text-lg leading-6 font-medium text-indigo-500">
          {ereview.classId.academicId.schoolyear}, học kì{" "}
          {ereview.classId.academicId.semester}
        </div>

        {/* Avatar */}
        <div className="float-right mr-8 -mt-56 relative top-2">
          <img
            src={`${ereview.userId.photo}`}
            className="rounded-full"
            width="50"
            height="50"
          />
          <img className="ml-3 my-10" width="25" src="/icons/heart.svg" />

          <button type="submit">
            <img className="ml-3" width="24" src="/icons/iconSubmit.svg" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditReview;
