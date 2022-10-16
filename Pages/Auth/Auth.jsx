import React,{useState} from 'react'
import './Auth.css'
import {Link} from 'react-router-dom'
import {BsHeadsetVr} from "react-icons/bs"
import google from '../../asset/google.png'

function Auth() {

      const [isSignup , setIssignup] = useState(false)

      const handleswitch = () =>
      {
        setIssignup(!isSignup)
      }

  return (
    <div className='auth-section'>
      <div className="auth-container-2">
      <form>
        {!isSignup && <h1>Log in collabrate<br /> with "assignment" </h1>
        }
        {isSignup && <h1>create account <br /> with "assignment" </h1>}
       

        

            <label htmlFor='continue'>
             <button className='btn-auth-style'><Link><img src={google} style={{width:'17px', height:'18px'}} />&nbsp;Continue with Google</Link></button>
            </label>
          
          
          <label htmlFor='email'>
             <input type='email' name='email' id='email' placeholder="Enter Email..." />
          </label>

          <label htmlFor='password'>
             <input type='password' name='password' id='password'  placeholder="Enter password" />
          </label>
         
          <button type='submit' className='auth-btn'>{isSignup ? 'Create Account' : 'login' }</button>
          
        </form>
        <div className='auth-blow'>
          {isSignup ? <Link to="/">Forget Password</Link> : <></>}
        {isSignup ? 'Already have an account?' : 'Don’t have an account?'}
        <button type='button' className='handle-switch-btn' onClick={handleswitch}>{isSignup ? 'Login' : 'Create  account'} </button>
        </div>
      </div>
    
      

    </div>
  )
}

export default Auth