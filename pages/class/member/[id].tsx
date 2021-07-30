import { GetServerSideProps } from "next";
import React from "react";

type AppProps = {
  param: string;
};

function Post(props: AppProps) {
  return <div>{props.param}</div>;
}
export default Post;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      param: params.id,
    },
  };
};
