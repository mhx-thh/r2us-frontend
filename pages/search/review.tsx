import React, { useState } from "react";
import { useRouter } from "next/router";
import queryString from "query-string";

import Layout from "components/layout/SearchLayout";
import Pagination from "components/search/Pagination/Pagination";
import Reviews from "components/search/Reviews/reviews";
import ReviewLoading from "components/search/Loading/ReviewLoading";

const Review = () => {
  //declare variable
  const [pagination, setPagination] = useState({
    _limitperPage: 20,
    _totalRows: 0,
  });
  const [selected, setSelected] = useState(0);
  const [documents, setDocuments] = useState([]);
  const router = useRouter();
  const [data, setData] = useState([]);
  const getDocuments = (_documents, _data) => {
    setDocuments(_documents);
    setData(_data);
  };
  const [done, setDone] = useState(false);

  //Return số trang
  const handleTotalRowsChange = (_totalRows: number) => {
    setPagination({
      _limitperPage: 20,
      _totalRows: _totalRows,
    });
  };
  const handleDoneStatus = (isDone) => {
    setDone(isDone);
  };

  //Chuyển trang
  const handlePageChange = (_page: number) => {
    setSelected(_page);
    if (router.asPath.includes("?")) {
      delete router.query?.__skip;
      const param = queryString.stringify(router.query);
      router.push(`/search/review?${param}&__skip=${_page}`, undefined, {
        scroll: false,
        shallow: true,
      });
    } else {
      const currentPath = router.asPath;
      router.push(`${currentPath}?__skip=${_page}`, undefined, {
        scroll: false,
        shallow: true,
      });
    }
  };

  return (
    <div>
      <Layout
        getData={getDocuments}
        getPagination={handleTotalRowsChange}
        setDone={handleDoneStatus}
      >
        {!done ? (
          <div className="grid lg:grid-cols-4 gap-12 md:grid-cols-3 sm:grid-cols-2 px-24 py-10">
            <ReviewLoading />
            <ReviewLoading />
            <ReviewLoading />
            <ReviewLoading />
            <ReviewLoading />
            <ReviewLoading />
          </div>
        ) : (
          <div>
            {pagination._totalRows === 0 && (
              <div>
                <span className="mx-24 text-xl leading-8 mr-2">
                  Không có cảm nhận nào rồi
                </span>
                <img
                  className="inline-block pb-2"
                  src="/icons/crying.svg"
                  width="50"
                  height="50"
                />
              </div>
            )}

            {(data !== [] &&
              data?.map((idx) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div>
                    <p className="px-24 text-base leading-6 font-semibold">
                      {idx?.label}
                    </p>
                    <Reviews review={idx?.value[0]} />
                  </div>
                );
              })) || <Reviews review={documents} />}
          </div>
        )}
      </Layout>
      <Pagination
        pagination={pagination}
        selected={selected}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default Review;
