import React, { useState } from "react";
import Layout from "components/search/Layout/Layout";
import Documents from "components/search/Documents/Documents";
import Loading from "components/search/Loading/Loading";
interface AppProps {
  query: any;
}

const Resource = ({ query }: AppProps) => {
  const [documents, setDocuments] = useState([]);
  const [data,setData]=useState([])
  const getDocuments = (value,label,data) => {
    setDocuments(value);
    setData(data)
  };

  return (
    <Layout getData={getDocuments} >
      {console.log("qpqpq:",documents)}
      {documents === [] && <Loading/>}
      <Documents resource={documents}  />
    </Layout>
  );
};
0
export default Resource;
// export async function getServerSideProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }