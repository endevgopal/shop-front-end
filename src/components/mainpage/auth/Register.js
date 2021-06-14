import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onchangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post( `https://acdc-api21.herokuapp.com/user/register`, { ...user });
      toast.success('Registration Completed.');
      localStorage.setItem('userLogin', true);
      window.location.href = '/';
    } catch (error) {
      console.log(error.response.data.msg);
      toast.error(`${error.response.data.msg}`);
    }
  };

  return (
    <div className="login_page">
      <h2>Registration</h2>
      <form onSubmit={register}>
        <input
          type="name"
          name="name"
          required
          placeholder="Name"
          value={user.name}
          onChange={onchangeInput}
        />
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
          <button type="submit">Register</button>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
