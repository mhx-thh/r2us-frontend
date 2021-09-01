import { apiV1, config, get, post } from "api/generic";

const courseApi = {
  get(id) {
    const url = `/academic/courses/?facultyId=${id}`;
    return get(url, "");
  },
};

export default courseApi;
