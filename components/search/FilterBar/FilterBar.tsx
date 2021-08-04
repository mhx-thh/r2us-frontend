import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "components/search/Button/Button";
import InputText from "components/search/InputText/InputText";
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
    <div>
      <div>
        <form onSubmit={handleSubmit(handleSubmitFilter)}>
          {/* Row 1 */}
          <div className="flex items-center space-x-2 mb-1.5">
            <Link href="/">
              <a>
                <div
                  className="hover:bg-gray-200 p-3 cursor-pointer"
                  style={{ borderRadius: "50%" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
              </a>
            </Link>
            <div className="flex-1">
              <InputText
                register={register}
                name="search"
                placeholder="Type here to search"
              />
            </div>
            <div className="hover:bg-gray-200 p-3 cursor-pointer rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-2">
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
            <Button type="submit" value="Search" />
          </div>
        </form>
      </div>

      <hr className="mt-5 mb-10" />

      <div className="flex justify-between items-center flex-wrap">
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
      </div>

      <hr className="mt-5 mb-10" />
    </div>
  );
}

export default FilterBar;
