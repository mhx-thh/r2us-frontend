import React, { useState } from "react";
import CardDocument from "../CardDocument/CardDocument";
import Loading from "../Loading/Loading";
// import Modal from "../Modal/Modal";

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

  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-12 md:grid-cols-3 sm:grid-cols-2 px-24">
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
      <div>
        {/* {activeModal && (
          <Modal infoDocument={infoDocument} setActiveModal={setActiveModal} />
        )} */}
      </div>
    </div>
  );
}

export default Documents;
