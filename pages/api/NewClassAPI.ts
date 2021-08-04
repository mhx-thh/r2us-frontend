import axios from "axios";
import { apiV1, config, get } from "api/generic";


const NewClassAPI = {
    get: function (token: string) {
        const url = ${apiV1}/classes;
        return get(url, "");
    },
};
export default NewClassAPI;