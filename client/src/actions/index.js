import axios from 'axios';

export const login = fields => {
    console.log("fields in login: ", fields);
    axios
        .post('http://localhost:5000/api/login', {...fields})
        .then(res => {
            localStorage.setItem('token', res.data.payload)
        })
        .catch(err => console.error(err.response));
  }