import { apiV1, config, get } from "api/generic";

const AcademicAPI = {
  get: function () {
    const url = `${apiV1}/academic`;
    return get(url, "");
  },
  getAcademic: function (id: string) {
    const url = `${apiV1}/academic/${id}`;
    return get(url, "");
  },
};

export default AcademicAPI;
