import React, { useState } from "react";

import PopUp from "components/class/PopUp/popup";
import ResourceShowModal from "./ResourceShowModal";
import { ResourceType } from "lib/models";

type AppProps = {
  aresource: ResourceType;
};
function ResourceItem({ aresource }: AppProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  if (!aresource?.resourceName) {
    return <div>Resource mẫu</div>;
  }
  return (
    <div>
      <div
        onClick={handleOpen}
        className="bg-white transition duration-300 ease-in-out transform w-64 h-44 px-6 py-3.5 rounded-3xl border border-indigo-500 cursor-pointer relative hover:scale-110 shadow-lg"
      >
        <div className="absolute -top-4 right-3 rounded-3xl border border-indigo-500 bg-white">
          <div className="px-2 py-0.5 text-center">
            <p>
              {aresource?.resourceType === "Examination Paper"
                ? "Đề thi"
                : aresource?.resourceType === "Resources"
                ? "Tài liệu"
                : "Đề cương"}
            </p>
          </div>
        </div>

        <div className="h-14 w-60 text-left justify-center items-center">
          <p className="text-lg leading-7 font-semibold">
            {aresource?.resourceName}
          </p>
        </div>

        <div className="h-32 w-54 text leading-7">
          <div className="flex items-center">
            <img src="/icons/teacher.svg" width="18" />
            <p className="ml-2.5 text-sm leading-7 font-normal">
              {aresource?.classId?.instructorId?.instructorName}
            </p>
          </div>

          <div className="flex items-center">
            <img src="/icons/course.svg" width="18" />
            <p className="ml-2.5 text-sm leading-7 font-normal">
              {aresource.classId.courseId?.courseName}
            </p>
          </div>

          <div className="flex items-center text-top">
            <img src="/icons/destination_group.svg" width="18" />
            <p className="ml-2.5 text-sm md:leading-5 font-normal text-top">
              {aresource?.classId?.className}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end -mt-14">
          <img src="/icons/share_Popup.svg" width="23" />
        </div>
      </div>
      <div>
        {open === true && (
          <PopUp closepopup={setOpen}>
            <ResourceShowModal sresource={aresource} />
          </PopUp>
        )}
      </div>
    </div>
  );
}
export default ResourceItem;
