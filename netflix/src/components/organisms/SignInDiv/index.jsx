import React from 'react'
import { MainLoginForm, OtherLoginForm } from '../../molecules'

export const SignInDiv = () => {
  return (
    <div className='signin-bg-container'>
        <div className='signin-bg'>
            <MainLoginForm />
            <OtherLoginForm />
        </div>
    </div>
  )
}

