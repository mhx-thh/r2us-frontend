import axiosClient from "./axiosClient";

const facultyApi = {
  getAll() {
    const url = "/academic/faculties";
    return axiosClient.get(url);
  },

  get(id) {
    const url = `/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = "";
    return axiosClient.post(url, data);
  },

  update(id) {
    const url = `/${id}`;
    return axiosClient.delete(url);
  },

  remove(id) {},
};

export default facultyApi;
