import axios from 'axios';

export default function HttpHolder(){

    return axios.create({
        baseURL:"https://localhost:44371/",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
            },
        crossdomain: true
      });
}