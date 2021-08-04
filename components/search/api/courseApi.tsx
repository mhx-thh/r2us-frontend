import axiosClient from "./axiosClient";

const courseApi = {
  getAll(params) {
    const url = "/academic/courses";
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/academic/courses/?facultyId=${id}`;
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

export default courseApi;
