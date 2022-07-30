import axios from 'axios';
import React, {useState} from 'react';
import Adminheader from '../imports/Adminheader';
import AdminAdduser from '../imports/AdminAdduser';
import {useNavigate} from 'react-router-dom'

function AddUser() {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [mobile,setMobile]=useState("");
  const [password,setPassword]=useState("")
  let [nameError,setNameError]=useState("")
  let [emailError,setEmailError]=useState("")
  let [mobileError,setMobileError]=useState("")
  let [passwordError,setPasswordError]=useState("")
  const navigate=useNavigate();
  let letters= /^[a-zA-Z ]*$/;

const validate=()=>{

  if(username==""){
    setNameError("Name must be filled")
    return false
  }
  else{
    setNameError("");
  }


  if( username.length <= 3){
    setNameError("Name is too short")
    return false;
  }
  else{
    setNameError("");
  }

  if(!(username.match(letters))){
    setNameError("Name must be alphabets")
    return false;
  }
  else{
    setNameError("");
  }


  if(email==""){
    setEmailError("Email must be filled");
    return false
  }
  else{
    setEmailError("");

  }


  if(email.indexOf('@')<=0){
    setEmailError("Email is invalid");
    return false
    }
    else {
      setEmailError("");
    }

    if(email.charAt(email.length-4)!="." && email.charAt(email.length-3)!="."){
      setEmailError("Email is invalid");
      return false
      }
      else {
        setEmailError("");
      }

//mobile number check

  if(mobile==""){
    setMobileError("Mobile Number must be filled")
    return false
  }else{
    setMobileError("");

  }

  if(mobile.length != 10){
    setMobileError("Mobile Number must be 10 digits")
    return false
  }else{
    setMobileError("");

  }

  if(mobile.match(letters)){
    setMobileError("Mobile Number must be numerals")
    return false
  }else{
    setMobileError("");

  }



  
  if(password==""){
    setPasswordError("password  Required");
    return false
  }
  else{
    setPasswordError("")
  }

  if(password.length <=3 ){
    setPasswordError("password is too short");
    return false
  }
  else{
    setPasswordError("")
  }

  return true;
  

}

  
  const handleRegister=async (e)=>{
    e.preventDefault()
   let isValid= validate();
   if( isValid){
    const User={
      username,email,mobile,password
    }
    try{
      const url="http://localhost:4000/api/signup";
     await axios.post(url,User);
      navigate('/admin/home')
    }
    catch(error){
      console.log(error);
    }
   }
    
  }
  
 
  return (
   
    <div id='' className=' bg-light mx-auto'>
       <Adminheader></Adminheader>
    <div className="container mx-auto  ">
 
      <div className="row mx-auto pt-5" style={{backgroundColor:""}}>

     

 <AdminAdduser  registerState={ {handleRegister,setUsername,setEmail,setMobile,setPassword,nameError,emailError,mobileError,passwordError}} />
        </div>
      </div>
    </div>
  )
}

export default AddUser