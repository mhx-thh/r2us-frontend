import CreateResource from "components/class/CreateResource";
import DropdownResource from "components/class/DropDown/dropdownResource";
import PopUp from "components/class/PopUp/popup";
import ResourceItem from "components/Resource/ResourceItem";
import React, { useState } from "react";
import style from "./style.module.css";

// type AppProps = {
//   resourceType: string;
//   resourceLink: string;
//   status: string;
//   _id: string;
//   resourceName: string;
//   userId: {
//     _id: string;
//     givenName: string;
//     familyName: string;
//     photo: string;
//   };
//   classId: {
//     className: string;
//     _id: string;
//     instructorId: {
//       _id: string;
//       instructorName: string;
//       id: string;
//     };
//     academicId: {
//       schoolyear: string;
//       semester: number;
//     };
//     courseId: {
//       courseName: string;
//       _id: string;
//       facultyId: {
//         facultyName: string;
//         _id: string;
//       };
//     };
//   };
//   createdAt: string;
//   updatedAt: string;
//   slug: string;
//   __v: number;
//   id: string;
// };

const Document = function (document: any) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  console.log(document.document);
  return (
    <div className={style.document}>
      <button className={style.document__button} onClick={handleOpen}>
        <svg
          width="15"
          height="4"
          viewBox="0 0 15 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.99396 3.11364C2.69709 3.11364 3.27237 2.53835 3.27237 1.83523C3.27237 1.1321 2.69709 0.556818 1.99396 0.556818C1.29084 0.556818 0.715554 1.1321 0.715554 1.83523C0.715554 2.53835 1.29084 3.11364 1.99396 3.11364ZM7.50178 3.11364C8.2049 3.11364 8.78018 2.53835 8.78018 1.83523C8.78018 1.1321 8.2049 0.556818 7.50178 0.556818C6.79865 0.556818 6.22337 1.1321 6.22337 1.83523C6.22337 2.53835 6.79865 3.11364 7.50178 3.11364ZM13.0096 3.11364C13.7127 3.11364 14.288 2.53835 14.288 1.83523C14.288 1.1321 13.7127 0.556818 13.0096 0.556818C12.3065 0.556818 11.7312 1.1321 11.7312 1.83523C11.7312 2.53835 12.3065 3.11364 13.0096 3.11364Z"
            fill="#6366F1"
          />
        </svg>
      </button>
      <div className={style.document__document}>
        <ResourceItem aresource={document.document} />
      </div>
      <div className="absolute">
        {open === true && (
          <DropdownResource close={setOpen} data={document.document} />
        )}
      </div>
    </div>
  );
};

const DocumentPage = function ({ document, id }: any) {
  const [addDoc, setAddDoc] = useState(0);
  const ClickpopupDoc = () => {
    setAddDoc(1);
  };
  const user = "admin";

  const [newClass, setNewClass] = useState([]);
  const [create, setCreate] = useState(false);
  const handleClick = () => {
    setCreate(true);
  };
  return (
    <div className={style.page}>
      <div>
        {/* "Chia sẻ tài liệu button" */}
        <div className={style.buttonarea}>
          <button className={style.button} onClick={handleClick}>
            <div className={style.button__text}>Chia sẻ tài liệu</div>
            <div className={style.button__image}>
              <svg
                width="27"
                height="23"
                viewBox="0 0 27 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.60714 0.5H24.8929L26.75 2.35714V20.9286L24.8929 22.7857H2.60714L0.75 20.9286V2.35714L2.60714 0.5ZM2.60714 20.9286H24.8929V2.35714H2.60714V20.9286ZM23.0357 4.21429H4.46429V9.78572H23.0357V4.21429ZM21.1786 7.92857H6.32143V6.07143H21.1786V7.92857ZM15.6071 19.0714H23.0357V11.6429H15.6071V19.0714ZM17.4643 13.5H21.1786V17.2143H17.4643V13.5ZM11.8929 11.6429H4.46429V13.5H11.8929V11.6429ZM4.46429 17.2143H11.8929V19.0714H4.46429V17.2143Z"
                  fill="#6366F1"
                />
              </svg>
            </div>
          </button>
        </div>
        {create === true && (
          <PopUp closepopup={setCreate}>
            <CreateResource />
          </PopUp>
        )}
        {/* Document */}
        <div className={style.documentsection}>
          {document.result.map((data) =>
            data.classId.className === id.className &&
            data.classId.courseId.courseName === id.courseName &&
            data.classId.instructorId.instructorName === id.instructorName &&
            data.classId.academicId.academicName === id.academicName ? (
              <Document key={data.resourceName} document={data} />
            ) : (
              <div></div>
            )
          )}
        </div>

        {/* Request */}
        <div className={style.prebox}>
          <div className={style.box}>
            <div className={style.box__text}>Yêu cầu</div>
          </div>
        </div>

        {/* Request document */}
        <div className={style.documentsection}>{/* <Document /> */}</div>
      </div>
    </div>
  );
};

export default DocumentPage;
