import axios from "axios";
import { apiV1, config, get } from "api/generic";

const NewClassAPI = {
  get: function (token: string) {
    const url = "/group/class";
    return get(url, "");
  },
};
export default NewClassAPI;
