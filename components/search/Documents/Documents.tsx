import React, { useState } from "react";
import  ResourceItem from "components/Resource/ResourceItem";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";

type TypeDoc = {
  resource: any;
}

function Documents({resource}:TypeDoc) {
  console.log("props:" ,resource)
  // const { documents, loading } = data;
  // console.log(documents)
  // const [activeModal, setActiveModal] = useState(false);
  // const [infoDocument, setInfoDocument] = useState({});

  // if (loading) {
  //   return <Loading />;
  // }

  // const handleClickDocument = (id) => {
  //   const cardClicked = documents.filter((doc) => doc.id == id);
  //   cardClicked[0].imageUrl = "https://source.unsplash.com/random";
  //   setInfoDocument(cardClicked[0]);
  //   setActiveModal(true);
  // };0

  // const [pagination, setPagination] = useState({
  //   _limit: 10,
  //   _page: 1,
  //   _totalRows:1,
  // });
  const pagination = {
    _limit: 10,
    _page: 1,
    _totalRows:1 || resource.length,
  }
  const handlePageChange = (new_page) => {
    console.log(new_page);
  };
  if (resource==[]) { 
    return (
      <Loading />
    )
  }
  else {
  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-12 md:grid-cols-3 sm:grid-cols-2 px-24 py-10">
        {resource.map((data,index)=>{
          return(
            <ResourceItem key={index} aresource={data} />)
            console.log("data:",data)
        })}
      </div>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
      }
}

export default Documents;
