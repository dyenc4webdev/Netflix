import React from 'react'
import { Text } from '../../atoms'
import { Link } from 'react-router-dom'


export const OtherLoginForm = () => {
  return (
    <div>
      <div className='oder-login-opt'>
        <Text>New to Netflix?</Text>
        <Link>Sign up now.</Link>
      </div>
      <div className={'more-info'}>
        <Text >This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link>Learn more.</Link></Text>
      </div>
    </div>
  )
}


