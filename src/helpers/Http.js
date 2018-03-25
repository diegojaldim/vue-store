import Vue from 'vue' 

const ENDPOINT = 'http://localhost:8000/api/';

export const request = (url, type = 'get', data = {}) => {
  return Vue.axios.get(ENDPOINT + url)
}
