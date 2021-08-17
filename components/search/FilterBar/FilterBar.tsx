import React, { useEffect, useMemo, useState } from "react";
import Button from "components/search/Button/Button";
import SearchBar from "components/search/SearchBar/SearchBar";
import SelectOption from "components/search/SelectOption/SelectOption";
import { useForm } from "react-hook-form";
import facultyApi from "components/search/api/facultyApi";
import courseApi from "components/search/api/courseApi";
import { useRouter } from "next/router";
import queryString from "query-string";
import GroupAPI from "api/groupAPI";
import Documents from "../Documents/Documents";
import LoginSuccess from "pages/search";
import { route } from "next/dist/next-server/server/router";
import Link from "next/link";
import { UrlObject } from "url";

function FilterBar({ getData }) {
  const [searchvalue, setSearchvalue]= useState("")
  const [resource_filtered,setResource_filtered]=useState([])
  const [review_filtered,setReview_filtered]=useState([])

  const [resources,setResources]= useState([])
  const [reviews,setReviews]= useState([])

  const [uniList, setUniList] = useState([]);
  const [facultyList, setfacultyList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  
  const router = useRouter();
  useEffect(()=>{
    async function fetchResource() {
      const response= await GroupAPI.getResources();
      console.log("Resource: ")
      console.log(response?.data?.data?.result)
      setResources(response?.data?.data?.result)
    }
    async function fetchReview() {
      const response= await GroupAPI.getReviews();
      console.log("Reviews: ")
      console.log(response?.data?.data?.result)
      setReviews(response?.data?.data?.result)
    }
    fetchResource()
    fetchReview()
  },[])
  console.log("quey:",typeof(router.query.search))
  const [filter, setFilter] = useState({
    search:  "",
    uni:  "",
    faculty:  "",
    course:  "",
    type: "",
    _limit: 10,
    _page:  1,
    
  });
  
  console.log("filter",filter)
  const handleSubmitFilter = (values) => {  
    console.log("values:",values)
    setFilter({
      ...values,
      _limit: 10, 
      _page: 1, 
    });

  };
  console.log("Router:",router.query)
  useEffect(()=>{
    const paramString = queryString.stringify(filter);
    if (router.pathname === "/search"){
      router.push(`/search?${paramString}`,undefined,{scroll:false});
    }
    if (router.pathname==="/search/review"){
      router.push(`/search/review?${paramString}`,undefined,{scroll:false})
    }
    if (router.pathname === "/search"){
      const getMatchResource=(resource)=>{
        return resource?.classId?.courseId?._id.indexOf(filter.course) > -1 &&
                resource?.classId?.courseId?.facultyId?._id.indexOf(filter.faculty) > -1 &&
                resource?.resourceName.indexOf(filter.search) > -1
      }
      setResource_filtered(resources.filter(getMatchResource)) ;
    }
    if (router.pathname==="/search/review"){
      const getMatchReview=(review)=>{
        return review?.classId?.courseId?._id.indexOf(filter.course) > -1 &&
                review?.classId?.courseId?.facultyId?._id.indexOf(filter.faculty) > -1 &&
                review?.review.indexOf(filter.search) > -1
      } 
      setReview_filtered(reviews.filter(getMatchReview)) ;
    }

  },[filter._limit,filter._page, filter.course,filter.faculty,filter.search,filter.type,filter.uni])
  // useEffect(()=>{
  //   setFilter({
  //     search:""+router.query.search ,
  //     uni:  ""+router.query.uni,
  //     faculty:  ""+router.query.faculty,
  //     course:  ""+router.query.course,
  //     type: ""+router.query.type,
  //     _limit: Number(router.query._limit),
  //     _page:  Number(router.query._page),
  //   })
  // },[router.query])
  console.log("resourcefilterd:",resource_filtered)
  console.log("reviewfilterd:",review_filtered)
  if (router.pathname ==="/search"){
    getData(resource_filtered);
  }
  if (router.pathname==="/search/review"){
    getData(review_filtered);
  }
  useEffect(() => {
    const fetchDocuments = async () => {
      const response = await facultyApi.getAll();
      const newDocuments = response.data.result;
      //getData(newDocuments);
    };
    fetchDocuments();
  }, [filter]);

  // Form for filter
  const { register, handleSubmit } = useForm();

  const filterListApi = {
    uni: facultyApi,
    faculty: courseApi,
  };

  

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
  useEffect(()=>{
    
  })
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const api = filterListApi[name];

    const fetchData = async (api) => {
      let options;
      if (name == "uni") {
        const data = await api.getAll();
        options = data.data.result;
      } else {
        const data = await api.get(value);
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

  const handleMoveToTab = (path: string | UrlObject) => {
    router.push(path,undefined,{scroll:false,shallow:true});
  };
 
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
        <form onSubmit={handleSubmit(handleSubmitFilter)} >
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
            {router.pathname==="/search" && 
            <SelectOption
              name="type"
              register={register}
              onHandleChange={handleChange}
              options={typeList}
              placeholder="Chọn Loại Tài Liệu"
            />
            }
             {router.pathname==="/search/review" && 
            <SelectOption
              name="type"
              register={register}
              onHandleChange={handleChange}
              options={typeList}
              placeholder="Chọn loại cảm nhận"
            />
            }
            <Button type="submit" value="Áp dụng" />
          </div>
        </form>
      </div>

      <hr className="mt-5 mb-10" />

      <div className="flex justify-between items-center flex-wrap px-24">
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
              <Button type="button" value="Review"  />
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
