import React from 'react'
import {Link} from 'react-router-dom'

function BaseLogin(props) {
  return (
    <div className='col-md-12 col-lg-6  bg-img  d-flex justify-content-center align-items-center'>

        <div className='info'>
            <div className='logo clearfix'>
            <a href="" className='nav-brand'>logo</a>
            </div>

            <div className='btn-section clearfix '>
                <Link to='/login'>
                <button className='btn btn-primary default-bg nav-link link-btn'> Login</button>
                </Link>
{props.admin ? "" :<Link to='/signup'>
           <button className='btn btn-primary default-bg nav-link link-btn'> Register</button>
           </Link>}
           
         

            </div>

            </div>        
    </div>
  )
}

export default BaseLogin