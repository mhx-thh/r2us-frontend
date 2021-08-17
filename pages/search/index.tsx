import React, { useEffect, useState } from "react";
import Layout from "components/search/Layout/Layout";
import Documents from "components/search/Documents/Documents";
import Pagination from "components/pagination/Pagination";
import AcademicAPI from "api/academicApi";
import ResourceItem from "components/Resource/ResourceItem";
import queryString from "query-string";
interface AppProps {
  query: string;
}

const LoginSuccess = ({ query }: AppProps) => {
  const [documents, setDocuments] = useState([]);
  const [newResource, setNewResource] = useState([]);
  const getDocuments = (value) => {
    console.log(value);
    setDocuments(value);
  };
  const [filters, setFilters] = useState({ _limit: 10, _page: 1 });

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 51,
  });
  function handlePageChange(newPage) {
    console.log("New page: ", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  useEffect(() => {
    async function fetchSearchList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestURL = `https://r2us.herokuapp.com/api/v1/academic/${paramsString}`;
        const response = await fetch(requestURL);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON?.data?.data?.result;
        setPagination(pagination);
        setNewResource(data);
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [filters]);
  return (
    <Layout getData={getDocuments}>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </Layout>
  );
};

export default LoginSuccess;

export async function getServerSideProps(context) {
  return {
    props: { token: context?.query ?? "" }, // will be passed to the page component as props
  };
}
