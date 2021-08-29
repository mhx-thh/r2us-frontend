import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import queryString from "query-string";

import Layout from "components/layout/SearchLayout";
import Pagination from "components/search/Pagination/Pagination";
import Groups from "components/search/Groups/Groups";

interface AppProps {
  query: any;
}

const Resource = ({ query }: AppProps) => {
  //declare variable
  const [pagination, setPagination] = useState({
    _limitperPage: 20,
    _totalRows: 21,
  });
  const [selected, setSelected] = useState(1);
  const [documents, setDocuments] = useState([]);
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
    console.log("asddasd:", pagination);
  };

  //Chuyển trang
  const handlePageChange = (_page: number) => {
    setSelected(_page);
    setSkip(_page - 1);
  };

  //Update query
  useEffect(() => {
    if (router.asPath.includes("?")) {
      delete router.query?.__skip;
      const param = queryString.stringify(router.query);
      router.push(`/search/group?${param}&__skip=${skip}`, undefined, {
        scroll: false,
      });
    } else {
      const currentPath = router.asPath;
      router.push(`${currentPath}?__skip=1`, undefined, { scroll: false });
    }
  }, [skip]);

  return (
    <div>
      <Layout getData={getDocuments} getPagination={handleTotalRowsChange}>
        {pagination._totalRows === 0 && (
          <div>
            <span className="mx-24 text-xl leading-8 mr-2">
              Không có lớp nào rồi
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
                <Groups group={idx?.value[0]} />
              </div>
            );
          })) || <Groups group={documents} />}
      </Layout>

      <Pagination
        pagination={pagination}
        selected={selected}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default Resource;