import { apiV1, config, get, post } from "api/generic";

const facultyApi = {
  getAll() {
    const url = "/academic/faculties";
    return get(url, "");
  },

  get(id) {
    const url = `/${id}`;
    return get(url, "");
  },

  add(data) {
    const url = "";
    return post(url, data, "");
  },
};

export default facultyApi;
