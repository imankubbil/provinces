import axios from "axios";

let API_URL = 'http://34.101.172.140:3005';

const request = {
  get: (arg) => 
    axios
      .get(`${API_URL}${arg}`)
      .catch(function(err) {
        return err;
      }),
  post: (resource, param) =>
    axios
      .post(`${API_URL}${resource}`, param)
      .then((res) => {
        return Promise.resolve(res);
      })
      .catch(function(err) {
        return Promise.reject(err);
      }),
  put: (resource, param) =>
    axios
      .put(`${API_URL}${resource}`, param)
      .then((res) => {
        return Promise.resolve(res);
      })
      .catch(function(err) {
        return Promise.reject(err);
      }),
  delete: (resource) =>
    axios
      .delete(`${API_URL}${resource}`)
      .then((res) => {
        return Promise.resolve(res);
      })
      .catch(function (error) {
        return Promise.reject(error);
      }),
}

export default request;