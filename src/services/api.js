import axios from 'axios';
import {set} from 'lodash';


const baseURL = 'http://localhost:3001/'

export const apiURL = baseURL


export const api = axios.create({
    baseURL: baseURL,
    headers: {"Content-Type" : "application/json"},
    headers: {"Content-Type" : "application/json"},
});

export const createSession = async (email, password) => {
  return await api.post(
         '/auth/login', 
        { "email": email, "password": password  }
  ).then((response) => {
          return response;
          const {token} = response.headers;   // Should the token include the whole header?
          console.log(response.headers);
          localStorage.setItem('token', token);
  })
    .catch(function(err) {
          console.log('Apresentação do erro', err);
          return err;
    });
}


