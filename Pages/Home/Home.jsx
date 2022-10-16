import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import Figmai from  '../../asset/figm.png'
import google from '../../asset/google.png'


function Home() {
  return (
    <div className='home'>
      
        <div className='home-item'>
          <div><img src={Figmai} style={{width:'36px', height:'35px'}} /><b>Welcome to figma!</b> Create an account to edit and collaborate on this file</div>
          <button className='btn-style-one'><Link><img src={google} style={{width:'17px', height:'18px'}} />&nbsp;Continue with Google</Link></button>
          <button className='btn-style-two'><Link to="/" >Sign up with email</Link> </button>
        </div>
    </div>
  )
}

export default Home