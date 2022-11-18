import React from 'react'
import { useEffect, useState } from 'react';
import { Button, Input, Text } from '../../atoms'
import { Link, useNavigate } from 'react-router-dom'


export const MainLoginForm = () => {

  const initialData = {
    email: "",
    password: "",
    address: "",
  };
  const navigate = useNavigate
  const [formValues, setFormValues] = useState(initialData);
  const handleSubmit = () => {
    setFormValues(initialData);
    dispatch(loginAsync(formValues));
    navigate("/homeadults");
  };
  const handleChange = (e) =>
    setFormValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/homeadults");
    }
  });


  return (
    <div className='main-login'>
        <Text className='signin-h1' type={'h1'}>Sign In</Text>
        <Input className={'signin-input'} placeholder={'Email or phone number'}  type={'email'} onChange={handleChange}/>
        <Input className={'signin-input'} placeholder={'Password'}  type={'password'}onChange={handleChange}/>
        <Button className={'signin-cta'}  onClick={handleSubmit}>Sign In</Button>
        <div className='rememberme-cont'>
          <Input className={'rememberme'} value={true} label={'Remember Me'} type={'checkbox'}/>
          <Link>
            <Text>Need help?</Text>
          </Link>
        </div>

    </div>
  )
}
