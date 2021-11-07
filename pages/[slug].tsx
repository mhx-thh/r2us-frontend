import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import blogApi from "api/blogApi";
import HeaderComponent from "components/header/HeaderComponent";
import Footer from "components/footer/FooterComponent";
import { decode } from "html-entities";
import { useRouter } from "next/router";

function index(props) {
  //doan nay là modify nè
  const modifyContent = (str) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    str =
      "<p>&lt;h2&gt;abcccc&lt;/h2&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;</p>".replace(
        /&lt;/g,
        "<"
      );
  };
  const html = modifyContent(props.content);
  console.log(modifyContent(props.content));
  const [newBlogs, setNewBlogs] = useState([]);
  useEffect(() => {
    async function getnewBlogs() {
      try {
        const res = await blogApi.getNew();
        console.log(res?.data?.data?.result);
        setNewBlogs(res.data?.data?.result);
      } catch (error) {
        setNewBlogs([]);
      }
    }
    getnewBlogs();
  }, []);
  const router = useRouter();
  const handleclick = (param) => {
    const currentpath = router.asPath;
    router.push(`${currentpath}/${param}`);
  };
  return (
    <React.Fragment>
      <div className="bg-indigo-100 w-full h-full py-8">
        <div className="grid grid-cols-5 gap-16 px-48 ">
          <div className="col-span-4 overflow-auto p-8 border-2 rounded-2xl border-indigo-500 bg-white">
            <div className="">
              <p className="mt-2 mb-8 text-5xl leading-none font-extrabold">
                {props.title}
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: decode(props.content) }}
              />
            </div>
          </div>
          <div className="hidden-md-down px-0 ml-0 col-span-1 h-full divide-y-2 divide-indigo-500">
            <div className="border-2 rounded-2xl border-indigo-500 bg-white px-8 py-2 mb-4">
              <div className="flex justify-center">
                <img
                  src={props.photo}
                  alt="avatar"
                  className="w-16 h-16 object-cover cursor-pointer rounded-full mr-4"
                />
                <div className="mt-2">
                  <p>Author: </p>
                  <p className="text-xl leading-none font-bold">
                    {props.author}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-none italic mt-4">{props.time}</p>
            </div>
            <div className="pt-4">
              {newBlogs.map((blogs) => (
                // eslint-disable-next-line react/jsx-key
                <p
                  className="text-sm leading-none mb-2  hover:text-indigo-500 hover:cursor-pointer hover:underline hover:text-lg transition delay-50 duration-300 ease-in-out"
                  onClick={() => {
                    const currentpath = router.basePath;
                    console.log(router);
                    router.push(`${currentpath}/${blogs.slug}`);
                  }}
                >
                  {blogs.blogTitle}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default index;
export async function getServerSideProps(context: any) {
  console.log(context.params);
  const res = await blogApi.get(context.params.slug);
  console.log(res?.data?.data?.content);

  return {
    props: {
      content: res?.data?.data?.content,
      title: res?.data?.data?.blogTitle,
      author:
        res?.data?.data?.createBy.givenName +
        res?.data?.data?.createBy.familyName,
      time: res?.data?.data?.updatedAt,
      photo: res?.data?.data?.createBy.photo,
    }, // will be passed to the page component as props
  };
}
