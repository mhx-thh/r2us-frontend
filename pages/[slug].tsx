import React from "react";
import { GetServerSideProps } from "next";
import blogApi from "api/blogApi";
import HeaderComponent from "components/header/HeaderComponent";
import Footer from "components/footer/FooterComponent";

function index(props) {
  const modifyContent = (str) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    str = str.replace(/&lt;/g, "<");
  };
  const html = modifyContent(props.content);
  console.log(modifyContent(props.content));
  return (
    <React.Fragment>
      <p className="mt-4 mb-2 px-16">
        {props.author}, {props.time}
      </p>
      <p className="ml-16 mt-8 mb-12 text-5xl leading-none font-extrabold">
        {props.title}
      </p>
      <div className="mx-16">
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
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
    }, // will be passed to the page component as props
  };
}
