import React from 'react'
import { Button, Input, Text } from '../../atoms'
import { Link } from 'react-router-dom'

export const MainLoginForm = () => {
  return (
    <div className='main-login'>
        <Text className='signin-h1' type={'h1'}>Sign In</Text>
        <Input className={'signin-input'} placeholder={'Email or phone number'}  type={'email'} />
        <Input className={'signin-input'} placeholder={'Password'}  type={'password'}/>
        <Button className={'signin-cta'}>Sign In</Button>
        <div className='rememberme-cont'>
          <Input className={'rememberme'} value={true} label={'Remember Me'} type={'checkbox'}/>
          <Link>
            <Text>Need help?</Text>
          </Link>
        </div>

    </div>
  )
}
