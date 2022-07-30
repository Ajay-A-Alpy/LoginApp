import React ,{useState,useEffect} from  'react';
import BaseLogin from '../imports/BaseLogin';
import AdminLoginForm from '../imports/AdminLoginForm';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function AdminLogin() {


    useEffect(() => {
        let adminToken=localStorage.getItem("adminToken");
        if(adminToken){
            navigate("/home")
        }
    
    }, [])
    

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [message,setMessage]=useState("");

  const navigate=useNavigate();


  const validateLog=()=>{
    if(email==""){
      setMessage("Email Required");
      return false;
    }
    else{
      setMessage("");
    }
    if(email.indexOf('@')<=0){
      setMessage("Email is invalid");
      return false
      }
      else {
        setMessage("");
      }
  
      if(email.charAt(email.length-4)!="." && email.charAt(email.length-3)!="."){
        setMessage("Email is invalid");
        return false
        }
        else {
          setMessage("");
        }
  
        if(password==""){
          setMessage("password  Required");
          return false
        }
        else{
          setMessage("")
        }
    
        if(password.length <=3 ){
          setMessage("password is too short");
          return false
        }
        else{
          setMessage("")
        }
  
    return true;
  
  }
  

  const handlesubmit=async (event)=>{
    event.preventDefault();
    const AdminCredential={
      email,
      password
    }

 let isValid=validateLog()

 if(isValid){

  try{
    const url="http://localhost:4000/api/admin";
 const {data}=  await axios.post(url,AdminCredential);

 localStorage.setItem("adminToken",data.data)
    navigate('/admin/home')
  }

  catch(error){
    console.log(error)

  }

  }
   

  }

  return (
    <div id='login'>
   <div className="container">
     <div className="row login-box " style={{backgroundColor:""}}>
       
<BaseLogin  admin/>
<AdminLoginForm  loginState={{handlesubmit,setEmail,setPassword,message}} />
       </div>
     </div>
   </div>

  )
}

export default AdminLogin