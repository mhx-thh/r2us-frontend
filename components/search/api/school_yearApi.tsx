import axiosClient from "./axiosClient";

const school_yearApi = {
  getAll(params) {
    const url = "/school_year";
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

export default school_yearApi;
