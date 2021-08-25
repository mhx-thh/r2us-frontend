import { apiV1, get, post, put } from "api/generic";

const GroupAPI = {
  getGroups: function () {
    const url = `${apiV1}/groups/class/new-groups`;
    return get(url, "");
  },
  getGroup: function (id: string) {
    const url = `${apiV1}/groups/class/${id}`;
    return get(url, "");
  },
  getInstructors: function () {
    const url = `${apiV1}/groups/instructors`;
    return get(url, "");
  },
  getInstructor: function (id: string) {
    const url = `${apiV1}/groups/instructors/${id}`;
    return get(url, "");
  },
  getNewResources: function () {
    const url = `${apiV1}/groups/resources/new-resources`;
    return get(url, "");
  },
  getResources: function () {
    const url = `${apiV1}/groups/resources`;
    return get(url, "");
  },
  getResource: function (id: string) {
    const url = `${apiV1}/groups/resources/${id}`;
    return get(url, "");
  },
  getReviews: function () {
    const url = `${apiV1}/groups/reviews`;
    return get(url, "");
  },
  getReview: function (id: string) {
    const url = `${apiV1}/groups/reviews/${id}`;
    return get(url, "");
  },
  patchResource: function (data: any, id: string, token: string) {
    const url = `${apiV1}/groups/resources/update/${id}`;
    return put(url, data, token);
  },
  postClass: function (data: any, token: string) {
    const url = `${apiV1}/groups/class/create`;
    return post(url, data, token);
  },
  postResource: function (data: any, token: string) {
    const url = `${apiV1}/groups/resources/create`;
    console.log("Url: ", url, "Data: ", data, "Token: ", token);
    return post(url, data, token);
  },
};

export default GroupAPI;
