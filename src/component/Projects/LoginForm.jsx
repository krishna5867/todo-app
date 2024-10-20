import React, { useState } from 'react';
import InputField from '../common/InputField';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {login} from "../../store/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [formError, setFormError] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData((prev) => ({
      ...prev,
      [name]: value, 
    }));
  };

  const isValid = () => {
    let valid = true;
    const errors = {
      name: '',
      email: '',
      password: '',
    };

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      valid = false;
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
      valid = false;
    }

    setFormError(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      dispatch(login(formData))
      console.log(formData);
    }
  };

  return (
    <div className='w-full max-w-2xl mt-20 mx-auto border shadow-xl px-10 py-20'>
      <h3 className='font-bold text-center mb-10 text-xl'>Login</h3>
      {user && user.name }
      <form onSubmit={handleSubmit} className='w-full'>
        <InputField
          type="text"
          placeholder="Enter name"
          value={formData.name}
          name="name" 
          handleChange={handleChange}
        />
        <p className='text-red-500 mx-2'>{formError.name}</p>

        <InputField
          type="email"
          placeholder="Enter email"
          value={formData.email}
          name="email"
          handleChange={handleChange}
        />
        <p className='text-red-500 mx-2'>{formError.email}</p>

        <InputField
          type="password"
          placeholder="Enter password"
          value={formData.password}
          name="password"
          handleChange={handleChange}
        />
        <p className='text-red-500 mx-2'>{formError.password}</p>

        <button
          type="submit"
          className='w-full m-2 p-2 rounded-sm bg-blue-500 hover:bg-blue-700 text-white'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
