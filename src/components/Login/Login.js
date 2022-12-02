import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

async function loginUser(credentials) {
    console.log("credentials", credentials)
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
        username,
        password
    });
    console.log("token", token)
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <h1 className="mt-5">Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label className="d-block mb-3">
          <p className="mb-2">Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label className="d-block mb-3">
          <p className="mb-2">Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};