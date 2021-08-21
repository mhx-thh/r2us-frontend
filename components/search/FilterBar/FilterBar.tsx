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
import InstructorAPI from "api/instructorApi";
import AcademicAPI from "api/academicApi";
import review from "pages/search/review";
import Loading from "../Loading/Loading";
import { useAppSelector } from "redux/hooks";

function FilterBar({ getData }) {
  //declare variable
  const [searchvalue, setSearchvalue]= useState("")
  const [resource_filtered,setResource_filtered]=useState([])
  const [review_filtered,setReview_filtered]=useState([])

  const [resources,setResources]= useState([])
  const [reviews,setReviews]= useState([])
  const [loading,setLoading]=useState(true)
  const [onSubmit,setOnSubmit] = useState(false)

  const [uniList, setUniList] = useState([]);
  const [facultyList, setfacultyList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [academicList, setAcademicList] = useState([]);
  const [instructorsList, setInstructorsList] = useState([]);

  const router = useRouter();
  const [filter,setFilter]=useState(()=>{
    return {
      search:  router.query.search || "",
      academic: router.query.academic || "",
      faculty:  router.query.faculty || "",
      course:  router.query.course || "",
      type: router.query.type || "",
      instructor:router.query.instructor || "",
      _limit: router.query._limit || 10,
      _page:  router.query._page|| 1,
    }
  })
  
  
  console.log("text:",filter)
  //fetch data first time
  useEffect(()=>{
    async function fetchResource() {
      const response= await GroupAPI.getResources();
      setLoading(false)
      console.log("Resource: ")
      console.log(response?.data?.data?.result)
      setResources(response?.data?.data?.result)    
    }
    async function fetchReview() {
      const response= await GroupAPI.getReviews();
      setLoading(false)
      console.log("Reviews: ")
      console.log(response?.data?.data?.result)
      setReviews(response?.data?.data?.result)
    }
    async function fetchFaculty(){
      const response = await facultyApi.getAll();
      const newFaculties = response?.data?.result.map((op) => {
            const newOp = {};
            newOp["label"] = op.facultyName;
            newOp["_id"] = op._id;
            return newOp;
          });
          console.log("typeof:",typeof(newFaculties))
        setfacultyList(newFaculties);
    }
    async function fetchInstructors() {
      const response= await InstructorAPI.get()
      const newInstructors = response?.data?.data?.result.map((op) => {
          const newOp = {};
          newOp["label"] = op.instructorName;
          newOp["_id"] = op._id;
          return newOp;
      });
      setInstructorsList(newInstructors)
    }
    async function fetchAcademics() {
      const response= await AcademicAPI.get()
      const newAcademic = response?.data?.data?.result.map((op) => {
          const newOp = {};
          newOp["label"] = `${op.schoolyear} / học kì ${op.semester}`;
          newOp["_id"] = op._id;
          return newOp;
      });
      const filterAcademicList=[{
        "_id" : "0",
        "label" : "Xếp theo năm học"
      },].concat(newAcademic)
      setAcademicList(filterAcademicList)
    }
    getData(resources)
    fetchResource()
    fetchReview()
    fetchFaculty()
    fetchInstructors()
    fetchAcademics()
  },[])

  console.log("Falcutylist:",facultyList)
  console.log("Falcutylist:",instructorsList)
  console.log("quey:",typeof(router.query.search))
  console.log("filter",filter)
  console.log("resources ban dau: ",resources)
  const handleSubmitFilter = (values) => {  
    console.log("values:",values)
    setFilter({
      ...values,
      _limit: 10, 
      _page: 1, 
    });
    const paramString = queryString.stringify(values);
    if (router.pathname === "/search"){
      router.push(`/search?${paramString}`,undefined,{scroll : false});
    }
    if (router.pathname==="/search/review"){
      router.push(`/search/review?${paramString}`,undefined,{scroll : false})
    }
  };
  console.log("resourcesss: ",resources)
  
  useEffect(()=>{
    function computeFilter(){
      console.log("compiite:",filter)
      if (router.pathname === "/search"){ 
        const getMatchResource=(resource)=>{
          return resource?.classId?.courseId?._id.indexOf(filter.course) > -1 &&
                  resource?.classId?.courseId?.facultyId?._id.indexOf(filter.faculty) > -1 &&
                  resource?.classId?.instructorId?._id.indexOf(filter.instructor) >-1 &&
                  resource?.classId?.academicId?._id.indexOf(filter.academic) >-1 &&
                  resource?.resourceName.indexOf(filter.search) > -1
        }
        setResource_filtered(resources.filter(getMatchResource)) ;
        console.log("resource filter: ", resource_filtered)
      }
      if (router.pathname==="/search/review"){
        const getMatchReview=(review)=>{
          return review?.classId?.courseId?._id.indexOf(filter.course) > -1 &&
                  review?.classId?.courseId?.facultyId?._id.indexOf(filter.faculty) > -1 &&
                  review?.classId?.instructorId?._id.indexOf(filter.instructor) >-1 &&
                  review?.classId?.academicId?._id.indexOf(filter.academic) >-1 &&
                  review?.review.indexOf(filter.search) > -1
        } 
        setReview_filtered(reviews.filter(getMatchReview)) ;
      }
    }
    computeFilter()
  },[filter])
  
  useEffect(()=>{
    function set() {
      setFilter(() => {
        return {
          search:  router.query.search || "",
          academic:  router.query.academic || "",
          faculty:  router.query.faculty || "", 
          course:  router.query.course || "",
          type: router.query.type || "",
          instructor: router.query.instructor || "",
          _limit: router.query._limit || 10,
          _page:  router.query._page || 1,
        }
      })
    }
    set()
  },[router.query.search,router.query.academic,router.query.faculty,router.query.course,router.query.instructor])
  console.log("resourcefilterd:",resource_filtered)
  console.log("reviewfilterd:",review_filtered)
  if (router.pathname ==="/search"){
    if (filter.course=="" && filter.faculty=="" && filter.instructor=="" && filter.search=="" )
    {
      getData(resources)
    }
    if (filter.course !=="" || filter.faculty !==""||filter.instructor !=="" || filter.search !=="" || filter.academic !== "")
    {
      if (filter.academic ==="0")
      {
        const temAcademicList=[...academicList]
        temAcademicList.splice(0,1)
        temAcademicList.sort(function(a,b){
          if ( a.label > b.label ){
            return -1;
          }
          if ( a.label< b.label ){
            return 1;
          }
          return 0;
        })
        const a=[]
        const b=[]
        console.log("flag:",temAcademicList)
        temAcademicList.map((value)=>{
          a.push([resources.filter(resource => {
            return resource?.classId?.academicId?._id.indexOf(value._id)})])
          b.push(value.label)
          console.log("a:",a)
        })
        const newa = temAcademicList.map((op)=>{
          const a ={}
          const b=[]
          a["label"]=op.label
          a["value"] = ([resources.filter(resource => {
            return resource?.classId?.academicId?._id.indexOf(op._id) > -1 })])
          return a
        })
        console.log("newa:",newa)
        getData(resource_filtered,newa)
      }
      else {getData(resource_filtered)}
    }
  }
  if (router.pathname==="/search/review"){
    if (filter.course=="" && filter.faculty=="" && filter.instructor=="" && filter.search=="" )
    {
      getData(reviews)
    }
    if (filter.course !=="" || filter.faculty !==""||filter.instructor !=="" || filter.search !=="")
    {
      getData(review_filtered);
    }
  }



  // Form for filter
  const { register, handleSubmit } = useForm();

  const filterListApi = {
    faculty: courseApi,
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const api = filterListApi[name];
    const fetchData = async (api) => {
      let options;
      const data = await api.get(value);
      options = data?.data?.result;


      switch (name) {
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
    }
    setOnSubmit(!onSubmit)
    if (api) fetchData(api);
  };

  console.log("Router query: ",router.query )
  const handleMoveToTab = (path: string | UrlObject) => {
    router.push(path,undefined,{scroll:false});
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
              name="faculty"
              id="Khoa"
              register={register}
              onHandleChange={handleChange}
              options={facultyList}
              placeholder="Chọn Khoa"
            />
            <SelectOption
              name="course"
              id="Môn học"
              register={register}
              onHandleChange={handleChange}
              options={courseList}
              placeholder="Chọn Môn"
            />
            <SelectOption
              name="academic"
              id="Năm học"
              register={register}
              onHandleChange={handleChange}
              options={academicList}
              placeholder="Năm học"
            />
             <SelectOption
              name="instructor"
              id="Giáo viên"
              register={register}
              onHandleChange={handleChange}
              options={instructorsList}
              placeholder="Giáo viên"
            />
            <div>
              <br/>
              <Button type="submit" value="Áp dụng" />
            </div>
          </div>
        </form>
      </div>
      <hr className="mt-5 mb-10" />
      <hr className="mt-5 mb-10" /> 
    </div>
  );
}

export default FilterBar;
