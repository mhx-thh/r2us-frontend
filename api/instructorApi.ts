import { apiV1, config, get } from "api/generic";

const InstructorAPI = {
  get: function () {
    const url = `${apiV1}/groups/instructors`;
    return get(url, "");
  },
  getInstructor: function (id: string) {
    const url = `${apiV1}/groups/instructors/${id}`;
    return get(url, "");
  },
};

export default InstructorAPI;
