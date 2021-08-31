import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import queryString from "query-string";

import Layout from "components/layout/SearchLayout";
import Pagination from "components/search/Pagination/Pagination";
import Reviews from "components/search/Reviews/reviews";
import GroupAPI from "api/groupAPI";
interface AppProps {
  data1: any;
}

const Review = ({ data1 }: AppProps) => {
  //declare variable
  const [pagination, setPagination] = useState({
    _limitperPage: 20,
    _totalRows: 21,
  });
  const [selected, setSelected] = useState(1);
  const [documents, setDocuments] = useState(data1);
  const [skip, setSkip] = useState(0);
  const router = useRouter();
  const [data, setData] = useState([]);
  const getDocuments = (_documents, _data) => {
    setDocuments(_documents);
    setData(_data);
  };

  //Return số trang
  const handleTotalRowsChange = (_totalRows: number) => {
    setPagination({
      _limitperPage: 20,
      _totalRows: _totalRows,
    });
  };

  //Chuyển trang
  const handlePageChange = (_page: number) => {
    setSelected(_page);
    setSkip(_page);
  };

  //Update query
  useEffect(() => {
    if (router.asPath.includes("?")) {
      delete router.query?.__skip;
      const param = queryString.stringify(router.query);
      router.push(`/search/review?${param}&__skip=${skip - 1}`, undefined, {
        scroll: false,
        shallow: true,
      });
    } else {
      const currentPath = router.asPath;
      router.push(`${currentPath}?__skip=0`, undefined, {
        scroll: false,
        shallow: true,
      });
    }
  }, [skip]);
  return (
    <div>
      <Layout getData={getDocuments} getPagination={handleTotalRowsChange}>
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
export const getServerSideProps = async (context) => {
  const param = queryString.stringify(context.query, { skipEmptyString: true });
  const res = await GroupAPI.getReview(param);
  const data1 = res?.data?.data?.result;
  return {
    props: {
      data1,
    },
  };
};
