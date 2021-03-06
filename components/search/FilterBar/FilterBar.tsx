import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import queryString from "query-string";

import Button from "../Button/Button";
import SearchBar from "components/search/SearchBar/SearchBar";
import SelectOption from "components/search/SelectOption/SelectOption";

import facultyApi from "api/facultyApi";
import courseApi from "api/courseApi";
import GroupAPI from "api/groupAPI";
import InstructorAPI from "api/instructorApi";
import AcademicAPI from "api/academicApi";

interface Props {
  getData: any;
  getPagination: any;
  setDone: any;
}

function FilterBar({ getData, getPagination, setDone }: Props) {
  //declare variable
  const [resource_filtered, setResource_filtered] = useState([]);
  const [review_filtered, setReview_filtered] = useState([]);
  const [group_filtered, setGroup_filtered] = useState([]);

  const [facultyList, setfacultyList] = useState([]);
  const [academicList, setAcademicList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [instructorsList, setInstructorsList] = useState([]);

  const router = useRouter();
  const { register, handleSubmit } = useForm();

  //filter list
  const filterListApi = {
    facultyId: courseApi,
    courseId: InstructorAPI,
  };

  //filter change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const api = filterListApi[name];
    const fetchData = async (api) => {
      switch (name) {
        case "facultyId":
          const data = await api.get(value);
          const options = data?.data?.data?.result;
          const newCourses = options?.map((op) => {
            const newOp = {};
            newOp["label"] = op.courseName;
            newOp["_id"] = op._id;
            return newOp;
          });
          setCourseList(newCourses);
          break;
        case "courseId":
          const dataInstructor = await api.get(value);
          const optionsInstructor = dataInstructor?.data?.data?.result;
          const newInstructors = optionsInstructor?.map((op) => {
            const newOp = {};
            newOp["label"] = op.instructorName;
            newOp["_id"] = op._id;
            return newOp;
          });
          setInstructorsList(newInstructors);
          break;
      }
    };

    if (api) fetchData(api);
  };

  //Submit form
  const handleSubmitFilter = (values) => {
    delete values?.facultyId;
    const paramString =
      "?" + queryString.stringify(values, { skipEmptyString: true });
    if (router.pathname === "/search/resource") {
      router.push(`/search/resource${paramString}&__skip=0 `, undefined, {
        shallow: true,
        scroll: false,
      });
    }
    if (router.pathname === "/search/review") {
      router.push(`/search/review${paramString}&__skip=0`, undefined, {
        shallow: true,
        scroll: false,
      });
    }
    if (router.pathname === "/search/group") {
      router.push(`/search/group${paramString}&__skip=0`, undefined, {
        shallow: true,
        scroll: false,
      });
    }
  };

  //L???y danh s??ch khoa v?? n??m h???c
  useEffect(() => {
    //L???y danh s??ch Khoa
    async function fetchFaculty() {
      const response = await facultyApi.getAll();
      const newFaculties = response?.data?.data?.result?.map((op) => {
        const newOp = {};
        newOp["label"] = op.facultyName;
        newOp["_id"] = op._id;
        return newOp;
      });
      setfacultyList(newFaculties);
    }

    //L???y danh s??ch n??m h???c
    async function fetchAcademics() {
      const response = await AcademicAPI.get();
      const newAcademic = response?.data?.data?.result.map((op) => {
        const newOp = {};
        newOp["label"] = `${op.schoolyear} / H???c k?? ${op.semester}`;
        newOp["_id"] = op._id;
        return newOp;
      });
      const filterAcademicList = [
        {
          _id: "0",
          label: "X???p theo n??m h???c",
        },
      ].concat(newAcademic);
      setAcademicList(filterAcademicList);
    }

    fetchFaculty();
    fetchAcademics();
  }, []);

  //fetch data
  useEffect(() => {
    //B??? tr?????ng facultyId
    delete router.query?.facultyId;
    const temQuery = { ...router.query };
    //B??? academic n???u id=0 (sort by academic)
    if (router.query?.academicId === "0") {
      delete temQuery?.academicId;
    }

    const param = queryString.stringify(temQuery, { skipEmptyString: true });

    //Call api group v???i query
    async function fetchGroupFilter(id: string) {
      try {
        const res = await GroupAPI.getGroup(id);
        setGroup_filtered(res?.data?.data?.result);
        const total = res?.data?.data?.total;
        getPagination(total);
        setDone(true);
      } catch (error) {
        console.error("fetchGroupFilter !!", error);
        setGroup_filtered([]);
      }
    }

    //Call api resource v???i query
    async function fetchResourceFilter(id: string) {
      try {
        const res = await GroupAPI.getResource(id);
        setResource_filtered(res?.data?.data?.result);
        const total = res?.data?.data?.total;
        getPagination(total);
        setDone(true);
      } catch (error) {
        console.error("fetchResourceFilter !!", error);
        setResource_filtered([]);
      }
    }

    //Call api review v???i query
    async function fetchReviewFilter(id: string) {
      try {
        const res = await GroupAPI.getReview(id);
        setReview_filtered(res?.data?.data?.result);
        const total = res?.data?.data?.total;
        getPagination(total);
        setDone(true);
      } catch (error) {
        console.error("fetchReviewFilter !!", error);
        setReview_filtered([]);
      }
    }

    //academiclist cho sort by academic
    const temAcademicList = [...academicList];
    temAcademicList.splice(0, 1);
    temAcademicList.sort(function (a, b) {
      if (a.label > b.label) {
        return -1;
      }
      if (a.label < b.label) {
        return 1;
      }
      return 0;
    });

    //resourcelist cho sort by academic
    if (router.pathname === "/search/resource") {
      fetchResourceFilter(param);
    }
    if (
      router.pathname === "/search/resource" &&
      router.query?.academicId === "0"
    ) {
      const newa = temAcademicList.map((op) => {
        const a = {};
        a["label"] = op.label;
        a["value"] = [
          resource_filtered.filter((resource) => {
            return resource?.classId?.academicId?._id.indexOf(op._id) > -1;
          }),
        ];
        return a;
      });
      getData([], newa);
    }

    //reviewlist cho sort by academic
    if (router.pathname === "/search/review") {
      fetchReviewFilter(param);
    }
    if (
      router.pathname === "/search/review" &&
      router.query?.academicId === "0"
    ) {
      const newa = temAcademicList.map((op) => {
        const a = {};
        a["label"] = op.label;
        a["value"] = [
          review_filtered.filter((review) => {
            return review?.classId?.academicId?._id.indexOf(op._id) > -1;
          }),
        ];
        return a;
      });
      getData([], newa);
    }

    //grouplist cho sort by academic
    if (router.pathname === "/search/group") {
      fetchGroupFilter(param);
    }
    if (router.pathname === "/search/group") {
      const newa = temAcademicList.map((op) => {
        const a = {};
        a["label"] = op.label;
        a["value"] = [
          group_filtered.filter((group) => {
            return group?.academicId?._id.indexOf(op._id) > -1;
          }),
        ];
        return a;
      });
      getData([], newa);
    }
  }, [router.query]);

  if (
    router.pathname === "/search/resource" &&
    router.query?.academicId !== "0"
  ) {
    getData(resource_filtered);
  }
  if (
    router.pathname === "/search/review" &&
    router.query?.academicId !== "0"
  ) {
    getData(review_filtered);
  }
  if (router.pathname === "/search/group" && router.query?.academicId !== "0") {
    getData(group_filtered);
  }

  return (
    <div className="w-full mt-0.5">
      <div className="w-full h-64 flex items-center bg-indigo-50 justify-center flex-col">
        <p className="text-3xl leading-9 font-semibold text-indigo-500">
          T??m ki???m d??? d??ng
        </p>
        <p className="text-xl leading-8 font-semibold">
          Ch??ng t??i mang ?????n cho b???n kh??ng gian t??m ki???m ????n gi???n nh???t
        </p>
      </div>
      <div className="-mt-8">
        <form onSubmit={handleSubmit(handleSubmitFilter)}>
          {/* Row 1 */}
          <div className="flex w-full items-center justify-center">
            <SearchBar
              register={register}
              name="t__search"
              placeholder="T??m ki???m . . ."
            />
          </div>

          <div className="w-full flex justify-center mt-5 mb-14">
            <p className="text-xl leading-8 font-semibold">
              G???i ??:{" "}
              <span className="text-lg text-indigo-500 leading-7 font-normal">
                ????? c????ng To??n ???ng d???ng th???ng k??, ????? gi???a k?? to??n cao c???p A1, ...
              </span>
            </p>
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-12 px-24">
            <SelectOption
              name="facultyId"
              title="Khoa"
              register={register}
              onHandleChange={handleChange}
              options={facultyList}
              placeholder="All"
            />
            <SelectOption
              name="courseId"
              title="M??n h???c"
              register={register}
              onHandleChange={handleChange}
              options={courseList}
              placeholder="All"
            />
            <SelectOption
              name="instructorId"
              title="Gi??o vi??n"
              register={register}
              onHandleChange={handleChange}
              options={instructorsList}
              placeholder="All"
            />
            <SelectOption
              name="academicId"
              title="N??m h???c"
              register={register}
              onHandleChange={handleChange}
              options={academicList}
              placeholder="All"
            />
            <div>
              <br />
              <Button type="submit" value="??p d???ng" />
            </div>
          </div>
        </form>
      </div>
      <hr className="mt-12 mb-16" />
    </div>
  );
}

export default FilterBar;
