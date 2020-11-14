import http from "../http-common";

const getChannelStats = (channelId:string) => {
  return http.get("/getChannelStats/"+channelId);
};

const get = id => {
  return http.get(`/tutorials/${id}`);
};

const create = data => {
  return http.post("/tutorials", data);
};

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = id => {
  return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return http.delete(`/tutorials`);
};

const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};

export default {
  getChannelStats,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};
