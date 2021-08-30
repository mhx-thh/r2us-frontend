import React, { useState } from "react";

import DropdownResource from "components/class/DropDown/dropdownResource";
import ResourceItem from "components/Resource/ResourceItem";
import style from "./style.module.css";

type ResourceType = {
  resourceType: string;
  resourceDescription: string;
  status: string;
  isShare: string;
  _id: string;
  resourceLink: string;
  classId: {
    className: string;
    _id: string;
    courseId: {
      _id: string;
      courseName: string;
      facultyId: {
        facultyName: string;
        _id: string;
      };
    };
    instructorId: {
      _id: string;
      instructorName: string;
      id: string;
    };
    academicId: {
      _id: string;
      schoolyear: string;
      semester: string;
    };
  };
  resourceName: string;
  userId: {
    _id: string;
    givenName: string;
    familyName: string;
    photo: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: string;
  id: string;
};

type AppProps = {
  document: ResourceType;
};

const Document = function (props: AppProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={style.document}>
      <button className={style.document__button} onClick={handleOpen}>
        <img src="/icons/threedot.svg" />
      </button>

      <div className={style.document__document}>
        <ResourceItem aresource={props.document} />
      </div>

      <div className="absolute">
        {open === true ? (
          <DropdownResource close={setOpen} data={props.document} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

const DocumentPage = function ({ document, id }: any) {
  return (
    <div className={style.page}>
      <div>
        {/* Button Share Resource */}
        <div className={style.buttonarea}>
          <button className={style.button}>
            <div className={style.button__text}>Chia sẻ tài liệu</div>
            <div className={style.button__image}>
              <img src="/icons/resource.svg" />
            </div>
          </button>
        </div>

        {/* Accepted Resource */}
        <div className={style.documentsection}>
          {document.result.map((data) =>
            data.classId.className === id.className &&
            data.classId.courseId.courseName === id.courseName &&
            data.classId.instructorId.instructorName === id.instructorName &&
            data.classId.academicId.academicName === id.academicName &&
            data.status === "accept" ? (
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

        {/* Request Resource */}
        <div className={style.documentsection}>
          {document.result.map((data) =>
            data.classId.className === id.className &&
            data.classId.courseId.courseName === id.courseName &&
            data.classId.instructorId.instructorName === id.instructorName &&
            data.classId.academicId.academicName === id.academicName &&
            data.status === "pending" ? (
              <Document key={data.resourceName} document={data} />
            ) : (
              <div></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
