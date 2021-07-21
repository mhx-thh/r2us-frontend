import React, { useEffect } from "react";

type AppProps = {
  token: string;
};

const LoginSuccess = ({ token }: AppProps) => {
  useEffect(() => {
    localStorage.setItem("token", token);
    setTimeout(() => {
      window.close();
    }, 500);
  }, []);

  return <div>Thanks for loggin in!</div>;
};

export default LoginSuccess;

export async function getServerSideProps(context) {
  return {
    props: { token: context?.query?.token ?? "" }, // will be passed to the page component as props
  };
}
