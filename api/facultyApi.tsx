import { apiV1, config, delele, get, patch, post, put } from "api/generic";

const facultyApi = {
  getAll() {
    const url = `${apiV1}/academic/faculties`;
    return get(url, "");
  },

  get(id) {
    const url = `${apiV1}?${id}`;
    return get(url, "");
  },

  add(data) {
    const url = "";
    return post(url, data, "");
  },
  postFaculty: function (data: any, token: string) {
    const url = `${apiV1}/academic/faculties/create`;
    return post(url, data, token);
  },
  updateFaculty: function (id: any, data: any, token: string) {
    const url = `${apiV1}/academic/faculties/update/${id}`;
    return patch(url, data, token);
  },
  deleteFaculty: function (id: string, token: string) {
    const url = `${apiV1}/academic/faculties/delete/${id}`;
    return delele(url, token);
  },
};

export default facultyApi;
