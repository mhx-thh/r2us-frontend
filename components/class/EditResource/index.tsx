import GroupAPI from "api/groupAPI";
import React, { useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import InputText from "../InputText";

const EditResource = function ({ eresource }: any) {
  const token = useAppSelector(selectToken);
  const initData = {
    resourceType: eresource.resourceType,
    resourceLink: eresource.resourceLink,
    resourceDescription: eresource.resourceDescription,
    status: eresource.status,
    isShare: eresource.isShare,
    classId: {
      className: eresource.classId.className,
      _id: eresource.classId._id,
      courseId: {
        _id: eresource.classId.courseId._id,
        courseName: eresource.classId.courseId.courseName,
        facultyId: {
          facultyName: eresource.classId.courseId.facultyId.facultyName,
          _id: eresource.classId.courseId.facultyId._id,
        },
      },
      instructorId: {
        _id: eresource.classId.instructorId._id,
        instructorName: eresource.classId.instructorId.instructorName,
        id: eresource.classId.instructorId.id,
      },
      academicId: {
        _id: eresource.classId.academicId._id,
        schoolyear: eresource.classId.academicId.schoolyear,
        semester: eresource.classId.academicId.semester,
      },
    },
    resourceName: eresource.resourceName,
    userId: {
      _id: eresource.userId._id,
      givenName: eresource.userId.givenName,
      familyName: eresource.userId.familyName,
      photo: eresource.userId.photo,
    },
    slug: eresource.slug,
  };
  const [data, setData] = useState(initData);
  const handleLink = (e) => {
    setData({
      ...data,
      resourceLink: e.target.value,
    });
  };
  const handleReview = (e) => {
    setData({
      ...data,
      resourceDescription: e.target.value,
    });
  };
  return (
    <div className="absolute text-base leading-6 font-medium bg-indigo-200 w-full left-0 top-0 h-80 rounded-t-2xl tracking-normal">
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
          {eresource.resourceName}
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

        <div className="mx-8 my-1">{eresource.classId.courseId.courseName}</div>
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
        <div
          className="ml-20 mt-5 w-full text-base font-medium "
          onChange={handleLink}
        >
          <InputText editable multiline={false} data={eresource.resourceLink} />
        </div>
      </div>
      {/* SchoolYear */}
      <div className="mx-44 mt-16 pt-8 bg-white text-lg leading-6  font-medium text-indigo-500">
        {eresource.classId.academicId.schoolyear}, học kì{" "}
        {eresource.classId.academicId.semester}
        {/* <InputText editable data="2020-2021, học kì 2" multiline={false} /> */}
      </div>
      {/* Review */}

      <div className="absolute px-2.5 ml-40 mt-4 " onChange={handleReview}>
        <InputText editable data={eresource.resourceDescription} multiline />{" "}
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
      </div>
      <button
        onClick={() => {
          console.log(data);
          GroupAPI.patchResource(data, eresource._id, token);
        }}
      >
        <svg
          width="125"
          height="41"
          viewBox="0 0 125 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="124"
            height="40"
            rx="9.5"
            fill="#EEF2FF"
            stroke="#6366F1"
          />
          <path
            d="M40.179 18.0994H42.8636C42.4162 15.2443 39.9446 13.2557 36.7273 13.2557C32.9205 13.2557 30.0653 16.054 30.0653 20.7415C30.0653 25.3438 32.7926 28.1989 36.8054 28.1989C40.4062 28.1989 42.9844 25.8835 42.9844 22.1335V20.3864H37.0824V22.446H40.4347C40.392 24.5199 39.0071 25.8338 36.8196 25.8338C34.3835 25.8338 32.7145 24.0085 32.7145 20.7131C32.7145 17.4389 34.4119 15.6207 36.7628 15.6207C38.517 15.6207 39.7102 16.5582 40.179 18.0994ZM56.3846 16.5298C56.3775 17.8935 56.2567 18.6179 54.9854 18.7884V17.0909H52.4144V23.4119C52.4144 25.0739 51.2283 25.8977 50.092 25.8977C48.8562 25.8977 48.0323 25.0241 48.0323 23.6392V17.0909H45.4613V24.0369C45.4613 26.6577 46.9528 28.142 49.0977 28.142C50.7312 28.142 51.8817 27.2827 52.3789 26.0611H52.4925V28H54.9854V20.0881C57.3008 19.9034 58.0323 18.696 58.0394 16.5298H56.3846ZM51.2283 15.5568V14.9034C51.9883 14.7898 52.734 14.3849 52.7269 13.483C52.734 12.304 51.4982 11.5795 49.1545 11.5795L49.0906 12.8509C49.9144 12.8509 50.5465 13.0213 50.5394 13.5327C50.5465 13.9304 50.1701 14.1506 49.1687 14.1932L49.2681 15.5568H51.2283ZM59.0124 28H61.5835V17.0909H59.0124V28ZM60.305 15.5426C61.1218 15.5426 61.7894 14.9176 61.7894 14.1506C61.7894 13.3764 61.1218 12.7514 60.305 12.7514C59.4812 12.7514 58.8136 13.3764 58.8136 14.1506C58.8136 14.9176 59.4812 15.5426 60.305 15.5426Z"
            fill="#6366F1"
          />
          <path
            d="M80.6938 20.9999L77.2988 12.2719C77.0628 11.6649 77.6548 11.0839 78.2408 11.2899L78.3338 11.3299L96.3338 20.3299C96.4496 20.3879 96.5485 20.475 96.6207 20.5826C96.6929 20.6902 96.7359 20.8147 96.7457 20.9439C96.7555 21.0731 96.7316 21.2027 96.6764 21.3199C96.6212 21.4372 96.5366 21.5381 96.4308 21.6129L96.3338 21.6709L78.3338 30.6709C77.7508 30.9619 77.1168 30.4269 77.2688 29.8239L77.2988 29.7279L80.6938 20.9999L77.2988 12.2719L80.6938 20.9999ZM79.4018 13.5399L82.0118 20.2499H88.6388C88.82 20.2499 88.9951 20.3155 89.1317 20.4347C89.2683 20.5538 89.3571 20.7183 89.3818 20.8979L89.3888 20.9999C89.3887 21.1813 89.323 21.3565 89.2036 21.4931C89.0843 21.6297 88.9195 21.7185 88.7398 21.7429L88.6388 21.7499H82.0098L79.4008 28.4599L94.3218 20.9999L79.4008 13.5399H79.4018Z"
            fill="#6366F1"
          />
        </svg>
      </button>
    </div>
  );
};

export default EditResource;
