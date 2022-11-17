import React from 'react'
import { Text } from '../../atoms'
import { Link } from 'react-router-dom'


export const OtherLoginForm = () => {
  return (
    <div>
      <div className='oder-login-opt'>
        <Text >New to Netflix?</Text>
        <Link>Sign up now.</Link>
      </div>

    </div>
  )
}


