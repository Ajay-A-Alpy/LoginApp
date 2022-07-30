import React ,{useState,useEffect} from  'react';
import BaseLogin from '../imports/BaseLogin';
import LoginForm from '../imports/LoginForm';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function Login() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [message,setMessage]=useState("");
  const navigate=useNavigate();

useEffect(() => {
let  token= localStorage.getItem("token");
if(token){
  navigate('/');
}

 
}, [])


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
    const userCredential={
      email,
      password
    }

const isValid=validateLog();
if(isValid){

  try{
    const url="http://localhost:4000/api/login";
 const {data}=  await axios.post(url,userCredential);

 if(data.data === "Blocked"){
  console.log(data.data)
  setMessage("User is Blocked")
  navigate('/')
 
}else if(data.data==="Invalid"){
  setMessage("Invalid username or password")

}

else{
  localStorage.setItem("token",data.data)
  navigate('/')
}
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
<BaseLogin/>
<LoginForm login  loginState={{handlesubmit,setEmail,setPassword,message}} />
       </div>
     </div>
   </div>

  )
}

export default Login