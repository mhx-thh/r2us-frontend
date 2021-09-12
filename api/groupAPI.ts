import { apiV1, delele, get, patch, post, put } from "api/generic";

const GroupAPI = {
  getNewGroups: function () {
    const url = `${apiV1}/groups/class/new-groups`;
    return get(url, "");
  },
  getGroups: function () {
    const url = `${apiV1}/groups/class`;
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
    const url = `${apiV1}/groups/resources?${id}`;
    return get(url, "");
  },
  getReviews: function () {
    const url = `${apiV1}/groups/reviews`;
    return get(url, "");
  },
  getNewReviews: function () {
    const url = `${apiV1}/groups/reviews/new-reviews`;
    return get(url, "");
  },
  getReview: function (id: string) {
    const url = `${apiV1}/groups/reviews?${id}`;
    return get(url, "");
  },
  patchResource: function (data: any, id: string, token: string) {
    const url = `${apiV1}/groups/resources/${id}`;
    return patch(url, data, token);
  },
  patchReview: function (data: any, id: string, token: string) {
    const url = `${apiV1}/groups/reviews/${id}`;
    return patch(url, data, token);
  },
  postClass: function (data: any, token: string) {
    const url = `${apiV1}/groups/class/create`;
    return post(url, data, token);
  },
  postResource: function (data: any, token: string) {
    const url = `${apiV1}/groups/resources`;
    return post(url, data, token);
  },
  postReview: function (data: any, token: string) {
    const url = `${apiV1}/groups/reviews`;
    return post(url, data, token);
  },
  deleteResource: function (id: string, token: string) {
    const url = `${apiV1}/groups/resources/${id}`;
    return delele(url, token);
  },
  deleteReview: function (id: string, token: string) {
    const url = `${apiV1}/groups/reviews/${id}`;
    return delele(url, token);
  },
  getRole: function (classId: string, token: string) {
    const url = `${apiV1}/groups/enrollment/me?classId__eq=${classId}`;
    return get(url, token);
  },
  patchClass: function (data: any, id: string, token: string) {
    const url = `${apiV1}/groups/class/${id}`;
    return patch(url, data, token);
  },
  deleteClass: function (id: string, token: string) {
    const url = `${apiV1}/groups/class/${id}`;
    return delele(url, token);
  },
  getMembers: function (classId: any, token: string) {
    const url = `${apiV1}/groups/enrollment?classId__eq=${classId}`;
    return get(url, token);
  },
};

export default GroupAPI;
