import React, { useState } from "react";
import Layout from "components/search/Layout/Layout";
import Documents from "components/search/Documents/Documents";
interface AppProps {
  query: any;

}

const LoginSuccess = ({ query }: AppProps) => {
  const [documents, setDocuments] = useState([]);

  const getDocuments = (value) => {
    setDocuments(value);
  };
  const dt=[1,2,3,4]
  return (
    <Layout getData={getDocuments} >
      <Documents resource={documents} />
    </Layout>
  );
};

export default LoginSuccess;

export async function getServerSideProps(context) {
  return {
    props: { token: context?.query ?? "" }, // will be passed to the page component as props
  };
}
