import { apiV1, config, delele, get, patch, post } from "api/generic";

const InstructorAPI = {
  get: function () {
    const url = `${apiV1}/academic/intructors`;
    return get(url, "");
  },
  getAll() {
    const url = `${apiV1}/academic/intructors`;
    return get(url, "");
  },
  getInstructor: function (id: string) {
    const url = `${apiV1}/academic/intructors?${id}`;
    return get(url, "");
  },
  getInstructors: function () {
    const url = `${apiV1}/academic/intructors`;
    return get(url, "");
  },
  postInstructor: function (data: any, token: string) {
    const url = `${apiV1}/academic/intructors/create`;
    return post(url, data, token);
  },
  deleteInstructor: function (id: string, token: string) {
    const url = `${apiV1}/academic/intructors/delete/${id}`;
    return delele(url, token);
  },
  updateInstructor: function (id: any, data: any, token: string) {
    const url = `${apiV1}/academic/intructors/update/${id}`;
    return patch(url, data, token);
  },
  patchInstructor: function (data: any, id: string, token: string) {
    const url = `${apiV1}/academic/intructors/update/${id}`;
    return patch(url, data, token);
  },
};

export default InstructorAPI;
