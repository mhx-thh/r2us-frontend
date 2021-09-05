import React from "react";
import Link from "next/link";
import { ReviewType } from "lib/models";

type AppProps = {
  sreview: ReviewType;
};

function ReviewShowModal({ sreview }: AppProps) {
  const url = `/group/${sreview.classId.slug}`;
  return (
    <div className="absolute bg-indigo-200 w-full left-0 top-0 h-80 rounded-t-2xl tracking-normal text-base leading-6 font-medium">
      {/* Title */}
      <div className="flex pl-16 mt-16 mb-9 tracking-normal">
        <img src="/icons/review.svg" width="37" />
        <div className="mx-6 text-3xl leading-9 font-medium text-indigo-500">
          {sreview.reviewTitle}
        </div>
      </div>
      {/* Teacher */}
      <div className="flex px-56 ml-0 m-3">
        <img className="my-2" width="20" src="/icons/teacher.svg" />
        <div className="px-8 py-1 my-1">
          {sreview.classId.instructorId.instructorName}
        </div>
      </div>
      {/* course */}
      <div className="flex px-56 pb-3">
        <img className="my-1" width="20" src="/icons/course.svg" />
        <div className="mx-8 my-1">{sreview.classId.courseId.courseName}</div>
      </div>
      {/* class */}
      <div className="flex px-56">
        <img className="my-3" width="20" src="/icons/destination_group.svg" />
        <div className="px-8 my-3 w-11/12">{sreview.classId.className}</div>
        <Link href={url}>
          <a>
            <img className="pt-2" src="/icons/gotoGroup.svg" />
          </a>
        </Link>
      </div>
      {/* Review */}
      <div className="absolute top-72 my-3 flex mx-36 w-8/12 h-52 bg-white shadow-xl rounded-3xl z-10 text-center text-base leading-6 font-medium">
        <div className="m-3 overflow-auto">{sreview.review}</div>
      </div>
      {/* SchoolYear */}
      <div className="px-44 mt-64 bg-white text-lg leading-6 font-medium text-indigo-500">
        {sreview.classId.academicId.schoolyear}, học kì{" "}
        {sreview.classId.academicId.semester}
      </div>
      {/* Avatar */}
      <div className="float-right mr-8 -mt-52 relative -top-2">
        <img
          src={`${sreview.userId.photo}`}
          width="50"
          className="rounded-full"
        />
        <img className="ml-3 my-10" width="25" src="/icons/heart.svg" />
      </div>
    </div>
  );
}

export default ReviewShowModal;
