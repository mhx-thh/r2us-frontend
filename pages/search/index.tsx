import React from "react";

type AppProps = {
  query: string;
};

const LoginSuccess = ({ query }: AppProps) => {
  return <div>Search</div>;
};

export default LoginSuccess;

export async function getServerSideProps(context) {
  return {
    props: { token: context?.query ?? "" }, // will be passed to the page component as props
  };
}
