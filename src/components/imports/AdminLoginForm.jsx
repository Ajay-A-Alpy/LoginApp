import React from 'react'

function AdminLoginForm(props) {
  

    let {handlesubmit,setEmail,setPassword,message}=props.loginState
 

  return (
    <div className='col-md-12 col-lg-6 d-flex align-items-center'>
    <div className="form-section">
    <div className="title">
      <h3 className='text-danger bg-light'>
     ADMIN LOGIN
      </h3>
    </div>
    <div className="login-inner-form">
      <form method="POST" onSubmit={handlesubmit}>
    
    <div className="form-group form-box">
<h4 className='text-danger'>{message}</h4>
      <input type="text"  id='email'  onChange={e=>setEmail(e.target.value)} className='input-text' placeholder='Email'/>
      <i class="bi bi-envelope-fill icon "></i>
      </div>
      <div className="form-group form-box">
      <input type="password"  id='password' onChange={e=>setPassword(e.target.value)}  className='input-text' placeholder='Password'/>
      <i class="bi bi-lock-fill icon "></i>
      </div>
    <div className="form-group">
    <button className='btn primary-btn'>Login</button>
      </div>
      </form>
      </div>

      </div>
    </div>
  )

  
  
}

export default AdminLoginForm