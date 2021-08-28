import PopUp from "components/class/PopUp/popup";
import React, { useState } from "react";
import ResourceShowModal from "./ResourceShowModal";

type AppProps = {
  aresource: any;
};
function ResourceItem({ aresource }: AppProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  if (!aresource.resourceName) {
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
            <p>{aresource.resourceType}</p>
          </div>
        </div>
        <div className="h-14 w-60 text-left justify-center items-center">
          <p className="text-lg leading-7 font-semibold">
            {aresource.resourceName}
          </p>
        </div>
        <div className="h-32 w-54 text leading-7">
          <div className="flex items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.875 7.875C8.91929 7.875 9.92081 7.46016 10.6592 6.72173C11.3977 5.98331 11.8125 4.98179 11.8125 3.9375C11.8125 2.89321 11.3977 1.89169 10.6592 1.15327C9.92081 0.414843 8.91929 0 7.875 0C6.83071 0 5.82919 0.414843 5.09077 1.15327C4.35234 1.89169 3.9375 2.89321 3.9375 3.9375C3.9375 4.98179 4.35234 5.98331 5.09077 6.72173C5.82919 7.46016 6.83071 7.875 7.875 7.875ZM10.5 3.9375C10.5 4.63369 10.2234 5.30137 9.73115 5.79366C9.23887 6.28594 8.57119 6.5625 7.875 6.5625C7.17881 6.5625 6.51113 6.28594 6.01884 5.79366C5.52656 5.30137 5.25 4.63369 5.25 3.9375C5.25 3.24131 5.52656 2.57363 6.01884 2.08134C6.51113 1.58906 7.17881 1.3125 7.875 1.3125C8.57119 1.3125 9.23887 1.58906 9.73115 2.08134C10.2234 2.57363 10.5 3.24131 10.5 3.9375ZM15.75 14.4375C15.75 15.75 14.4375 15.75 14.4375 15.75H1.3125C1.3125 15.75 0 15.75 0 14.4375C0 13.125 1.3125 9.1875 7.875 9.1875C14.4375 9.1875 15.75 13.125 15.75 14.4375ZM14.4375 14.4323C14.4362 14.1094 14.2354 13.1381 13.3455 12.2483C12.4897 11.3925 10.8793 10.5 7.875 10.5C4.86938 10.5 3.26025 11.3925 2.4045 12.2483C1.51463 13.1381 1.31512 14.1094 1.3125 14.4323H14.4375Z"
                fill="#6366F1"
              />
            </svg>
            <p className="ml-2.5 text-sm leading-7 font-normal">
              {aresource.classId.instructorId.instructorName}
            </p>
          </div>
          <div className="flex items-center">
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.07996 17.7778H16.862V2.22222C16.862 1.63285 16.6683 1.06762 16.3234 0.650874C15.9785 0.234126 15.5107 0 15.0229 0H3.06892C1.95996 0 0.310303 0.887778 0.310303 3.33333V18.8889C0.310303 21.3344 1.95996 22.2222 3.06892 22.2222H16.862V20H3.07996C2.65513 19.9867 2.14938 19.7833 2.14938 18.8889C2.14938 17.9944 2.65513 17.7911 3.07996 17.7778ZM4.908 4.44444H13.1839V6.66667H4.908V4.44444Z"
                fill="#6366F1"
              />
            </svg>
            <p className="ml-2.5 text-sm leading-7 font-normal">
              {aresource.classId.courseId.courseName}
            </p>
          </div>
          <div className="flex items-center text-top">
            <svg
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
                stroke="#6366F1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9C1 10.892 1.402 12.13 2.5 13.5L9 21L15.5 13.5C16.598 12.13 17 10.892 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1V1Z"
                stroke="#6366F1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="ml-2.5 text-sm md:leading-5 font-normal text-top">
              {aresource.classId.className}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end -mt-14">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.66664 10.8334L7.49997 18.3334L7.49997 14.1667C17.4608 14.1667 18.61 6.10171 18.3333 1.66671C17.915 3.90421 17.7208 7.50004 7.49997 7.50004L7.49997 3.33337L1.66664 10.8334Z"
              stroke="#6366F1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* <p className="ml-2.5 text-sm md:leading-5 font-normal text-top">
            {aresource?.classId?.className}
          </p> */}
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
