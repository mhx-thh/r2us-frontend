import React, { useState } from "react";
import Layout from "components/search/Layout/Layout";
import Documents from "components/search/Documents/Documents";
import Loading from "components/search/Loading/Loading";
interface AppProps {
  query: any;
}

const Resource = ({ query }: AppProps) => {
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
  console.log("text:")
  return (
    <Layout getData={getDocuments} >
      {documents === [] && <Loading/>}
      <Documents resource={documents} loading={loading} label={label} data={data} />
    </Layout>
  );
};

export default Resource;
// export async function getServerSideProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }