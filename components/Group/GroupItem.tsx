import React from "react";
import { classInfo } from "lib/models";
import Link from "next/link";

type AppProps = {
  agroup: classInfo;
};

function GroupItem({ agroup }: AppProps) {
  const classSlugUrl = `/group/${agroup.slug}`;

  return (
    <Link href={classSlugUrl}>
      <div className="py-0 flex justify-around transition duration-300 ease-in-out transform cursor-pointer hover:scale-110">
        <div className="relative py-0 h-60 w-72 mb-12">
          {/* thông tin */}
          <div className="absoulute flex grid grid-rows-4 mt-14 gap-y-px bottom-0 pt-14 right bg-white shadow-lg w-64 h-52 pb-3 rounded-xl text-left tracking-normal">
            {/* Khoa */}
            <div className="p-0 flex justify-start pl-7">
              <img src="/icons/facuty.svg" width="20" />
              <p className="pl-2 pt-1.5 text-sm leading-5 font-normal">
                {agroup.courseId?.facultyId.facultyName}
              </p>
            </div>

            {/* Môn học */}
            <div className="p-0 flex justify-start pl-7">
              <img src="/icons/course.svg" width="20" />
              <p className="pl-2 pt-1.5 text-sm leading-5 font-normal">
                {agroup.courseId?.courseName}
              </p>
            </div>

            {/* Giáo viên */}
            <div className="p-0 flex justify-start pl-7">
              <img src="/icons/teacher.svg" width="20" />
              <p className="pl-2 pt-1.5 text-sm leading-5 font-normal">
                {agroup.instructorId.instructorName}
              </p>
            </div>

            {/* Năm học */}
            <div className="p-0 flex justify-start pl-7">
              <img src="/icons/calender.svg" width="20" />
              <p className="pl-2 pt-1.5 text-sm leading-5 font-normal">
                {agroup.academicId.schoolyear}
              </p>
            </div>
          </div>

          {/* Tên lớp học */}
          <div className="absolute flex justify-center items-center top-10 -left-5 w-64 h-16 bg-indigo-500 rounded-xl text-left tracking-normal pl-3">
            <p className="text-lg leading-7 font-semibold text-white">
              {agroup.className}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GroupItem;
