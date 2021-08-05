import React, { useEffect, useState } from "react";
import Button from "components/search/Button/Button";
import SearchBar from "components/search/SearchBar/SearchBar";
import SelectOption from "components/search/SelectOption/SelectOption";
import { useForm } from "react-hook-form";
import facultyApi from "components/search/api/facultyApi";
import courseApi from "components/search/api/courseApi";
import { useRouter } from "next/router";
import queryString from "query-string";

function FilterBar({ getData }) {
  const router = useRouter();

  const [filter, setFilter] = useState({
    search: "all",
    uni: "all",
    faculty: "all",
    course: "all",
    type: "all",
    _limit: 10,
    _page: 1,
  });

  const handleSubmitFilter = (values) => {
    console.log(values);
    setFilter({
      ...values,
      _limit: 10,
      _page: 1,
    });
    const paramString = queryString.stringify(filter);
    router.push(`/search?${paramString}`);
  };

  useEffect(() => {
    console.log("changed");
    const fetchDocuments = async () => {
      const response = await facultyApi.getAll();
      console.log(response.data);
      const newDocuments = response.data.result;
      getData(newDocuments);
    };
    fetchDocuments();
  }, [filter]);

  // Form for filter
  const { register, handleSubmit } = useForm();

  const filterListApi = {
    uni: facultyApi,
    faculty: courseApi,
  };

  const [uniList, setUniList] = useState([]);
  const [facultyList, setfacultyList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [typeList, setTypeList] = useState([]);

  // Get information for filter
  useEffect(() => {
    const fetchData = async () => {
      setUniList([
        {
          _id: 1,
          label: "Khoa học Tự Nhiên",
        },
      ]);

      setTypeList([
        { _id: 1, label: "Đề Thi" },
        { _id: 2, label: "Đề Cương" },
        { _id: 3, label: "Đề Tài" },
      ]);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const api = filterListApi[name];

    const fetchData = async (api) => {
      let options;
      if (name == "uni") {
        const data = await api.getAll();
        console.log(data.data.result);
        options = data.data.result;
      } else {
        const data = await api.get(value);
        console.log(data.data.result);
        options = data.data.result;
      }

      switch (name) {
        case "uni":
          const newFaculties = options.map((op) => {
            const newOp = {};
            newOp["label"] = op.facultyName;
            newOp["_id"] = op._id;
            return newOp;
          });
          setfacultyList(newFaculties);
          break;

        case "faculty":
          const newCourses = options.map((op) => {
            const newOp = {};
            newOp["label"] = op.courseName;
            newOp["_id"] = op._id;
            return newOp;
          });
          setCourseList(newCourses);
          break;
      }
    };

    if (api) fetchData(api);
  };

  const handleMoveToTab = (path) => {
    console.log("clicked");
    router.push(path);
  };

  return (
    <div className="w-full">
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
              name="search"
              placeholder="Tìm kiếm..."
            />
          </div>

          <div className="w-full flex justify-center mt-5 mb-14">
            <p className="text-xl leading-8 font-semibold">Gợi ý: <span className="text-lg text-indigo-500 leading-7 font-normal">Đề cương Toán ứng dụng thống kê</span></p>
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-12 px-24">
            <SelectOption
              name="uni"
              register={register}
              onHandleChange={handleChange}
              options={uniList}
              placeholder="Chọn Trường"
            />
            <SelectOption
              name="faculty"
              register={register}
              onHandleChange={handleChange}
              options={facultyList}
              placeholder="Chọn Khoa"
            />
            <SelectOption
              name="course"
              register={register}
              onHandleChange={handleChange}
              options={courseList}
              placeholder="Chọn Môn"
            />
            <SelectOption
              name="type"
              register={register}
              onHandleChange={handleChange}
              options={typeList}
              placeholder="Chọn Loại Tài Liệu"
            />
            <Button type="submit" value="Áp dụng" />
          </div>
        </form>
      </div>

      {/* <hr className="mt-5 mb-10" /> */}

      {/* <div className="flex justify-between items-center flex-wrap">
        <div className="flex items-center mb-2 sm:mb-0">
          <div
            className="mr-2"
            onClick={() => {
              handleMoveToTab("/search");
            }}
          >
            <Button type="button" value="Tài Liệu" />
          </div>
          <div
            className="mr-2"
            onClick={() => {
              handleMoveToTab("/search/review");
            }}
          >
            <Button type="button" value="Review" />
          </div>
        </div>
        <div>
          <select className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
            <option value="Năm Học">Năm Học</option>
            <option value="Giảng Viên">Giảng Viên</option>
          </select>
        </div>
      </div> */}

      <hr className="mt-5 mb-10" />
    </div>
  );
}

export default FilterBar;
