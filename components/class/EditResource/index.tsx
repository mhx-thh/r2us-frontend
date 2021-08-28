import GroupAPI from "api/groupAPI";
import React, { useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

type App = {
  resourceType: string;
  resourceLink: string;
  resourceDescription: string;
  resourceName: string;
};
const EditResource = function ({ eresource }: any) {
  const token = useAppSelector(selectToken);

  const initData = {
    resourceType: eresource.resourceType,
    resourceLink: eresource.resourceLink,
    resourceDescription: eresource.resourceDescription,
    resourceName: eresource.resourceName,
  };
  const [data, setData] = useState<App>(initData);
  const handleChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    setData({
      ...data,
      [name]: val,
    });
  };

  const handleSend = (e) => {
    e.preventDefault();
    GroupAPI.patchResource(data, eresource._id, token);
  };

  return (
    <form onSubmit={handleSend}>
      <div className="absolute text-base leading-6 font-medium bg-indigo-200 w-full left-0 top-0 h-80 rounded-t-2xl tracking-normal">
        {/* Title */}
        <div className="flex px-16 mt-16 mb-8 tracking-normal">
          <svg
            className="my-1"
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 27 23"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.60714 0.5H24.8929L26.75 2.35714V20.9286L24.8929 22.7857H2.60714L0.75 20.9286V2.35714L2.60714 0.5ZM2.60714 20.9286H24.8929V2.35714H2.60714V20.9286ZM23.0357 4.21429H4.46429V9.78572H23.0357V4.21429ZM21.1786 7.92857H6.32143V6.07143H21.1786V7.92857ZM15.6071 19.0714H23.0357V11.6429H15.6071V19.0714ZM17.4643 13.5H21.1786V17.2143H17.4643V13.5ZM11.8929 11.6429H4.46429V13.5H11.8929V11.6429ZM4.46429 17.2143H11.8929V19.0714H4.46429V17.2143Z"
              fill="#6366F1"
            />
          </svg>
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
          <svg
            className="my-2"
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M8.5 8.5C9.54429 8.5 10.5458 8.08516 11.2842 7.34673C12.0227 6.60831 12.4375 5.60679 12.4375 4.5625C12.4375 3.51821 12.0227 2.51669 11.2842 1.77827C10.5458 1.03984 9.54429 0.625 8.5 0.625C7.45571 0.625 6.45419 1.03984 5.71577 1.77827C4.97734 2.51669 4.5625 3.51821 4.5625 4.5625C4.5625 5.60679 4.97734 6.60831 5.71577 7.34673C6.45419 8.08516 7.45571 8.5 8.5 8.5ZM11.125 4.5625C11.125 5.25869 10.8484 5.92637 10.3562 6.41866C9.86387 6.91094 9.19619 7.1875 8.5 7.1875C7.80381 7.1875 7.13613 6.91094 6.64384 6.41866C6.15156 5.92637 5.875 5.25869 5.875 4.5625C5.875 3.86631 6.15156 3.19863 6.64384 2.70634C7.13613 2.21406 7.80381 1.9375 8.5 1.9375C9.19619 1.9375 9.86387 2.21406 10.3562 2.70634C10.8484 3.19863 11.125 3.86631 11.125 4.5625ZM16.375 15.0625C16.375 16.375 15.0625 16.375 15.0625 16.375H1.9375C1.9375 16.375 0.625 16.375 0.625 15.0625C0.625 13.75 1.9375 9.8125 8.5 9.8125C15.0625 9.8125 16.375 13.75 16.375 15.0625ZM15.0625 15.0573C15.0612 14.7344 14.8604 13.7631 13.9705 12.8733C13.1147 12.0175 11.5043 11.125 8.5 11.125C5.49438 11.125 3.88525 12.0175 3.0295 12.8733C2.13963 13.7631 1.94012 14.7344 1.9375 15.0573H15.0625Z"
              fill="#6366F1"
            />
          </svg>

          <div className="mx-8 py-1 my-1">
            {eresource.classId.instructorId.instructorName}
          </div>
        </div>
        {/* course */}
        <div className="flex px-56 pb-3">
          <svg
            className="my-1"
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 20 23"
            fill="none"
          >
            <path
              d="M3.34667 17.7778H20V2.22222C20 1.63285 19.7659 1.06762 19.3491 0.650874C18.9324 0.234126 18.3671 0 17.7778 0H3.33333C1.99333 0 0 0.887778 0 3.33333V18.8889C0 21.3344 1.99333 22.2222 3.33333 22.2222H20V20H3.34667C2.83333 19.9867 2.22222 19.7833 2.22222 18.8889C2.22222 17.9944 2.83333 17.7911 3.34667 17.7778ZM5.55556 4.44444H15.5556V6.66667H5.55556V4.44444Z"
              fill="#6366F1"
            />
          </svg>

          <div className="mx-8 my-1">
            {eresource.classId.courseId.courseName}
          </div>
        </div>
        {/* class */}
        <div className="flex px-56">
          <svg
            className="my-3"
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 18 22"
            fill="none"
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
          <svg
            className="ml-4 my-10"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="24"
            viewBox="0 0 18 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.9997 6.61498C11.0802 4.47748 16.2807 8.21998 8.9997 13.0305C1.7187 8.21998 6.9192 4.47898 8.9997 6.61798V6.61498Z"
              fill="#6366F1"
            />
            <path
              d="M0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0L15 0C15.7956 0 16.5587 0.316071 17.1213 0.87868C17.6839 1.44129 18 2.20435 18 3V23.25C17.9999 23.3857 17.9631 23.5188 17.8933 23.6351C17.8236 23.7515 17.7236 23.8468 17.604 23.9108C17.4844 23.9748 17.3497 24.0052 17.2142 23.9988C17.0787 23.9923 16.9474 23.9492 16.8345 23.874L9 19.6515L1.1655 23.874C1.05256 23.9492 0.921345 23.9923 0.785837 23.9988C0.650329 24.0052 0.5156 23.9748 0.395999 23.9108C0.276399 23.8468 0.176406 23.7515 0.106671 23.6351C0.036936 23.5188 7.00806e-05 23.3857 0 23.25V3ZM3 1.5C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V21.849L8.5845 18.126C8.70759 18.0441 8.85215 18.0004 9 18.0004C9.14785 18.0004 9.29241 18.0441 9.4155 18.126L16.5 21.849V3C16.5 2.60218 16.342 2.22064 16.0607 1.93934C15.7794 1.65804 15.3978 1.5 15 1.5H3Z"
              fill="#6366F1"
            />
          </svg>
          <svg
            className="ml-4 my-10"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.3333 9.16663L12.4999 1.66663V5.83329C2.53909 5.83329 1.38992 13.8983 1.66659 18.3333C2.08492 16.0958 2.27909 12.5 12.4999 12.5V16.6666L18.3333 9.16663Z"
              stroke="#6366F1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <button type="submit">
            <svg
              className="ml-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.69377 11.9999L2.29877 3.27189C2.06277 2.66489 2.65477 2.08389 3.24077 2.28989L3.33377 2.32989L21.3338 11.3299C21.4496 11.3879 21.5485 11.475 21.6207 11.5826C21.6929 11.6902 21.7359 11.8147 21.7457 11.9439C21.7555 12.0731 21.7316 12.2027 21.6764 12.3199C21.6212 12.4372 21.5366 12.5381 21.4308 12.6129L21.3338 12.6709L3.33377 21.6709C2.75077 21.9619 2.11677 21.4269 2.26877 20.8239L2.29877 20.7279L5.69377 11.9999L2.29877 3.27189L5.69377 11.9999ZM4.40177 4.53989L7.01177 11.2499H13.6388C13.82 11.2499 13.9951 11.3155 14.1317 11.4347C14.2683 11.5538 14.3571 11.7183 14.3818 11.8979L14.3888 11.9999C14.3887 12.1813 14.323 12.3565 14.2036 12.4931C14.0843 12.6297 13.9195 12.7185 13.7398 12.7429L13.6388 12.7499H7.00977L4.40077 19.4599L19.3218 11.9999L4.40077 4.53989H4.40177Z"
                fill="#6366F1"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditResource;
