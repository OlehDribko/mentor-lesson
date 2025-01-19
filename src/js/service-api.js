import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';

export const fetchAllRecepie = () => {
  return fetch(`${BASE_URL}/recipes`)
    .then(response => {
      if (!response.ok) {
        throw new Error('UPS');
      }
      return response.json();
    })
    .then(data => {
      const { results } = data;

      return results;
    })
    .catch(error => {
      console.log(error);
    });
}
export const  getPopularRecepies = () => {
  return axios
    .get(`${BASE_URL}/recipes/popular`)
    .then(response => {
      const { data } = response;
console.log(data);
      return data;
    })
    .catch(error => {
      console.log(error);
    });
}
