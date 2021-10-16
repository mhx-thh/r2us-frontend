/* eslint-disable no-var */
import React, { useEffect, useRef, useState } from "react";
import "../../../node_modules/react-quill/dist/quill.snow.css";
import AdminLayout from "components/layout/AdminLayout";
import InstructionTable from "components/adminPage/Instruction";
import { useRouter } from "next/router";
import blogApi from "api/blogApi";
import { selectToken } from "redux/userSlice";
import { useAppSelector } from "redux/hooks";
import parse from "html-react-parser";
import dynamic from "next/dynamic";
import NoSSR from "react-no-ssr";
import { convert } from "html-to-text";
import QuillEditor from "components/editor/QuillEditor";
import { decode } from "html-entities";

function MyComponent() {
  const router = useRouter();
  const [reactQuill, setReactQuill] = useState(false);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const token = useAppSelector(selectToken);
  const [value, setValue] = useState({
    blogTitle: "",
    content: "",
  });

  const change = (content, delta, source, editor) => {
    console.log(editor.getHTML()); // HTML/rich text
    setValue({ ...value, content: editor.getHTML() });
    console.log(editor.getText()); // plain text
    console.log(editor.getLength()); // number of characters
  };
  console.log(value);
  const onEditorChange = (values) => {
    setValue({ ...value, content: values });
    console.log(values);
  };

  const onFilesChange = (files) => {
    console.log(files);
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
  const submit = (e) => {
    e.preventDefault();
    console.log(value);
    // setValue({ ...value, blogTitle: title });
    blogApi.update(value, id, token);
    setEditblog(!editblog);
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
    setId(data._id);
    setValue({
      ...value,
      blogTitle: data.blogTitle,
      content: data.content,
    });
    console.log(data);
    console.log("value:", value);
  };
  console.log(typeof value.content);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     import("react-quill").then((mod) => {
  //       setReactQuill(mod);
  //     });
  //   }
  // }, []);
  const modifyContent = (str) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    str = str.replace(/&lt;/g, "<");
  };
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
          <QuillEditor
            className="bg-white"
            placeholder={"..."}
            content={decode(value.content)}
            onEditorChange={onEditorChange}
            onFilesChange={onFilesChange}
          />
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
      <div></div>
      <div className="w-full h-2"></div>
    </AdminLayout>
  );
}

export default MyComponent;
