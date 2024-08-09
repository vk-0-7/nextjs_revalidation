"use client"

import axios from 'axios';
import { calcLength } from 'framer-motion';
import React, { useState } from 'react';



const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const validate = () => {
    let formIsValid = true;
    let errors = {};

    // Name validation
    if (!formData.name) {
      formIsValid = false;
      errors.name = 'Name is required.';
    }

    // Email validation
    if (!formData.email) {
      formIsValid = false;
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      errors.email = 'Email is invalid.';
    }

    // Password validation
    if (!formData.password) {
      formIsValid = false;
      errors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      formIsValid = false;
      errors.password = 'Password must be at least 6 characters long.';
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    if (validate()) {
       try {
         const res=await axios.post('http://localhost:8000/api/register',formData)
         console.log(res);
         if (res.status == 200) {
           
         }
         
       } catch (error) {
        console.log(error)
       }
    } else {
      console.log('Form has errors.');
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span style={{ color: 'red' }}>{errors.password}</span>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
     
    </div>
  );
};

export default Form;

export const runtime = 'edge';