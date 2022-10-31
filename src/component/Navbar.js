import React from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Navbar() {

  const redirect  = useNavigate()

  const Logout = async()=>{
      try{
        await axios.delete('http://localhost:5000/logout')
        redirect("/")
      }catch(e){
        console.log(e)
      } 
  }

    return (
   	<div>
   		<div >
         <ul style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'20px 10px auto',padding:'10px'}}>
           <li style={{marginRight:'20px'}}>Dashboard </li>
           <li  style={{marginRight:'20px'}}>About </li>
           <li onClick={Logout}  style={{marginRight:'20px'}}>Logout</li>
         </ul>
      </div>
   	</div>
    );
}

export default Navbar;
