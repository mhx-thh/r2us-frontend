import { apiV1, config, get, post } from "api/generic";

const userApi = {
  getInfo: function (token: string) {
    const url = `${apiV1}/user/me`;
    return get(url, token);
  },
  isAdmin: function (token: string) {
    const url = `${apiV1}/user/me`;
    return get(url, token);
  },
  getMyReviews: function (token: string) {
    const url = `${apiV1}/groups/reviews/me`;
    return get(url, token);
  },
  getMyResources: function (token: string) {
    const url = `${apiV1}/groups/resources/me`;
    return get(url, token);
  },
  getMyClass: function (token: string) {
    const url = `${apiV1}/groups/enrollment/me`;
    return get(url, token);
  },
  postEnroll: function (classId: any, token: string) {
    const url = `${apiV1}/groups/enrollment`;
    return post(url, classId, token);
  },
};
export default userApi;
