import { apiV1, config, delele, get, patch, post } from "api/generic";

const AcademicAPI = {
  get: function () {
    const url = `${apiV1}/academic/semesters`;
    return get(url, "");
  },
  getAcademic: function (id: string) {
    const url = `${apiV1}/academic/semesters?${id}`;
    return get(url, "");
  },
  getSchoolYears: function () {
    const url = `${apiV1}/academic/semesters`;
    return get(url, "");
  },
  getFalcuties: function () {
    const url = `${apiV1}/academic/faculties`;
    return get(url, "");
  },
  getCourses: function () {
    const url = `${apiV1}/academic/courses`;
    return get(url, "");
  },
  getIntructors: function () {
    const url = `${apiV1}/academic/intructors`;
    return get(url, "");
  },
  postSemester: function (data: any, token: string) {
    const url = `${apiV1}/academic/semesters/create`;
    return post(url, data, token);
  },
  updateAcademic(id: any, data: any, token: string) {
    const url = `${apiV1}/academic/semesters/update/${id}`;
    return patch(url, data, token);
  },
  deleteSemester: function (id: string, token: string) {
    const url = `${apiV1}/academic/semesters/delete/${id}`;
    return delele(url, token);
  },
};

export default AcademicAPI;
