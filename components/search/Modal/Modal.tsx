import React, { useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Link from "next/link";

function Modal(props) {
  const { infoDocument, setActiveModal } = props;
  const { title, author, description, imageUrl } = infoDocument;

  useEffect(() => {
    const link = document.getElementById("link-document");
    // link.focus();
    link.select();
  }, []);

  const handleClickBackground = (e) => {
    e.stopPropagation();
    setActiveModal(false);
  };

  const doNothing = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0">
      <div
        className="w-full h-screen flex items-center justify-center bg-transparent bg-indigo-200 bg-opacity-20"
        onClick={handleClickBackground}
      >
        <div
          className="max-w-full max-h-full overflow-auto bg-white sm:max-w-full lg:h-96 md:w-2/3 rounded-2xl overflow-hidden flex flex-col lg:flex-row sm:flex-col backdrop-filter backdrop-blur-2xl"
          onClick={doNothing}
        >
          <div className="lg:w-1/3 w-full lg:h-full md:h-48 overflow-hidden">
            <img
              src={imageUrl}
              alt={imageUrl}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-50 w-full h-full p-4 flex flex-col justify-between">
            <div>
              <p className="text-3xl font-bold mb-2">{title}</p>
              <p className="text-base mb-3 overflow-ellipsis">{description}</p>
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 rounded-full overflow-hidden mr-1">
                  <img
                    src={imageUrl}
                    alt={imageUrl}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg font-semibold text-gray-600">{author}</p>
              </div>
              <div>
                <div className="flex relative mb-3">
                  <CopyToClipboard text="https://source.unsplash.com/random">
                    <button className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        />
                      </svg>
                      {/* <span className="ml-1 text-base">Copy link</span> */}
                    </button>
                  </CopyToClipboard>
                  <input
                    type="link"
                    id="link-document"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="link"
                    placeholder="Your link here!"
                    value={imageUrl}
                    readOnly
                  />
                  <Link href="https://source.unsplash.com/random">
                    <a
                      target="_blank"
                      type="button"
                      className="rounded-r-md inline-flex  items-center px-3 border-t bg-white border-r border-b  border-gray-300 text-gray-500 shadow-sm text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      {/* <span className="ml-1 text-base">
                        Open link in new tab
                      </span> */}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-full flex items-center border-l border-t border-b text-base font-medium rounded-l-md text-black bg-white hover:bg-gray-100 px-4 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
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
      </div>
    </div>
  );
}

export default Modal;
