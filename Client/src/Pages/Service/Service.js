import './Service.css';
import React from 'react'
import Signup from '../Signup/Signupfarmer/Signup';
import Signupmachine from '../Signup/Signupmacin/Signupmachine';
import Signin from '../Signin/Signin';
function Service() {
  return (
    <div>
      <Signin/>
      <Signup/>
      <Signupmachine/>
    </div>
  )
}

export default Service
