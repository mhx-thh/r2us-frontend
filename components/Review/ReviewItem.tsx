import React, { useState } from "react";
import PopUp from "components/class/PopUp/popup";
import { ReviewType } from "lib/models";
import ReviewShowModal from "./ReviewShowModal";

type AppProps = {
  areview: ReviewType;
};

function ReviewItem({ areview }: AppProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <div
        onClick={handleOpen}
        className="bg-white transition duration-300 ease-in-out transform w-64 h-36 px-6 py-3.5 rounded-3xl border border-indigo-500 cursor-pointer relative hover:scale-110 shadow-lg"
      >
        <div className="absolute -top-4 right-3 rounded-3xl border border-indigo-500 bg-white">
          <div className="px-2 py-0.5 text-center">
            <p>{areview?.reviewType === "Class" ? "Môn học" : "Giáo viên"}</p>
          </div>
        </div>

        <div className="h-14 w-60 text-left justify-center">
          <p className="text-lg leading-7 font-semibold items-center">
            {areview?.reviewTitle}
          </p>
        </div>

        <div className="flex items-center">
          <img src="/icons/destination_group.svg" />
          <p className="ml-2.5 text-sm leading-5 font-normal">
            {areview?.classId.className}
          </p>
        </div>
      </div>

      <div>
        {open === true && (
          <PopUp closepopup={setOpen}>
            <ReviewShowModal sreview={areview} />
          </PopUp>
        )}
      </div>
    </div>
  );
}
export default ReviewItem;
