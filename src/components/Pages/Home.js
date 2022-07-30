import axios from 'axios';
import React,{useEffect} from 'react';
import Header from '../imports/Header';
import {useNavigate} from 'react-router-dom';

 function Home  () {
  const navigate=useNavigate();

  useEffect( () => {

    const token=localStorage.getItem('token')
    if(!token){
      navigate('/login')
    }
    else{
      // const url="http://localhost:4000/api"
      // const {user}= axios.post(url,{token:token})
    }
  })
  


  return (
<>
    <Header/>
    <main>
    <div className='container d-flex v-100  align-item-center '  >
        <h2 className=' mx-auto p-3  bg-light text-dark'style={{marginTop:"10%"}} >Welcome to Home Page</h2><br/>
       

    </div>
    </main>
   
    <h3 className='text-center'>Choose your category</h3>
    <div className='d-flex'>
    <div className='container d-flex v-100  align-item-center '>
 

        <h2 className=' mx-auto p-5 bg-success text-white'style={{marginTop:"10%"}} >Mobiles..<i class="bi bi-phone-fill"></i>
        <p> we have a diverse collection of iOS and Android mobiles ranging from basic mobiles, low-range and mid-range phones to very high-end smartphones</p>
        
        </h2> <br/>
       

    </div>
   
    <div className='container d-flex v-100  align-item-center '  >
        <h2 className=' mx-auto p-5 bg-warning text-white'style={{marginTop:"10%"}} >Laptpos..<i class="bi bi-laptop"></i> <br></br>Get the best Laptops Online from Reliance Digital. Shop from top Laptop Brands like Apple, HP, Lenovo, Microsoft, Dell, iBall & more.<br/></h2><br/>
        
    </div>


    <div className='container d-flex v-100  align-item-center '  >
        <h2 className=' mx-auto p-5 bg-success text-white'style={{marginTop:"10%"}} >Computer..<i class="bi bi-pc-display-horizontal"></i> <br />Online store in India for graphics card, motherboard, processor, solid state drive, gaming cabinet, keyboard, mouse, power supply, gaming accessories etc.</h2><br/>

    </div>
    </div>

    <div className='d-flex'>
    <div className='container d-flex v-100  align-item-center '  >
        <h2 className=' mx-auto p-5 bg-primary text-white'style={{marginTop:"10%"}} >Air -conditions</h2><br/>

    </div>

    <div className='container d-flex v-100  align-item-center '  >
        <h2 className=' mx-auto p-5 bg-danger text-white'style={{marginTop:"10%"}} >Televisions</h2><br/>

    </div>


    <div className='container d-flex v-100  align-item-center '  >
        <h2 className=' mx-auto p-5 bg-primary text-white'style={{marginTop:"10%"}} >Fridges</h2><br/>

    </div>
    </div>
  
    

  
    </>
  )
}

export default Home