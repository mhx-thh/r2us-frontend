import React, { useState } from "react";
import Layout from "components/search/Layout/Layout";
import Documents from "components/search/Documents/Documents";
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
      <Documents />
    </Layout>
  );
};

export default LoginSuccess;

export async function getServerSideProps(context) {
  return {
    props: { token: context?.query ?? "" }, // will be passed to the page component as props
  };
}
