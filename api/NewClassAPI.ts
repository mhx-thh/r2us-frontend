import axios from "axios";
import { apiV1, config, get } from "api/generic";

const NewClassAPI = {
  get: function () {
    const url = `${apiV1}/group/class`;
    return get(url, "");
  },
};
export default NewClassAPI;
