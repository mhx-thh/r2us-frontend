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
          const options = data?.data?.result;
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

  //Lấy danh sách khoa và năm học
  useEffect(() => {
    //Lấy danh sách Khoa
    async function fetchFaculty() {
      const response = await facultyApi.getAll();
      const newFaculties = response?.data?.result.map((op) => {
        const newOp = {};
        newOp["label"] = op.facultyName;
        newOp["_id"] = op._id;
        return newOp;
      });
      setfacultyList(newFaculties);
    }

    //Lấy danh sách năm học
    async function fetchAcademics() {
      const response = await AcademicAPI.get();
      const newAcademic = response?.data?.data?.result.map((op) => {
        const newOp = {};
        newOp["label"] = `${op.schoolyear} / học kì ${op.semester}`;
        newOp["_id"] = op._id;
        return newOp;
      });
      const filterAcademicList = [
        {
          _id: "0",
          label: "Xếp theo năm học",
        },
      ].concat(newAcademic);
      setAcademicList(filterAcademicList);
    }

    fetchFaculty();
    fetchAcademics();
  }, []);

  //fetch data
  useEffect(() => {
    //Bỏ trường facultyId
    delete router.query?.facultyId;
    const temQuery = { ...router.query };
    //Bỏ academic nếu id=0 (sort by academic)
    if (router.query?.academicId === "0") {
      delete temQuery?.academicId;
    }

    const param = queryString.stringify(temQuery, { skipEmptyString: true });

    //Call api group với query
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

    //Call api resource với query
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

    //Call api review với query
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
          Tìm kiếm dễ dàng
        </p>
        <p className="text-xl leading-8 font-semibold">
          Chúng tôi mang đến cho bạn không gian tìm kiếm đơn giản nhất
        </p>
      </div>
      <div className="-mt-8">
        <form onSubmit={handleSubmit(handleSubmitFilter)}>
          {/* Row 1 */}
          <div className="flex w-full items-center justify-center">
            <SearchBar
              register={register}
              name="t__search"
              placeholder="Tìm kiếm..."
            />
          </div>

          <div className="w-full flex justify-center mt-5 mb-14">
            <p className="text-xl leading-8 font-semibold">
              Gợi ý:{" "}
              <span className="text-lg text-indigo-500 leading-7 font-normal">
                Đề cương Toán ứng dụng thống kê
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
              title="Môn học"
              register={register}
              onHandleChange={handleChange}
              options={courseList}
              placeholder="All"
            />
            <SelectOption
              name="instructorId"
              title="Giáo viên"
              register={register}
              onHandleChange={handleChange}
              options={instructorsList}
              placeholder="All"
            />
            <SelectOption
              name="academicId"
              title="Năm học"
              register={register}
              onHandleChange={handleChange}
              options={academicList}
              placeholder="All"
            />
            <div>
              <br />
              <Button type="submit" value="Áp dụng" />
            </div>
          </div>
        </form>
      </div>
      <hr className="mt-12 mb-16" />
    </div>
  );
}

export default FilterBar;
