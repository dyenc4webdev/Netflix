import React from 'react'
import { MainLoginForm, OtherLoginForm } from '../../molecules'
import { NavLeft } from "../../molecules/LandingNavbar/app";
import { Image } from "../../atoms";
import logo from "../../../assets/Logonetflix.png";


export const SignInDiv = () => {
  return (
    <div className='signin-bg-container'>
        <div className='signin-bg'>
            <NavLeft>
              <Image src={logo} alt="logo" className="signin-logo-mob" />
            </NavLeft>
            <MainLoginForm />
            <OtherLoginForm />
        </div>
    </div>
  )
}

