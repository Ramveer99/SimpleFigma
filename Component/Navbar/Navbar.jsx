import React from 'react'
import "../Navbar/Navbar.css"
import {Link} from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import {FiFigma} from 'react-icons/fi'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {TfiHandStop} from 'react-icons/tfi'
import {BsHeadphones} from 'react-icons/bs'
import {IoMdArrowDropright} from 'react-icons/io'

function Navbar() {
    var User = "xyz"
  return (
    <div className="main-nav">
        <div className='navbar'>
            <div className="nav-two">
              <Link to="/" className='nav-item ' style={{fontSize:"24px"}} >{<FiFigma />}  {<MdOutlineKeyboardArrowDown />} </Link>
              <Link to="/" className='nav-item nav-btn' style={{fontSize:"24px"}}> {<TfiHandStop />}  </Link> 
            </div>

             
             
              <div className="">
                     <Link to="/" className='assi-link' style={{color:"#dbdedf"}}>Assignment </Link>
                     <Link to="" className="nav-item nav-btn">/Assignment</Link>

              </div>

              <div className='nav-auth'>
                    <Link to="" className="nav-item nav-btn" style={{paddingRight:"14px", fontSize:"24px"}}>{<BsHeadphones />} </Link>&nbsp;

                    { User===null ?
                   <Link to='/Auth'className='nav-item nav-links' style={{paddingRight:"10px"}}>Login</Link> :
                    <>
                   <Avatar backgroundColor='#dbdedf' px='14px' py='14px' borderRadius='48%' color='white' ><Link to='/' style={{color:'white', textDecoration:'none', paddingLeft:"4px" ,paddingRight:"6px"}} >R</Link></Avatar>&nbsp;
                   <Avatar backgroundColor='#e20707' px='14px' py='14px' borderRadius='48%' color='white' ><Link to='/' style={{color:'white', textDecoration:'none', paddingLeft:"4px" ,paddingRight:"6px"}} >S</Link></Avatar>&nbsp;
                   <Avatar backgroundColor='#dbf110' px='14px' py='14px' borderRadius='48%' color='white' ><Link to='/' style={{color:'white', textDecoration:'none', paddingLeft:"4px" ,paddingRight:"6px"}} >P</Link></Avatar>&nbsp;
                    <Link to="/Auth"> <button  className='nav-item nav-links' >Login</button> </Link>
                   </>
                   }


                 <Link to="/" style={{paddingLeft:"8px", color:"white", fontSize:'32px'}} > {<IoMdArrowDropright />} </Link>
                 <Link to="/" style={{paddingLeft:"8px", color:"white",}} > 10% {<MdOutlineKeyboardArrowDown />} </Link>
             </div>

        </div>
     </div>
  )
}

export default Navbar