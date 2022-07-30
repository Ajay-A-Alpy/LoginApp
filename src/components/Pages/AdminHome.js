import axios from 'axios';
import React,{useEffect,useState} from 'react';
import Adminheader from '../imports/Adminheader';
import {useNavigate} from 'react-router-dom';


function AdminHome() {
    const navigate=useNavigate();
    const [users, setUsers] = useState([])

    useEffect( () => {
      const adminToken=localStorage.getItem('adminToken')
      if(!adminToken){
        navigate('/admin')
      }
      else{
        const getdata= async ()=>{
            try{
                const url="http://localhost:4000/api/admin/home"
                const {data} = await  axios.post(url,{admin:true})
                setUsers(data.data)
                console.log(data.data)
            }
            catch (error){
                console.log(error)
            }
        }
        getdata();
      }
    },[])

    const deleteUser= async(id)=>{

      let valid=window.confirm("Are you sure want to delete user?")
      if(valid){

        try{
          const url="http://localhost:4000/api/admin/delete"
           await axios.post(url,{user:id})
           window.location="/admin/home"
        }
        catch(error){
        console.log(error)
        }

        
      }
       
    }


    const blockUser= async(id)=>{
        try{
        
          const url="http://localhost:4000/api/admin/block"
           await axios.post(url,{user:id})
           window.location="/admin/home"
        }
        catch(error){
        console.log(error)
        }
    }
    
    const unblockUser= async(id)=>{
        try{
           
          const url="http://localhost:4000/api/admin/unblock"
           await axios.post(url,{user:id})
          
           window.location="/admin/home"
        }
        catch(error){
        console.log(error)
        }
    }

  
    
   
  
    return (
  <>
      <Adminheader/>
      <main>
      <div className='container ' >
          <h2 className='text-center'> Welcome to Admin Page</h2>
          <table className="table">
  <thead>
    <tr>
      <th scope="col">Sl no</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Options</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
{
    users?.map((user,index)=>{
        return(
            <tr className='' key={user._id} >
            <th scope="row">{index+1}</th>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.mobile}</td>
            <td>{user.blockStatus ? <button className='btn btn-success'  onClick={unblockUser.bind(this,user._id)} >unblock</button> : <button className='btn btn-secondary'  onClick={blockUser.bind(this,user._id)} >Block</button> }
            
                </td>
            <td><button className='btn btn-danger' onClick={deleteUser.bind(this,user._id)} >Delete</button></td>
           
          </tr>


        )

    })
}


   
  </tbody>
</table>
<button className='btn btn-success' onClick={()=>{navigate('/add-user')}} >Add User</button>
      </div>
      </main>
    
      </>
    )}

export default AdminHome