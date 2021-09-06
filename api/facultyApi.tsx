import { apiV1, config, get, post } from "api/generic";

const facultyApi = {
  getAll() {
    const url = `${apiV1}/academic/faculties`;
    return get(url, "");
  },

  get(id) {
    const url = `${apiV1}/${id}`;
    return get(url, "");
  },

  add(data) {
    const url = "";
    return post(url, data, "");
  },
};

export default facultyApi;
