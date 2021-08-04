import React from "react";

type typePagination = {
  pagination: any;
  onPageChange: any;
};

function Pagination(props: typePagination) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

  const handlePageChange = (new_page) => {
    if (onPageChange) onPageChange(new_page);
  };

  const createPagerButton = () => {
    const arrayElement = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i % 2 == 1) {
        arrayElement.push(
          <button
            key={i}
            type="button"
            className={
              "w-10 px-auto py-2 border-t border-b text-base bg-white hover:bg-gray-100 " +
              (_page == i ? "text-indigo-500" : "text-gray-600")
            }
            onClick={() => {
              if (i != _page) handlePageChange(i);
            }}
          >
            {i}
          </button>
        );
      } else {
        arrayElement.push(
          <button
            key={i}
            type="button"
            className={
              "w-10 px-4 py-2 border text-base bg-white hover:bg-gray-100 " +
              (_page == i ? "text-indigo-500" : "text-gray-600")
            }
            onClick={() => {
              if (i != _page) handlePageChange(i);
            }}
          >
            {i}
          </button>
        );
      }
    }
    return <div>{arrayElement}</div>;
  };

  return (
    <div>
      <div className="flex items-center justify-center mx-auto my-10">
        <button
          type="button"
          className="w-10 p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
          onClick={() => {
            handlePageChange(_page - 1);
          }}
          disabled={_page <= 1}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
        {createPagerButton()}
        {totalPages % 2 == 0 && (
          <button
            type="button"
            className="w-10 p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
            onClick={() => {
              handlePageChange(_page + 1);
            }}
            disabled={_page >= totalPages}
          >
            <svg
              width="9"
              fill="currentColor"
              height="8"
              className=""
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
            </svg>
          </button>
        )}
        {totalPages % 2 == 1 && (
          <button
            type="button"
            className="w-10 p-4 border border border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
            onClick={() => {
              handlePageChange(_page + 1);
            }}
            disabled={_page >= totalPages}
          >
            <svg
              width="9"
              fill="currentColor"
              height="8"
              className=""
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default Pagination;
