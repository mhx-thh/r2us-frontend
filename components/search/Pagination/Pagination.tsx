import React from "react";

import Image from "next/image";
type typePagination = {
  pagination: any;
  onPageChange: any;
  selected:any;
};

function Pagination(props: typePagination) {
  const { selected,pagination, onPageChange } = props;
  const { _limitperPage, _totalRows} = pagination;
  const _page = selected

  // const totalPages = Math.ceil(_totalRows / _limitperPage);
  const totalPages =_totalRows


  const handlePageChange = (newPage) => {
    if (onPageChange) onPageChange(newPage);
  };

  //render số trang
  const createPagerButton = () => {
    console.log("page:",_page)
    const arrayElement = [];
    for (let i = 1; i <= totalPages; i++) {
        arrayElement.push(
          <button
            key={i}
            type="button"
            className={
              `w-12 h-12 px-auto py-2 border border-indigo-500 rounded-xl items-center justify-center text-base bg-white mr-6 
              ${_page === i
                ? "bg-indigo-500 text-white "
                : "text-gray-600 hover:bg-gray-100"}`
            }
            onClick={() => {
              if (i !== _page) handlePageChange(i);
            }}
          >
            {i}
          </button>
        );
    }
    return <div>{arrayElement}</div>;
  };

  return (
    <div>
      <div className="flex items-center justify-center mx-auto my-10">
        <button
          type="button"
          disabled={_page <= 1}
          className="w-12 h-12 border border-indigo-500 text-base rounded-xl hover:active:bg-gray-100 text-gray-600 bg-white mr-6"
          onClick={() => {
            handlePageChange(_page - 1);
          }}
        >
          <Image
            src="/icons/pagiLeft.svg"
            height={20}
            width={12}
            alt="Prev button"
          />
        </button>
        {createPagerButton()}
        <button
          type="button"
          className="w-12 h-12 border border-indigo-500 text-base rounded-xl text-gray-600 bg-white hover:active:bg-gray-100 "
          onClick={() => {
            handlePageChange(_page + 1);
          }}
          disabled={_page >= totalPages}
        >
          <Image
            src="/icons/pagiRight.svg"
            height={20}
            width={12}
            alt="Next button"
          />
        </button>

      </div>
    </div>
  );
}

export default Pagination;
