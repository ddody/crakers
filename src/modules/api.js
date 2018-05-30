import axios from 'axios';

export function getCRAKERS(data = '') {
  return axios.get(`https://www.crakers.co.kr/api/common/${data}`);
}
