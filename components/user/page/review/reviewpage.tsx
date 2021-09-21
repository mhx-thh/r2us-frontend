import React, { useEffect, useState } from "react";
import Image from "next/image";

import CreateReview from "components/Review/ReviewCreateModal";
import PopUp from "components/class/PopUp/popup";
import ReviewItem from "components/Review/ReviewItem";
import ReviewLoading from "components/user/Loading/ReviewLoading";
import style from "./style.module.css";

import { useAppSelector } from "redux/hooks";
import { selectStatus, selectToken } from "redux/userSlice";

import userApi from "api/userApi";

type pageStatus = "loading" | "done";

// Get value to render pagination
const Pagination = function (props: any) {
  const { totalCount, currentPage, pageSize, siblingCount } = props;

  const paginationRange = function () {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // siblingCount * 2 side + first page + last page + current page
    const totalPageNumber = siblingCount * 2 + 3;

    // Fast range
    const range = function (start, end) {
      if (end < start) {
        return [];
      }
      const length = end - start + 1;
      return Array.from({ length }, (_, i) => i + start);
    };

    // No dots
    if (totalPageNumber >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftArray =
      currentPage - siblingCount - 1 <= 1
        ? range(1, currentPage - 1)
        : [1, -1, ...range(currentPage - siblingCount, currentPage - 1)];

    const rightArray =
      currentPage + siblingCount + 1 >= totalPageCount
        ? range(currentPage + 1, totalPageCount)
        : [
            ...range(currentPage + 1, currentPage + siblingCount),
            -1,
            totalPageCount,
          ];
    return [...leftArray, currentPage, ...rightArray];
  };

  return paginationRange();
};

const ReviewPage = function () {
  // Set up for page
  const token = useAppSelector(selectToken);
  const status = useAppSelector(selectStatus);
  const [pageStatus, setPageStatus] = useState<pageStatus>("loading");
  const [totalCount, setTotalCount] = useState(0);

  const [create, setCreate] = useState(false);
  const handleClick = () => {
    setCreate(!create);
  };

  const [data, setData] = useState([]);

  async function getMyReviews() {
    try {
      const res = await userApi.getMyReviews(token);
      const data = res?.data?.data?.result;
      setData(data);
      setPageStatus("done");
      setTotalCount(data?.length);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getMyReviews();
  }, [status, create]);

  // Set up for pagination
  const [currentPage, setCurrentPage] = useState(1); // Default
  const pageSize = 20;
  const siblingCount = 1;
  const onPageChange = setCurrentPage;
  const totalPageCount = Math.ceil(totalCount / pageSize);

  const [pageRange, setPageRange] = useState(
    Pagination({ totalCount, currentPage, pageSize, siblingCount })
  );
  useEffect(() => {
    setPageRange(
      Pagination({ totalCount, currentPage, pageSize, siblingCount })
    );
  }, [totalCount, currentPage]);

  // And all
  const dataPage = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className={style.page}>
      <div>
        {/* "Chia sẻ tài liệu button" */}
        <div className={style.buttonarea}>
          <button className={style.button} onClick={handleClick}>
            <div className={style.button__text}>Chia sẻ cảm nhận</div>
            <div className={style.button__image}>
              <img src="/icons/title.svg" width="27" height="23" />
            </div>
          </button>
        </div>

        {create === true && (
          <PopUp closepopup={setCreate}>
            <CreateReview handleCreate={handleClick} />
          </PopUp>
        )}

        {/* Review */}
        {pageStatus === "done" ? (
          <div>
            <div className="grid py-10 w-full lg:grid-cols-4 gap-12 md:grid-cols-3 sm:grid-cols-2">
              {dataPage.map((val, key) => (
                <ReviewItem areview={val} key={key} />
              ))}
            </div>

            {/* Pagination */}
            <div>
              <div className="flex items-center justify-center mx-auto my-10">
                <button
                  className={`w-12 h-12 flex items-center justify-center
            ${
              currentPage <= 1
                ? " border border-gray-300 text-base rounded-xl  text-gray-600 bg-white mx-3"
                : " border border-indigo-500 text-base rounded-xl hover:active:bg-gray-100 text-gray-600 bg-white mx-3"
            }`}
                  disabled={currentPage <= 1}
                  onClick={() => {
                    onPageChange(currentPage - 1);
                  }}
                >
                  <Image
                    src={
                      currentPage <= 1
                        ? "/icons/pagiLeft_disable.svg"
                        : "/icons/pagiLeft.svg"
                    }
                    height={20}
                    width={12}
                    alt="Prev button"
                  />
                </button>

                {pageRange.map((page) =>
                  page === -1 ? (
                    <div>...</div>
                  ) : (
                    <button
                      className={`w-12 h-12 px-5 py-3 border border-indigo-500 rounded-xl items-center justify-center text-base mx-3
              ${
                currentPage === page
                  ? "bg-indigo-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
                      onClick={() => {
                        onPageChange(page);
                      }}
                    >{` ${page} `}</button>
                  )
                )}

                <button
                  className={`w-12 h-12 flex items-center justify-center
            ${
              currentPage >= totalPageCount
                ? " border border-gray-300 text-base rounded-xl  text-gray-600 bg-white mx-3"
                : " border border-indigo-500 text-base rounded-xl hover:active:bg-gray-100 text-gray-600 bg-white mx-3"
            }`}
                  disabled={currentPage >= totalPageCount}
                  onClick={() => {
                    onPageChange(currentPage + 1);
                  }}
                >
                  <Image
                    src={
                      currentPage <= 1
                        ? "/icons/pagiRight_disable.svg"
                        : "/icons/pagiRight.svg"
                    }
                    height={20}
                    width={12}
                    alt="Prev button"
                  />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 gap-12 md:grid-cols-3 sm:grid-cols-2">
            <ReviewLoading />
            <ReviewLoading />
            <ReviewLoading />
            <ReviewLoading />
            <ReviewLoading />
            <ReviewLoading />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
