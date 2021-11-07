import { apiV1, config, delele, get, patch, post } from "api/generic";

const courseApi = {
  getNew() {
    const url = `${apiV1}/blog/new-blogs`;
    return get(url, "");
  },
  get(id: string) {
    const url = `${apiV1}/blog/${id}`;
    return get(url, "");
  },
  getAll() {
    const url = `${apiV1}/blog`;
    return get(url, "");
  },
  create(data, token) {
    const url = `${apiV1}/blog`;
    return post(url, data, token);
  },
  update(data, id, token) {
    const url = `${apiV1}/blog/${id}`;
    return patch(url, data, token);
  },
  delete(id, token) {
    const url = `${apiV1}/blog/${id}`;
    return delele(url, token);
  },
};

export default courseApi;
