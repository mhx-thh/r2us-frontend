import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

type AppProps = {
  resourceType: string;
  resourceLink: string;
  status: string;
  _id: string;
  resourceName: string;
  userId: {
    _id: string;
    givenName: string;
    familyName: string;
    photo: string;
  };
  classId: {
    className: string;
    _id: string;
    instructorId: {
      _id: string;
      instructorName: string;
      id: string;
    };
    academicId: {
      schoolyear: string;
      semester: number;
    };
    courseId: {
      courseName: string;
      _id: string;
      facultyId: {
        facultyName: string;
        _id: string;
      };
    };
  };
  createdAt: string;
  updatedAt: string;
  slug: string;
  __v: number;
  id: string;
};

type Api = {
  data: {
    document: AppProps;
  };
};

const ShowResource = function (initData: Api) {
  const Data = initData.data.document;
  return (
    <div className="absolute bg-indigo-200 w-full left-0 top-0 h-80 rounded-t-2xl tracking-normal  text-base leading-6 font-medium">
      {/* Title */}
      <div className="flex px-16 mt-16 mb-8 tracking-normal">
        <svg
          className="my-1"
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="23"
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
        <div className="mx-4 text-2xl font-medium text-indigo-500 ">
          {" "}
          Tài liệu - {Data.classId.courseId.courseName}
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
        <div className="px-8 py-1 my-1">
          {Data.classId.instructorId.instructorName}
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
        <div className="px-8 my-1">{Data.classId.courseId.courseName}</div>
      </div>
      {/* class */}
      <div className="flex px-56">
        <svg
          className="my-3 ml-0.5"
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
        <div className="px-8 my-3 w-11/12">{Data.classId.className}</div>
        <div className=" pt-2">
          <svg
            width="30"
            height="30"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.09 17.59L14.5 19L19.5 14L14.5 9L13.09 10.41L15.67 13H6V15H15.67L13.09 17.59ZM22 5H8C7.46957 5 6.96086 5.21071 6.58579 5.58579C6.21071 5.96086 6 6.46957 6 7V11H8V7H22V21H8V17H6V21C6 21.5304 6.21071 22.0391 6.58579 22.4142C6.96086 22.7893 7.46957 23 8 23H22C23.1 23 24 22.1 24 21V7C24 5.9 23.1 5 22 5Z"
              fill="#6366F1"
            />
          </svg>
        </div>
      </div>
      {/* Link */}
      <div className="absolute top-72 my-3 flex mx-36 w-8/12 h-12 bg-white shadow-xl rounded-3xl items-center content-center self-center z-10 ">
        <div className="ml-8 mr-20 truncate w-11/12 text-base font-medium ">
          {Data.resourceLink}
        </div>
        <CopyToClipboard text={Data.resourceLink}>
          <button>
            <svg
              className="mr-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.95989 14.25C8.22587 14.2501 7.50832 14.0325 6.89798 13.6247C6.28765 13.2169 5.81195 12.6373 5.53104 11.9592C5.25013 11.2811 5.17664 10.5348 5.31986 9.81493C5.46308 9.09502 5.81658 8.43375 6.33564 7.91476L10.1651 4.08676C10.8611 3.39076 11.8051 2.99976 12.7894 2.99976C13.7737 2.99976 14.7176 3.39076 15.4136 4.08676C16.1096 4.78275 16.5006 5.72672 16.5006 6.71101C16.5006 7.69529 16.1096 8.63926 15.4136 9.33526L14.9989 9.74926L13.9376 8.68951L14.3554 8.27176C14.7686 7.85662 15.0003 7.29459 14.9997 6.70889C14.9991 6.12318 14.7664 5.5616 14.3524 5.14726C13.9311 4.74517 13.371 4.52083 12.7886 4.52083C12.2062 4.52083 11.6462 4.74517 11.2249 5.14726L7.39689 8.97526C7.19139 9.18053 7.02836 9.42429 6.91714 9.69261C6.80591 9.96093 6.74866 10.2485 6.74866 10.539C6.74866 10.8295 6.80591 11.1171 6.91714 11.3854C7.02836 11.6537 7.19139 11.8975 7.39689 12.1028C7.81822 12.5048 8.37824 12.7292 8.96064 12.7292C9.54304 12.7292 10.1031 12.5048 10.5244 12.1028L11.5849 13.1633C11.2409 13.5089 10.8318 13.783 10.3812 13.9695C9.93065 14.156 9.44755 14.2514 8.95989 14.25Z"
                fill="#6366F1"
              />
              <path
                d="M14.9599 12.75C14.2259 12.7501 13.5083 12.5325 12.898 12.1247C12.2876 11.7169 11.8119 11.1373 11.531 10.4592C11.2501 9.78105 11.1766 9.03484 11.3199 8.31493C11.4631 7.59502 11.8166 6.93375 12.3356 6.41476L12.7504 6.00076L13.8109 7.06201L13.3969 7.47601C12.9823 7.89065 12.7493 8.45301 12.7493 9.03938C12.7493 9.62576 12.9823 10.1881 13.3969 10.6028C13.8182 11.0048 14.3782 11.2292 14.9606 11.2292C15.543 11.2292 16.1031 11.0048 16.5244 10.6028L20.3531 6.77401C20.767 6.3591 20.9994 5.79701 20.9994 5.21101C20.9994 4.625 20.767 4.06291 20.3531 3.64801C19.9318 3.24592 19.3718 3.02158 18.7894 3.02158C18.207 3.02158 17.647 3.24592 17.2256 3.64801L16.1651 2.58676C16.8611 1.89076 17.8051 1.49976 18.7894 1.49976C19.7737 1.49976 20.7176 1.89076 21.4136 2.58676C22.1096 3.28275 22.5006 4.22672 22.5006 5.21101C22.5006 6.19529 22.1096 7.13926 21.4136 7.83526L17.5856 11.6625C17.2417 12.0083 16.8326 12.2824 16.382 12.469C15.9314 12.6557 15.4483 12.7512 14.9606 12.75H14.9599Z"
                fill="#6366F1"
              />
              <path
                d="M18 22.5H3C2.6023 22.4996 2.221 22.3414 1.93978 22.0602C1.65856 21.779 1.5004 21.3977 1.5 21V6C1.5004 5.6023 1.65856 5.221 1.93978 4.93978C2.221 4.65856 2.6023 4.5004 3 4.5H6V6H3V21H18V13.5H19.5V21C19.4996 21.3977 19.3414 21.779 19.0602 22.0602C18.779 22.3414 18.3977 22.4996 18 22.5Z"
                fill="#6366F1"
              />
            </svg>
          </button>
        </CopyToClipboard>
      </div>
      {/* SchoolYear */}
      <div className="mx-44 mt-16 bg-white text-lg leading-6 font-medium text-indigo-500 m-10 py-10">
        {Data.classId.academicId.schoolyear}, học kì{" "}
        {Data.classId.academicId.semester}
      </div>
      {/* Review */}
      <div className="ml-44 -mt-16 my-3 flex mx-36 w-7/12 h-40">
        {/* <textarea
          className=" text-base leading-6 font-medium resize-none"
          cols={67}
          value={`${Data.resourceName}`}
          rows={6}
        /> */}
        <div className="m-3 overflow-auto">{Data.resourceName}</div>
      </div>
      {/* Avatar */}
      <div className="float-right mr-8 -mt-60">
        <img src={`${Data.userId.photo}`} width="50" />
        <svg
          className="ml-3 my-10"
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
          className="my-8 ml-3"
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
      </div>
    </div>
  );
};

export default ShowResource;
