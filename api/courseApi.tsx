import { apiV1, config, delele, get, patch, post } from "api/generic";

const courseApi = {
  get(id) {
    const url = `${apiV1}/academic/courses?facultyId=${id}`;
    return get(url, "");
  },
  getCoursetoFaculty(id: string) {
    const url = `${apiV1}/academic/courses?facultyId__eq=${id}`;
    return get(url, "");
  },
  postCourse: function (data: any, token: string) {
    const url = `${apiV1}/academic/courses/create`;
    return post(url, data, token);
  },
  deleteCourse: function (id: string, token: string) {
    const url = `${apiV1}/academic/courses/delete/${id}`;
    return delele(url, token);
  },
  getACourse(id: string) {
    const url = `${apiV1}/academic/courses/${id}`;
    return get(url, "");
  },
};

export default courseApi;
