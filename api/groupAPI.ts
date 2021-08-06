import { apiV1, config, get } from "api/generic";

const GroupAPI = {
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
};

export default GroupAPI;
