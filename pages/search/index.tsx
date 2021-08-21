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
  const getDocuments = (value,data) => {
    setDocuments(value);
    setData(data)
  };

  return (
    <Layout getData={getDocuments} >
      {console.log("qpqpq:",data)}
      {documents === [] && <Loading/>}
      <Documents resource={documents}  />
    </Layout>
  );
//   return (
//     <div>
//       <Layout getData={getDocuments} >
//         {console.log("adasdad:",data)}
//       {/* {data !== [] &&
//               <p className="px-24 text-base leading-6 font-semibold">{data[0].label}</p>
//               <Documents  resource={data[0].value} />

//        } */}
//        {/* <p className="px-24 text-base leading-6 font-semibold">{data[0].label}</p> */}
//         {/* <Documents  resource={data[0].value} /> */}
//         {/* <p>{data[0]}</p> */}
//        </Layout>
       
//       {/* <div>
//         <Layout getData={getDocuments}>
//           <Documents resource={documents} />
//         </Layout>
//       </div> */}
//     </div>
//   )
};
export default Resource;