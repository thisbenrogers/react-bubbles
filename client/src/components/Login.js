import React from "react";

import axios from 'axios';

import { useForm } from '../hooks/handleHook';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const login = () => {
    console.log("fields in login: ", fields);
    axios
        .post('http://localhost:5000/api/login', {...fields})
        .then(res => {
            localStorage.setItem('token', res.data.payload)
        })
        .catch(err => console.error(err.response));
  }


  const { fields, submit, handleChanges } = useForm(() => login());

  return (
    <>
      <form onSubmit={submit}>
          <input type="text" name='username' onChange={handleChanges} />
          <input type="password" name='password' onChange={handleChanges} />
          <button>Login</button>
      </form>
    </>
  );
};

export default Login;
