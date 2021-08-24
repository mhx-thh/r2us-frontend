import { apiV1, config, get } from "api/generic";

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
};
export default userApi;
