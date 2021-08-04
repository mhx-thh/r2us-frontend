import React, { useState } from "react";
import Layout from "components/search/Layout/Layout";
interface AppProps {
  query: string;
}

const LoginSuccess = ({ query }: AppProps) => {
  const [documents, setDocuments] = useState([]);

  const getDocuments = (value) => {
    console.log(value);
    setDocuments(value);
  };

  return (
    <Layout getData={getDocuments}>
      <h1>Document here</h1>
    </Layout>
  );
};

export default LoginSuccess;

export async function getServerSideProps(context) {
  return {
    props: { token: context?.query ?? "" }, // will be passed to the page component as props
  };
}
