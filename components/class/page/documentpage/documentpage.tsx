import React, { useState } from "react";

import DropdownResource from "components/class/DropDown/dropdownResource";
import ResourceItem from "components/Resource/ResourceItem";

import style from "./style.module.css";
import { ResourceType } from "lib/models";

type AppProps = {
  document: ResourceType;
  role: string;
};

const Document = function (props: AppProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={style.document}>
      {props.role === "provider" && (
        <div>
          <button className={style.document__button} onClick={handleOpen}>
            <img src="/icons/threedot.svg" />
          </button>

          <div className="absolute">
            {open === true ? (
              <DropdownResource close={setOpen} data={props.document} />
            ) : (
              <div></div>
            )}
          </div>
        </div>
      )}
      <div className={style.document__document}>
        <ResourceItem aresource={props.document} />
      </div>
    </div>
  );
};

const DocumentPage = function ({ document, id, role }: any) {
  return (
    <div className={style.page}>
      <div>
        {/* Button Share Resource */}
        <div className={style.buttonarea}>
          <div className={style.head}>
            <div className={style.head__text}>Chia sẻ tài liệu</div>
            <div className={style.head__image}>
              <img src="/icons/resource.svg" />
            </div>
          </div>
        </div>

        {/* Accepted Resource */}
        <div className={style.documentsection}>
          {document.result.map((data) =>
            data.classId.className === id.className &&
            data.classId.courseId.courseName === id.courseName &&
            data.classId.instructorId.instructorName === id.instructorName &&
            data.classId.academicId.academicName === id.academicName &&
            data.status === "accept" ? (
              <Document key={data.resourceName} document={data} role={role} />
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
              <Document key={data.resourceName} document={data} role={role} />
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
