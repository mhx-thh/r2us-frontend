import axios from "axios";
import { apiV1, config, get } from "api/generic";

const NewClassAPI = {
  get: function () {
    const url = `https://greensummer2021-r2us.herokuapp.com/api/v1/groups/class`;
    return get(url, "");
  },
};
export default NewClassAPI;
