import { apiV1, config, get } from "api/generic";

const AcademicAPI = {
  get: function () {
    const url = `${apiV1}/academic/semesters`;
    return get(url, "");
  },
  getAcademic: function (id: string) {
    const url = `${apiV1}/academic/semesters/${id}`;
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
};

export default AcademicAPI;
