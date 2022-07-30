import React from 'react'

import {Link,useNavigate} from 'react-router-dom'
function Adminheader() {

    const navigate=useNavigate();

    

    const handleLogout=()=>{

        let valid=window.confirm("Are you sure want to logout")
        if(valid){

            localStorage.removeItem("adminToken");
        navigate('/admin')
        window.alert("You have successfully logged out")
        
    

        }
        
    }
    
      return (
       <header>
    <nav className='navbar navbar-expand-lg navbar-light primary-gradient shadow'>
    <Link to="/" className='nav-link brand  mx-auto'>
    <h4 className='text-white'>Welcome to React </h4>
    </Link>
    <button className='navbar-toggler' type='button'  data-bs-toggle="collapse" data-bs-target="#navbarnav" aria-expanded="false">
        <i className='navbar-toggler-icon'></i>
    </button>
    <div className='collapse navbar-collapse' id='navbarnav'>
        <div className='me-auto'></div>
        <ul className='navbar-nav '>
            <li className='nav-item active fs-3 text-white me-1' onClick={handleLogout} style={{cursor:"pointer"}}>Logout </li>
    
        </ul>
    
    </div>
    
    </nav>
       </header>
      )
}

export default Adminheader