import React, { useState } from "react";
import CardDocument from "../CardDocument/CardDocument";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";

function Documents(props) {
  // const { documents, loading } = props;
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
  // };

  const [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    _totalRows: 50,
  });

  const handlePageChange = (new_page) => {
    console.log(new_page);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-12 md:grid-cols-3 sm:grid-cols-2 px-24 py-10">
        {/* {documents.map((doc) => (
          <CardDocument
            key={doc.id}
            // imageUrl={doc.imageUrl}
            id={doc.id}
            imageUrl="https://source.unsplash.com/random"
            title={doc.title}
            author={doc.author}
            onClickDocument={handleClickDocument}
          />
        ))} */}

        <CardDocument />
        <CardDocument />
        <CardDocument />
        <CardDocument />
        <CardDocument />
        <CardDocument />
        <CardDocument />
        <CardDocument />
        <CardDocument />
        <CardDocument />
        <CardDocument />
        <CardDocument />
        <CardDocument />
        <CardDocument />
        <CardDocument />
        <CardDocument />
        <CardDocument />
        <CardDocument />
      </div>

      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default Documents;
