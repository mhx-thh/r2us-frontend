import DocumentPage from "components/class/documentpage/documentpage";
import LayoutClass from "components/layout/layoutClass";
import React from "react";
import { GetServerSideProps } from "next";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
  const URL = `${baseURL}/api/v1/groups/class/${params.id}`;
  const res = await axios.get(URL);
  const tempURL = `${process.env.NEXT_PUBLIC_WEB_URL}/groups/class/${params.id}`;
  return { props: { status: res.status, data: res.data.data, URL: tempURL } };
};

const Item = function () {
  // Get params
  return (
    <LayoutClass
      title="MHX 2021 - Tin học hóa"
      desc="ClassPage"
      icon="/icons/mhx-logo.svg"
    >
      <DocumentPage />
    </LayoutClass>
  );
};
export default Item;
