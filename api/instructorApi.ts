import { apiV1, config, get } from "api/generic";

const InstructorAPI = {
  get: function () {
    const url = `${apiV1}/academic/intructors`;
    return get(url, "");
  },
  getInstructor: function (id: string) {
    const url = `${apiV1}/academic/intructors/${id}`;
    return get(url, "");
  },
  getInstructors: function () {
    const url = `${apiV1}/academic/intructors`;
    return get(url, "");
  },
};

export default InstructorAPI;
