import { apiV1, config, get } from "api/generic";

const NewClassAPI = {
  get: function () {
    const url = `${apiV1}/groups/class`;
    return get(url, "");
  },
  getGroup: function (id: string) {
    const url = `${apiV1}/groups/class/${id}`;
    return get(url, "");
  },
};

export default NewClassAPI;
