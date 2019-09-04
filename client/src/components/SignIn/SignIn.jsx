import React, { useState } from 'react';
import { connect } from 'react-redux'

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { googleSignInStart, emailSignInStart } from '../../redux/User/userActions';

import {
  SignInContainer, 
  SignInTitle, 
  ButtonsBarContainer
} from './SignInStyles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [ userCredentials, setUserCredentials ] = useState({ email: '', password: '' })

  const { email, password } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();

   emailSignInStart(email, password)
  }

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  }

  return(
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      
      <form onSubmit={handleSubmit} >
        <FormInput 
          name='email' 
          type='email' 
          value={email} 
          handleChange={handleChange} 
          label='email' 
          required 
        />
        <FormInput 
          name='password'
          type='password' 
          value={password} 
          handleChange={handleChange} 
          label='password' 
          required 
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> Sign in with Google </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()), 
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);