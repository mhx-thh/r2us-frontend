import axiosClient from "./axiosClient";

const uniApi = {
  getAll(params) {
    const url = "/uni";
    return axiosClient.get(url, { params });
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

export default uniApi;
