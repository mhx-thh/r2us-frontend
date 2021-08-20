import React, { useState } from "react";
import Layout from "components/search/Layout/Layout";
import Documents from "components/search/Documents/Documents";
interface AppProps {
  query: any;

}

const LoginSuccess = ({ query }: AppProps) => {
  const [documents, setDocuments] = useState([]);
  const [loading,setLoaing]=useState(true)
  const [label,setLabel]=useState([])
  const [data,setData]=useState([])
  const getDocuments = (value: React.SetStateAction<any[]>,loading: boolean | ((prevState: boolean) => boolean),label: React.SetStateAction<any[]>,data: React.SetStateAction<any[]>) => {
    setDocuments(value);
    setLoaing(loading);
    setLabel(label)
    setData(data)
  };
  const dt=[1,2,3,4]
  return (
    <Layout getData={getDocuments} >
      <Documents resource={documents} loading={loading} label={label} data={data} />
    </Layout>
  );
};

export default LoginSuccess;

export async function getServerSideProps(context) {
  return {
    props: { token: context?.query ?? "" }, // will be passed to the page component as props
  };
}
