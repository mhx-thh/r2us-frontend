import React from "react";

const ShowReview = function (initData: any) {
  return (
    <div className="absolute bg-indigo-200 w-full left-0 top-0 h-80 rounded-t-2xl tracking-normal">
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
          Cảm nhận - {initData.classId.courseId.courseName}
        </div>
      </div>
      {/* Teacher */}
      <div className="flex px-36 ml-11 my-3 text-base leading-6 font-medium">
        <svg
          className="my-2"
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M8.5 8.5C9.54429 8.5 10.5458 8.08516 11.2842 7.34673C12.0227 6.60831 12.4375 5.60679 12.4375 4.5625C12.4375 3.51821 12.0227 2.51669 11.2842 1.77827C10.5458 1.03984 9.54429 0.625 8.5 0.625C7.45571 0.625 6.45419 1.03984 5.71577 1.77827C4.97734 2.51669 4.5625 3.51821 4.5625 4.5625C4.5625 5.60679 4.97734 6.60831 5.71577 7.34673C6.45419 8.08516 7.45571 8.5 8.5 8.5ZM11.125 4.5625C11.125 5.25869 10.8484 5.92637 10.3562 6.41866C9.86387 6.91094 9.19619 7.1875 8.5 7.1875C7.80381 7.1875 7.13613 6.91094 6.64384 6.41866C6.15156 5.92637 5.875 5.25869 5.875 4.5625C5.875 3.86631 6.15156 3.19863 6.64384 2.70634C7.13613 2.21406 7.80381 1.9375 8.5 1.9375C9.19619 1.9375 9.86387 2.21406 10.3562 2.70634C10.8484 3.19863 11.125 3.86631 11.125 4.5625ZM16.375 15.0625C16.375 16.375 15.0625 16.375 15.0625 16.375H1.9375C1.9375 16.375 0.625 16.375 0.625 15.0625C0.625 13.75 1.9375 9.8125 8.5 9.8125C15.0625 9.8125 16.375 13.75 16.375 15.0625ZM15.0625 15.0573C15.0612 14.7344 14.8604 13.7631 13.9705 12.8733C13.1147 12.0175 11.5043 11.125 8.5 11.125C5.49438 11.125 3.88525 12.0175 3.0295 12.8733C2.13963 13.7631 1.94012 14.7344 1.9375 15.0573H15.0625Z"
            fill="#6366F1"
          />
        </svg>
        <div className="mx-8 my-1 ">
          {initData.classId.instructorId.instructorName}
        </div>
      </div>
      {/* course */}
      <div className="flex px-36 mx-11 my-5">
        <svg
          className="my-1 "
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="23"
          viewBox="0 0 20 23"
          fill="none"
        >
          <path
            d="M3.34667 17.7778H20V2.22222C20 1.63285 19.7659 1.06762 19.3491 0.650874C18.9324 0.234126 18.3671 0 17.7778 0H3.33333C1.99333 0 0 0.887778 0 3.33333V18.8889C0 21.3344 1.99333 22.2222 3.33333 22.2222H20V20H3.34667C2.83333 19.9867 2.22222 19.7833 2.22222 18.8889C2.22222 17.9944 2.83333 17.7911 3.34667 17.7778ZM5.55556 4.44444H15.5556V6.66667H5.55556V4.44444Z"
            fill="#6366F1"
          />
        </svg>
        <div className="mx-8 text-base leading-6 font-medium">
          {initData.classId.className}
        </div>
      </div>
      {/* class */}
      <div className="flex px-36 mx-11">
        <svg
          className="my-1"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="22"
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
        <div className="mx-9 text-base leading-6 font-medium w-11/12">
          {initData.classId.courseId.courseName}
        </div>
        <div className="">
          <svg
            width="29"
            height="28"
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
      {/* Review */}
      <div className="absolute top-72 my-3 flex mx-36 w-8/12 h-52 bg-white shadow-xl rounded-3xl z-10 text-center">
        <div className="m-3 overflow-auto">{initData.review}</div>
      </div>
      {/* SchoolYear */}
      <div className="px-44 mt-64 bg-white text-lg leading-6 font-medium text-indigo-500">
        <p>
          {initData.classId.academicId.schoolyear} - học kì{" "}
          {initData.classId.academicId.semester}
        </p>
      </div>
      {/* Avatar */}
      <div className="float-right mr-8 -mt-52">
        <img
          src={`${initData.userId.photo}`}
          width="50"
          className="rounded-3xl border-2 border-blue-600 border-solid"
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
      </div>
    </div>
  );
};

export default ShowReview;
