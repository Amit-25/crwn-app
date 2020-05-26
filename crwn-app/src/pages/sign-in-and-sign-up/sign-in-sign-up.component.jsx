import React from 'react';
import SignIn from '../../component/signin/signin.component';
import SignUp from '../../component/sign-up/sign-up.component';
import '../../styles/sign-in-sign-up/sign-in-sign-up.styles.scss';

const SignInAndSignUp = () =>(
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;