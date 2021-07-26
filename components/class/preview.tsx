import React, { useState } from "react";

type documentinfo = {
  name: string;
  src: string;
};

const Preview = function () {
  const [focus, setFocus] = useState(true);
  const data = [
    {
      name: "A",
      src: "B",
    },
    {
      name: "C",
      src: "D",
    },
  ];

  console.log(data);

  return (
    <div>
      <div>
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setFocus(!!!focus);
          }}
        >
          Something big, somthing small, something... idk...
        </button>
      </div>
      {focus ? (
        <div
          className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
          id="modal-id"
        >
          <div
            className="absolute bg-black opacity-80 inset-0 z-0"
            onClick={() => {
              setFocus(!!!focus);
              console.log(focus);
            }}
          />
          <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            {/*content*/}
            <div>
              {/*body*/}
              <div className="text-center p-5 flex-auto justify-center">
                <h2 className="text-xl font-bold py-4 ">Are you sure?</h2>
                <p className="text-sm text-gray-500 px-8">
                  Do you really want to delete your account? This process cannot
                  be undone
                </p>
              </div>
              {/*footer*/}
              <div className="p-3  mt-2 text-center space-x-4 md:block">
                <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                  Cancel
                </button>
                <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default Preview;
