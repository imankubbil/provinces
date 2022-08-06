import request from './request';

const provinces = {
  getListProvinces: async() => {
    return new Promise((resolve, reject) => {
      request
        .get(`/api/propinsi/list`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.response));
    });
  },

  addProvince: async(payload) => {
    return new Promise((resolve, reject) => {
      request
        .post(`/api/propinsi/add`, payload)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.response));
    });
  },

  getProvince: async(id) => {
    return new Promise((resolve, reject) => {
      request
        .get(`/api/propinsi/viewedit?id_prov=${id}`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.response));
    });
  },

  updateProvince: async(payload) => {
    return new Promise((resolve, reject) => {
      request
        .post(`/api/propinsi/update`, payload)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.response));
    })
  },

  deleteProvince: async(payload) => {
    return new Promise((resolve, reject) => {
      request
        .post(`/api/propinsi/delete`, payload)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.response));
    })
  },
}

export default provinces;