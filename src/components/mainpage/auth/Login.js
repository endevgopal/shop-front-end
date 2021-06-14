import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './login.css';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onchangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const login = async (e) => {
    e.preventDefault();
    try {
      await axios.post( `https://acdc-api21.herokuapp.com/user/login`, { ...user });
      toast.success('LogIn Successful');
      localStorage.setItem('userLogin', true);
      window.location.href = '/';
    } catch (error) {
      console.log(error.response.data.msg);
      toast.error(`${error.response.data.msg}`);
    }
  };
  return (
    <div className="login_page">
      <h2>LOGIN</h2>
      <form onSubmit={login}>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={user.email}
          onChange={onchangeInput}
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          value={user.password}
          onChange={onchangeInput}
        />

        <div className="row">
          <button type="submit">Login</button>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
