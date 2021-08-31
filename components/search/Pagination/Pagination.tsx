import React, { useState } from "react";

import Image from "next/image";
type typePagination = {
  pagination: any;
  onPageChange: any;
  selected: any;
};

function Pagination(props: typePagination) {
  const { selected, pagination, onPageChange } = props;
  const { _limitperPage, _totalRows } = pagination;
  const _page = selected;
  const totalPages = _totalRows - 1;

  const handlePageChange = (newPage) => {
    if (onPageChange) onPageChange(newPage);
  };

  //render số trang
  const createPagerButton = () => {
    const arrayElement = [];
    for (let i = 0; i <= totalPages; i++) {
      arrayElement.push(
        <button
          key={i}
          type="button"
          className={`w-12 h-12 px-auto py-2 border border-indigo-500 rounded-xl items-center justify-center text-base bg-white mr-6
              ${
                _page === i
                  ? "bg-indigo-500 text-white "
                  : "text-gray-600 hover:bg-gray-100"
              }`}
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
          disabled={_page <= 0}
          className={`w-12 h-12 flex items-center justify-center
            ${
              _page <= 0
                ? " border border-gray-300 text-base rounded-xl  text-gray-600 bg-white mr-6"
                : " border border-indigo-500 text-base rounded-xl hover:active:bg-gray-100 text-gray-600 bg-white mr-6"
            }`}
          onClick={() => {
            handlePageChange(_page - 1);
          }}
        >
          {(_page <= 0 && (
            <Image
              src="/icons/pagiLeft_disable.svg"
              height={20}
              width={12}
              alt="Prev button"
            />
          )) || (
            <Image
              src="/icons/pagiLeft.svg"
              height={20}
              width={12}
              alt="Prev button"
            />
          )}
        </button>
        {createPagerButton()}
        <button
          type="button"
          className={`w-12 h-12 flex items-center justify-center
          ${
            _page >= _totalRows - 1
              ? " border border-gray-300 text-base rounded-xl  text-gray-600 bg-white mr-6"
              : " border border-indigo-500 text-base rounded-xl hover:active:bg-gray-100 text-gray-600 bg-white mr-6"
          }`}
          onClick={() => {
            handlePageChange(_page + 1);
          }}
          disabled={_page >= _totalRows - 1}
        >
          {(_page >= _totalRows - 1 && (
            <Image
              src="/icons/pagiRight_disable.svg"
              height={20}
              width={12}
              alt="Prev button"
            />
          )) || (
            <Image
              src="/icons/pagiRight.svg"
              height={20}
              width={12}
              alt="Prev button"
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default Pagination;
