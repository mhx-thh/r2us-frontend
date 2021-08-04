import axiosClient from "./axiosClient";

const typeApi = {
  getAll(params) {
    const url = "/type";
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

export default typeApi;
