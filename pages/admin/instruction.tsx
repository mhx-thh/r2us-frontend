import React, { useState } from "react";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";

import AdminLayout from "components/layout/AdminLayout";
import InstructionTable from "components/adminPage/Instruction";

function MyComponent() {
  const [value, setValue] = useState("");
  const [add, setAdd] = useState(false);
  const modulesQill = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
    history: {
      delay: 1000,
      maxStack: 50,
      userOnly: false,
    },
    imageResize: {
      displayStyles: {
        backgroundColor: "black",
        border: "none",
        color: "white",
      },
      modules: ["Resize", "DisplaySize", "Toolbar"],
    },
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];
  const handleChange = (e) => {
    setValue(e);
  };
  const back = () => {
    setAdd(!add);
  };
  return (
    <AdminLayout>
      {(add == false && (
        <div>
          <InstructionTable setAdd={back} />
          <div className="w-full h-4 mt-24"></div>
        </div>
      )) || (
        <div>
          <label>
            <h1>Title</h1>
          </label>
          <input
            id="title"
            type="text"
            className="border border-indigo-200 p-1 w-11/12 mb-4 h-10 rounded-lg"
            placeholder="title . . ."
          />
          <label>
            <h1>Description</h1>
          </label>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={handleChange}
            formats={formats}
            placeholder={"Enter new content here..."}
            className="bg-white w-11/12 h-max mb-4"
          />
          <div className="w-11/12 flex justify-center ">
            <button
              className="text-white bg-indigo-500 rounded-lg px-4 py-2 mr-4 hover:bg-indigo-800"
              onClick={back}
            >
              Back
            </button>
            <button
              className="text-white bg-indigo-500 rounded-lg px-4 py-2 hover:bg-indigo-800"
              onClick={back}
            >
              Submit
            </button>
          </div>
          <div className="w-full h-2"></div>
        </div>
      )}
    </AdminLayout>
  );
}

export default MyComponent;
