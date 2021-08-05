import MemberPage from "components/class/member/memberpage";
import LayoutClass from "components/layout/layoutClass";
import React, { useEffect, useState } from "react";
import Sidebar from "components/class/Sidebar/Sidebar";
import Title from "components/class/Title/Title";
import NewClassAPI from "api/NewClassAPI";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import AcademicAPI from "api/academicApi";
import InstructorAPI from "api/instructorApi";
import style from "./style.module.css";

export const getServerSideProps: GetServerSideProps = async (params) => {
  const temp = params.params.slug.toString();
  const res = await NewClassAPI.getGroup(temp);
  const schoolyear = await AcademicAPI.getAcademic(res.data.data.academicId);
  const instructorName = await InstructorAPI.getInstructor(
    res.data.data.instructorId
  );

  return {
    props: {
      status: res.data.status,
      data: res.data.data,
    },
  };
};

type propApi = {
  status: string;
  data: {
    className: string;
    ratingsAverage: number;
    ratingsQuantity: number;
    nStudents: number;
    _id: string;
    courseId: string;
    academicId: string;
    instructorId: string;
    createdAt: string;
    updatedAt: string;
    slug: string;
    __v: 0;
  };
};

const Item = function (props: propApi) {
  const initProps = props.data;

  const initTitle = {
    academicId: {
      schoolyear: initProps.academicId,
    },
    courseId: {
      courseName: initProps.courseId,
    },
    className: initProps.className,
    instructorId: {
      instructorName: initProps.instructorId,
    },
  };

  const router = useRouter();
  const path = router.asPath;

  return (
    <LayoutClass
      title="MHX 2021 - Tin học hóa"
      desc="ClassPage"
      icon="/icons/mhx-logo.svg"
    >
      <Title data={initTitle} />
      <Sidebar param={path} id={initProps.slug} />
      <hr></hr>
      <div className={style.Page}>
        <MemberPage />
      </div>
    </LayoutClass>
  );
};

export default Item;
