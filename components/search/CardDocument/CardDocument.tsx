import React from "react";

function CardDocument(props) {
  const { imageUrl, title, author, onClickDocument, id } = props;

  const handleClickDocument = (id) => {
    if (onClickDocument) onClickDocument(id);
  };

  const handleClickStar = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <div
        className="shadow-md rounded-2xl overflow-hidden bg-white dark:bg-gray-800 h-80 m-auto cursor-pointer hover:shadow-lg"
        onClick={() => handleClickDocument(id)}
      >
        <div className="w-full h-36">
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={imageUrl}
          />
        </div>
        <div className="p-4 h-44 flex flex-col justify-between">
          <div>
            <p className="text-lg font-bold">{title}</p>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full overflow-hidden mr-1.5">
                <img
                  className="w-full h-full object-cover"
                  src={imageUrl}
                  alt="img"
                />
              </div>
              <span className="text-base">{author}</span>
            </div>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="w-full flex items-center border-l border-t border-b text-base font-medium rounded-l-md text-black bg-white hover:bg-gray-100 px-4 py-2"
              onClick={handleClickStar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="w-4 h-4 mr-2"
                fill="currentFill"
                viewBox="0 0 1792 1792"
              >
                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
              </svg>
              Star
            </button>
            <button
              type="button"
              className="w-full border text-base font-medium rounded-r-md text-black bg-white hover:bg-gray-100 px-4 py-2"
            >
              654
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDocument;
