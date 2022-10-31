import React from "react"
import Navbar from "./Navbar"
import axios from "axios" 
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const [name,setName] = React.useState("")
  const [token,setToken] = React.useState("")
  const [expire,setExpire] = React.useState("")
  const history=useNavigate()
  const axiosJwt = axios.create()

  React.useEffect(()=>{
  	refreshToken()
  },[])

  const refreshToken = async() =>{
  	try{
  		const response = await axios.get('http://localhost:5000/token')
  		setToken(response.data.accessToken)
  		const decoded = jwt_decode(response.data.accessToken)
  		setName(decoded.userEmail)
  		setExpire(decoded.exp)
  		console.log(decoded)
  	}catch(e){
  		if(e.response){
  			history('/')
  		}
  	}
  }

  const getUserWithToken = async() =>{
  		try{
  			const response = await axiosJwt.get('http://localhost:5000/users',{
  				headers:{
  					Authorization:`Bearer ${token}`
  				}
  			})
  			console.log(response)
  		}catch(e){
  			console.log(e.response)
  		}
  }


  axiosJwt.interceptors.request.use(async(config)=>{
  	const currentDate = new Date()
  	if(expire * 1000 < currentDate.getTime()){
  		const response = await axios.get('http://localhost:5000/token')
  		config.headers.Authorization = `Bearer ${response.data.accessToken}`
  		setToken(response.data.accessToken)
      const decoded = jwt_decode(response.data.accessToken)
      setName(decoded.userEmail)
      setExpire(decoded.exp)
  	}
    return config
  },(e)=>{
    return Promise.reject(e)
  })

  return (
 	<div>
 		<Navbar />
 		<h1 className="title ml-3">Welcome back :{token}</h1>
 		<button onClick={getUserWithToken}>getUser</button>
 	</div>
  );
}

export default Dashboard;
