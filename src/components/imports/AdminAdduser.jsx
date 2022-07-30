import React ,{useState} from 'react'

function AdminAdduser(props) {
  let {handleRegister,setUsername,setEmail,setMobile,setPassword,nameError,emailError,mobileError,passwordError}=props.registerState;

return (

    <div className='col-md-12 col-lg-6 mx-auto bg-light'>
    <div className="form-section">
    <div className="title">
      <h3>
Add  New User 
      </h3>
    </div>
    <div className="login-inner-form">
      <form method="POST" onSubmit={handleRegister}>
    
    <div className="form-group form-box">
      <input type="text"  id='username' onChange={e=>setUsername(e.target.value)} className='input-text' placeholder='Username'/>
      <i class="bi bi-person-fill icon"></i>
      <p className='fs-5 text-danger'>{nameError}</p>
      </div>
    
      <div className="form-group form-box">
      <input type="text"  id='email'  onChange={e=>setEmail(e.target.value)} className='input-text'  placeholder='Email'/>
      <i class="bi bi-envelope-fill icon"></i>
      <p className='fs-5 text-danger'>{emailError}</p>
      </div>

      <div className="form-group form-box">
      <input type="number"  id='mobile'  onChange={e=>setMobile(e.target.value)} className='input-text' placeholder='Mobile'/>
      <i class="bi bi-phone-fill icon"></i>
      <p className='fs-5 text-danger'>{mobileError}</p>
      </div>

      
      <div className="form-group form-box">
      <input type="text"  id='password'  onChange={e=>setPassword(e.target.value)} className='input-text' placeholder='Password'/>
      <i class="bi bi-lock-fill icon "></i>
      <p className='fs-5 text-danger'>{passwordError}</p>
      </div>
  
    <div className="form-group">
    <button className='btn btn-primary'>Add Now</button>
      </div>
      </form>
      </div>

      </div>
    </div>
  )
}

export default AdminAdduser