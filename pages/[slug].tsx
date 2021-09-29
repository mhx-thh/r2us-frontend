import React from "react";
import { GetServerSideProps } from "next";
import blogApi from "api/blogApi";
import HeaderComponent from "components/header/HeaderComponent";
import Footer from "components/footer/FooterComponent";

function index(props) {
  return (
    <React.Fragment>
      <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
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
    }, // will be passed to the page component as props
  };
}
