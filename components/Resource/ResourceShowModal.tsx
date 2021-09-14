import { ResourceType } from "lib/models";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Link from "next/link";

type AppProps = {
  sresource: ResourceType;
};

function ResourceShowModal({ sresource }: AppProps) {
  const url = `/group/${sresource?.classId?.slug}`;
  const [copy, setCopy] = useState(false);

  const ClickCopied = async () => {
    setCopy(!copy);
    setTimeout(function () {
      setCopy(!!copy);
    }, 5000);
  };

  return (
    <div className="absolute bg-indigo-200 w-full left-0 top-0 h-80 rounded-t-2xl tracking-normal  text-base leading-6 font-medium">
      {/* Title */}
      <div className="flex pl-16 mt-16 mb-9 tracking-normal">
        <img src="/icons/resource.svg" width="37" />
        <div className="mx-6 text-2xl leading-9 font-medium text-indigo-500">
          {sresource?.resourceName}
        </div>
      </div>

      {/* Teacher */}
      <div className="flex pl-56 ml-0 m-3 pr-20">
        <img className="my-2" width="20" src="/icons/teacher.svg" />
        <div className="pl-8 py-1 my-1">
          {sresource?.classId?.instructorId?.instructorName}
        </div>
      </div>

      {/* course */}
      <div className="flex pl-56 pb-3 pr-20">
        <img className="my-1" width="20" src="/icons/course.svg" />
        <div className="ml-8 my-1">{sresource?.classId?.courseId?.courseName}</div>
      </div>

      {/* class */}
      <div className="flex pl-56 pr-20">
        <img className="my-3" width="20" src="/icons/destination_group.svg" />
        <div className="pl-8 my-3">{sresource?.classId?.className}</div>
        <Link href={url}>
          <a>
            <img className="px-10 pt-2.5" src="/icons/gotoGroup.svg" />
          </a>
        </Link>
      </div>

      {/* Link */}
      <div className="absolute top-72 my-3 flex mx-36 w-8/12 h-12 bg-white shadow-xl rounded-3xl items-center content-center self-center z-10 ">
        <div className="ml-8 mr-20 truncate w-11/12 text-base font-medium ">
          {sresource?.resourceLink}
        </div>
        <CopyToClipboard text={sresource?.resourceLink}>
          <button onClick={ClickCopied}>
            <img className="mr-8" src="/icons/copyLink.svg" />
            {copy === true && (
              <div className="absolute right-16 bottom-3">Copied</div>
            )}
          </button>
        </CopyToClipboard>
      </div>

      {/* SchoolYear */}
      <div className="mx-44 mt-16 bg-white text-lg leading-6 font-medium text-indigo-500 m-10 py-10">
        {sresource?.classId?.academicId?.schoolyear}, học kì{" "}
        {sresource?.classId?.academicId?.semester}
      </div>

      {/* Description */}
      <div className="ml-40 px-1 -mt-16 my-3 flex mx-36 w-7/12 h-40">
        <div className="mx-3 overflow-auto ">
          {sresource?.resourceDescription}
        </div>
      </div>

      {/* Avatar */}
      <div className="float-right mr-8 -mt-60 relative -top-2">
        <img
          src={`${sresource?.userId?.photo}`}
          width="50"
          className="rounded-full"
        />
        <img className="ml-3 my-10" width="25" src="/icons/heart.svg" />
        <img className="ml-4 my-10" width="20" src="/icons/share_2.svg" />
      </div>
    </div>
  );
}

export default ResourceShowModal;
