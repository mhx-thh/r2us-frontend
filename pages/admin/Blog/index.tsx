import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "../../../node_modules/react-quill/dist/quill.snow.css";
import CKEditor from "@ckeditor/ckeditor5-build-classic";
import ClassicEditor from "@ckeditor/ckeditor5-react";
import AdminLayout from "components/layout/AdminLayout";
import InstructionTable from "components/adminPage/Instruction";
import { useRouter } from "next/router";
import blogApi from "api/blogApi";
import { selectToken } from "redux/userSlice";
import { useAppSelector } from "redux/hooks";
import parse from "html-react-parser";

function MyComponent() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const token = useAppSelector(selectToken);
  const [value, setValue] = useState({
    blogTitle: "",
    content: "",
    createBy: {
      dateOfBirth: "",
      email: "",
      familyName: "",
      givenName: "",
      photo: "",
      studentCardNumber: "",
      _id: "",
    },
    slug: "",
    _id: "",
  });
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
  const change = (content, delta, source, editor) => {
    console.log(editor.getHTML()); // HTML/rich text
    setValue({ ...value, content: editor.getHTML() });
    console.log(editor.getText()); // plain text
    console.log(editor.getLength()); // number of characters
  };
  const submit = () => {
    console.log(value);
    blogApi.update(value, value._id, token);
  };
  const [editblog, setEditblog] = useState(true);
  const create = () => {
    router.push("/admin/Blog/Create");
  };
  const ediitblog = (data) => {
    console.log(editblog);
    setEditblog(!editblog);
    setTitle(data.blogTitle);
    setValue(data);
    console.log(data);
    console.log("value:", value);
  };
  console.log(typeof value.content);
  return (
    <AdminLayout>
      {(editblog && (
        <div>
          <InstructionTable setAdd={create} modify={ediitblog} />
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
            value={title}
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
              console.log(`title: `, title);
            }}
          />
          <label>
            <h1>Description</h1>
          </label>
          <ReactQuill
            theme="snow"
            value={value.content}
            formats={formats}
            onChange={change}
            placeholder={"Enter new content here..."}
            className="bg-white w-11/12 h-max mb-4"
          />
          {/* <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        setValue(data);
      }}
    /> */}
          <div className="w-11/12 flex justify-center ">
            <button
              className="text-white bg-indigo-500 rounded-lg px-4 py-2 mr-4 hover:bg-indigo-800"
              onClick={() => {
                setEditblog(!editblog);
              }}
            >
              Back
            </button>
            <button
              className="text-white bg-indigo-500 rounded-lg px-4 py-2 hover:bg-indigo-800"
              onClick={submit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
      {parse(value.content)}
      <div className="w-full h-2"></div>
    </AdminLayout>
  );
}

export default MyComponent;